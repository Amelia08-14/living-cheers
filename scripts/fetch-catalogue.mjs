// Télécharge les photos produits des marques (voir scripts/catalogue-sources.json),
// les convertit en WebP (640 et 1280 px) dans public/catalogue/<marque>/
// et écrit lib/catalogue-images.json (dimensions, pour éviter les sauts de mise en page).
// À relancer seulement si le catalogue change :
//   npm run catalogue
import sharp from 'sharp';
import { mkdir, readFile, writeFile, access } from 'node:fs/promises';

const SRC = 'assets-src/catalogue';
const OUT = 'public/catalogue';
const sources = JSON.parse(await readFile('scripts/catalogue-sources.json', 'utf8'));
const manifest = {};

const exists = (p) => access(p).then(() => true, () => false);

async function download(url, file) {
  if (await exists(file)) return readFile(file);
  for (let attempt = 1; attempt <= 3; attempt++) {
    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 (catalogue Living Cheers)' } });
    if (res.ok) {
      const buf = Buffer.from(await res.arrayBuffer());
      await writeFile(file, buf);
      return buf;
    }
    console.warn(`  ${res.status} ${url} (essai ${attempt})`);
  }
  throw new Error(`Échec du téléchargement : ${url}`);
}

async function processProduct({ brand, slug, images }) {
  await mkdir(`${SRC}/${brand}`, { recursive: true });
  await mkdir(`${OUT}/${brand}`, { recursive: true });
  const list = [];
  for (const [i, url] of images.entries()) {
    const n = i + 1;
    const buf = await download(url, `${SRC}/${brand}/${slug}-${n}`);
    // Fond blanc sous les PNG transparents.
    const base = sharp(buf).rotate().flatten({ background: '#ffffff' });
    let size;
    for (const w of [640, 1280]) {
      const info = await base
        .clone()
        .resize({ width: w, withoutEnlargement: true })
        .webp({ quality: 76 })
        .toFile(`${OUT}/${brand}/${slug}-${n}-${w}.webp`);
      if (w === 1280) size = [info.width, info.height];
    }
    list.push(size);
  }
  manifest[`${brand}/${slug}`] = list;
  console.log(`${brand}/${slug} : ${list.length} photo(s)`);
}

// Quelques produits à la fois, pour ne pas surcharger les serveurs des marques.
const queue = [...sources];
await Promise.all(
  Array.from({ length: 4 }, async () => {
    while (queue.length) await processProduct(queue.shift());
  }),
);

const sorted = Object.fromEntries(Object.entries(manifest).sort(([a], [b]) => a.localeCompare(b)));
await writeFile('lib/catalogue-images.json', JSON.stringify(sorted, null, 1) + '\n');
console.log(`${Object.keys(sorted).length} produits, manifeste écrit dans lib/catalogue-images.json`);

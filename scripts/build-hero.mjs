// Photos plein écran (accueil et bandeaux des pages pays), à partir des photos
// téléchargées par `npm run catalogue` (assets-src/catalogue/).
//   npm run hero
import sharp from 'sharp';
import { mkdir, writeFile } from 'node:fs/promises';

const SRC = 'assets-src/catalogue';
const OUT = 'public/images/hero';

// nom de sortie -> photo source
const HERO = {
  'accueil-1': 'portugal/canape-noosa-1',
  'accueil-2': 'portugal/meridienne-noosa-1',
  'accueil-3': 'portugal/meridienne-moon-1',
  portugal: 'portugal/meridienne-51698-1',
  suisse: 'suisse/lit-omega-1',
  belgique: 'belgique/parme-2',
};

await mkdir(OUT, { recursive: true });
const sizes = {};
for (const [name, src] of Object.entries(HERO)) {
  for (const w of [960, 1920]) {
    const info = await sharp(`${SRC}/${src}`)
      .flatten({ background: '#ffffff' })
      .resize({ width: w, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(`${OUT}/${name}-${w}.webp`);
    if (w === 1920) sizes[name] = [info.width, info.height];
    console.log(name, w, `${info.width}x${info.height}`, `${Math.round(info.size / 1024)} Ko`);
  }
}
await writeFile('lib/hero-images.json', JSON.stringify(sizes, null, 1) + '\n');

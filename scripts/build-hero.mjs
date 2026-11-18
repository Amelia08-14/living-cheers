// Photos plein écran (accueil et bandeaux des 3 catalogues), à partir des photos
// téléchargées par `npm run catalogue` (assets-src/catalogue/).
//   npm run hero
import sharp from 'sharp';
import { mkdir, writeFile } from 'node:fs/promises';

const SRC = 'assets-src/catalogue';
const OUT = 'public/images/hero';

// nom de sortie -> photo source
const HERO = {
  'accueil-1': 'produits/canape-noosa-1',
  'accueil-2': 'produits/meridienne-noosa-1',
  'accueil-3': 'produits/meridienne-moon-1',
  'catalogue-1': 'produits/angle-80690-1',
  'catalogue-2': 'produits/ensemble-51197-1',
  'catalogue-3': 'produits/fauteuil-71099-1',
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

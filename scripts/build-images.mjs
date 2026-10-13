// Optimise les photos sources (assets-src/) vers public/images/ en WebP,
// et extrait le logo en PNG transparent. À relancer seulement si les sources changent :
//   npm run images
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';

const SRC = 'assets-src';
const OUT = 'public/images';
await mkdir(OUT, { recursive: true });

// nom de sortie -> fichier source
const photos = {
  'render-column': '5.jpg',
  'render-aerial': '7.jpg', // contient des bandes noires, rognées automatiquement
  'render-massage': '9.jpg',
  'render-recliners': '11.jpg',
  'render-arches': '13.jpg',
  'real-hall': '6.jpg',
  'real-aisle': '15.jpg',
  'real-arches': '14.jpg',
  'storefront': '4.jpg',
};

for (const [name, file] of Object.entries(photos)) {
  for (const w of [700, 1400]) {
    const info = await sharp(`${SRC}/${file}`)
      .trim({ threshold: 12 })
      .resize({ width: w, withoutEnlargement: true })
      .webp({ quality: 78 })
      .toFile(`${OUT}/${name}-${w}.webp`);
    console.log(name, w, `${info.width}x${info.height}`, `${Math.round(info.size / 1024)} Ko`);
  }
}

// Logo noir sur blanc -> PNG transparent (encre + version claire pour fond sombre)
const { data, info } = await sharp(`${SRC}/3.jpg`)
  .trim({ threshold: 40 })
  .extend({ top: 6, bottom: 6, left: 6, right: 6, background: '#fff' })
  .greyscale()
  .raw()
  .toBuffer({ resolveWithObject: true });

for (const [suffix, [r, g, b]] of Object.entries({ ink: [21, 23, 26], light: [243, 241, 236] })) {
  const rgba = Buffer.alloc(info.width * info.height * 4);
  for (let i = 0; i < data.length; i++) {
    rgba[i * 4] = r;
    rgba[i * 4 + 1] = g;
    rgba[i * 4 + 2] = b;
    rgba[i * 4 + 3] = 255 - data[i];
  }
  await sharp(rgba, { raw: { width: info.width, height: info.height, channels: 4 } })
    .png({ compressionLevel: 9 })
    .toFile(`${OUT}/logo-${suffix}.png`);
  console.log('logo', suffix, `${info.width}x${info.height}`);
}

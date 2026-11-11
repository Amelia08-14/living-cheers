// Photos plein écran générées par scripts/build-hero.mjs (npm run hero).
import SIZES from './hero-images.json';

export type HeroName = keyof typeof SIZES;

export function heroImage(name: HeroName) {
  const [width, height] = SIZES[name];
  const base = `/images/hero/${name}`;
  return {
    src: `${base}-1920.webp`,
    srcSet: `${base}-960.webp 960w, ${base}-1920.webp ${width}w`,
    width,
    height,
  };
}

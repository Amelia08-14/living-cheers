import type { CSSProperties } from 'react';

// Dimensions des fichiers générés par scripts/build-images.mjs
const SIZES = {
  'render-column': [1400, 1050],
  'render-aerial': [1206, 680],
  'render-massage': [1400, 1050],
  'render-recliners': [1400, 1050],
  'render-arches': [1400, 1050],
  'real-hall': [1400, 1050],
  'real-aisle': [1400, 1050],
  'real-arches': [1400, 1050],
  storefront: [1400, 788],
} as const;

export type PicName = keyof typeof SIZES;

type Props = {
  name: PicName;
  alt: string;
  sizes?: string;
  eager?: boolean;
  className?: string;
  style?: CSSProperties;
};

export default function Pic({ name, alt, sizes = '100vw', eager = false, className, style }: Props) {
  const [w, h] = SIZES[name];
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/images/${name}-1400.webp`}
      srcSet={`/images/${name}-700.webp 700w, /images/${name}-1400.webp ${w}w`}
      sizes={sizes}
      width={w}
      height={h}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      className={className}
      style={style}
    />
  );
}

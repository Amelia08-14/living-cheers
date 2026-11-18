import Link from 'next/link';
import type { CSSProperties } from 'react';
import { productImages, type Catalogue, type Product } from '@/lib/catalogue';
import styles from './ProductCard.module.css';

type Props = {
  catalogue: Catalogue;
  product: Product;
  sizes?: string;
};

export default function ProductCard({ catalogue, product, sizes = '(min-width: 1000px) 25vw, 50vw' }: Props) {
  const [img] = productImages(product);
  const frame = {
    '--ratio': catalogue.frame.ratio,
    '--fit': catalogue.frame.fit,
  } as CSSProperties;

  return (
    <Link href={`/catalogue/${catalogue.slug}/${product.slug}`} className={styles.card}>
      <div className={`${styles.frame} ${catalogue.frame.fit === 'contain' ? styles.packshot : ''}`} style={frame}>
        {img && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={img.src}
            srcSet={img.srcSet}
            sizes={sizes}
            width={img.width}
            height={img.height}
            alt=""
            loading="lazy"
            decoding="async"
            className={styles.img}
          />
        )}
      </div>
      <h3 className={styles.name}>{product.name}</h3>
      <p className={styles.summary}>{product.summary}</p>
    </Link>
  );
}

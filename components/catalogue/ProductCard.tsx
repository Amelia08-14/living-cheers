import Link from 'next/link';
import type { CSSProperties } from 'react';
import { productImages, type Country, type Product } from '@/lib/catalogue';
import styles from './ProductCard.module.css';

type Props = {
  country: Country;
  product: Product;
  sizes?: string;
};

export default function ProductCard({ country, product, sizes = '(min-width: 1000px) 25vw, 50vw' }: Props) {
  const [img] = productImages(country, product);
  const frame = {
    '--ratio': country.frame.ratio,
    '--fit': country.frame.fit,
  } as CSSProperties;

  return (
    <Link href={`/catalogue/${country.slug}/${product.slug}`} className={styles.card}>
      <div className={`${styles.frame} ${country.frame.fit === 'contain' ? styles.packshot : ''}`} style={frame}>
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

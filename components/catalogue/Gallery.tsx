'use client';

import { useState } from 'react';
import type { ProductImage } from '@/lib/catalogue';
import styles from './Gallery.module.css';

type Props = {
  images: ProductImage[];
  name: string;
  ratio: string;
  /** Packshots sur fond blanc (sinon fond plâtre). */
  white: boolean;
};

export default function Gallery({ images, name, ratio, white }: Props) {
  const [active, setActive] = useState(0);
  const current = images[active];
  if (!current) return null;

  return (
    <div className={styles.gallery}>
      <div className={`${styles.stage} ${white ? styles.white : ''}`} style={{ aspectRatio: ratio }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          key={current.src}
          src={current.src}
          srcSet={current.srcSet}
          sizes="(min-width: 1000px) 56vw, 100vw"
          width={current.width}
          height={current.height}
          alt={images.length > 1 ? `${name}, photo ${active + 1} sur ${images.length}` : name}
          fetchPriority="high"
          className={styles.main}
        />
      </div>

      {images.length > 1 && (
        <ul className={styles.thumbs} aria-label="Photos">
          {images.map((img, i) => (
            <li key={img.src}>
              <button
                type="button"
                className={`${styles.thumb} ${white ? styles.white : ''}`}
                aria-label={`Afficher la photo ${i + 1}`}
                aria-current={i === active}
                onClick={() => setActive(i)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src.replace('-1280.webp', '-640.webp')}
                  width={img.width}
                  height={img.height}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

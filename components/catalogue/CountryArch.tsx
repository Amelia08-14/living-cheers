import Link from 'next/link';
import { countryVisual, type Country } from '@/lib/catalogue';
import styles from './CountryArch.module.css';

type Props = {
  country: Country;
  sizes?: string;
  /** Titre de niveau h2 (accueil) ou h3 (sous un h2 existant). */
  as?: 'h2' | 'h3';
};

// Carte d'un pays : photo dans une arche, comme les arcades du salon d'exposition.
export default function CountryArch({ country, sizes = '(min-width: 900px) 30vw, 80vw', as: Heading = 'h3' }: Props) {
  const img = countryVisual(country);
  return (
    <Link href={`/catalogue/${country.slug}`} className={styles.card}>
      <div className={styles.frame}>
        <div className={styles.outline} aria-hidden="true" />
        <div className={styles.arch}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
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
            style={{ objectPosition: country.visual.position }}
          />
        </div>
        <span className={styles.code}>{country.code}</span>
      </div>
      <div className={styles.text}>
        <Heading className={styles.name}>{country.name}</Heading>
        <p className={styles.specialty}>{country.specialty}</p>
        <p className={styles.more}>
          {country.products.length} modèles
          <span aria-hidden="true" className={styles.arrow}>
            →
          </span>
        </p>
      </div>
    </Link>
  );
}

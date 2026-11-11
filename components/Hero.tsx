import type { CSSProperties } from 'react';
import Link from 'next/link';
import SiteHeader from './SiteHeader';
import { COUNTRIES } from '@/lib/catalogue';
import { heroImage, type HeroName } from '@/lib/hero';
import { SITE } from '@/lib/site';
import styles from './Hero.module.css';

const delay = (s: number) => ({ '--d': `${s}s` }) as CSSProperties;

const SLIDES: { name: HeroName; alt: string }[] = [
  { name: 'accueil-1', alt: 'Canapé gris dans un salon aux tons sable' },
  { name: 'accueil-2', alt: 'Canapé méridienne blanc dans un salon lumineux' },
  { name: 'accueil-3', alt: 'Canapé méridienne clair devant une cheminée' },
];

export default function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div className={styles.media}>
        {SLIDES.map((s, i) => {
          const img = heroImage(s.name);
          return (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={s.name}
              src={img.src}
              srcSet={img.srcSet}
              sizes="100vw"
              width={img.width}
              height={img.height}
              alt={i === 0 ? s.alt : ''}
              loading={i === 0 ? 'eager' : 'lazy'}
              fetchPriority={i === 0 ? 'high' : 'auto'}
              className={styles.slide}
            />
          );
        })}
        <div className={styles.shade} aria-hidden="true" />
      </div>

      <SiteHeader overlay />

      <div className={styles.inner}>
        <h1 className={`${styles.mark} ${styles.rise}`} style={delay(1.8)}>
          Living Cheers
        </h1>

        <ul className={`${styles.countries} ${styles.rise}`} style={delay(2.1)} aria-label="Collections par pays">
          {COUNTRIES.map((c) => (
            <li key={c.slug}>
              <Link href={`/catalogue/${c.slug}`}>{c.name}</Link>
            </li>
          ))}
        </ul>

        <p className={`${styles.sub} ${styles.rise}`} style={delay(2)}>
          Le confort
          <br />
          européen
        </p>

        <p className={`${styles.script} ${styles.rise}`} style={delay(2.3)}>
          {SITE.tagline}
        </p>

        <div className={`${styles.actions} ${styles.rise}`} style={delay(2.2)}>
          <Link className={styles.cta} href="/catalogue">
            Voir le catalogue <span aria-hidden="true">↗</span>
          </Link>
          <a className={styles.ghost} href="#contact">
            Nous trouver
          </a>
        </div>

        <p className={`${styles.place} ${styles.rise}`} style={delay(2.4)}>
          Place Bathurst Mall · Bathurst, N.-B.
        </p>
      </div>
    </section>
  );
}

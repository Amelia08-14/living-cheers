import type { CSSProperties } from 'react';
import Link from 'next/link';
import Pic from './Pic';
import SiteHeader from './SiteHeader';
import { COUNTRIES } from '@/lib/catalogue';
import { SITE } from '@/lib/site';
import styles from './Hero.module.css';

const delay = (s: number) => ({ '--d': `${s}s` }) as CSSProperties;

export default function Hero() {
  return (
    <>
      <SiteHeader overlay />

      <section id="top" className={styles.hero}>
        <div className={styles.copy}>
          <p className={`eyebrow ${styles.rise}`} style={delay(1.9)}>
            Place Bathurst Mall · Bathurst, N.-B.
          </p>
          <h1 className={styles.title}>
            <span className={`${styles.thin} ${styles.rise}`} style={delay(2)}>
              Le confort
            </span>
            <span className={`${styles.bold} ${styles.rise}`} style={delay(2.12)}>
              européen
            </span>
          </h1>
          <p className={`${styles.tagline} ${styles.rise}`} style={delay(2.3)}>
            {SITE.tagline}
          </p>
          <p className={`${styles.note} ${styles.rise}`} style={delay(2.35)}>
            Canapés relax, literie et fauteuils massants choisis en Europe, à essayer dans notre salon d’exposition.
          </p>
          <ul className={`${styles.words} ${styles.rise}`} style={delay(2.4)} aria-label="Collections par pays">
            {COUNTRIES.map((c) => (
              <li key={c.slug}>
                <Link href={`/catalogue/${c.slug}`}>{c.name}</Link>
              </li>
            ))}
          </ul>
          <div className={`${styles.actions} ${styles.rise}`} style={delay(2.55)}>
            <Link className={styles.primary} href="/catalogue">
              Voir le catalogue
            </Link>
            <a className={styles.ghost} href="#contact">
              Nous trouver
            </a>
          </div>
        </div>

        <figure className={`${styles.visual} ${styles.rise}`} style={delay(1.75)}>
          <div className={styles.outline} aria-hidden="true" />
          <div className={styles.arch}>
            <Pic
              name="render-arches"
              alt="Rendu conceptuel : divans en tissu dans le futur salon d'exposition"
              eager
              sizes="(min-width: 1000px) 40vw, 80vw"
              className={styles.slide}
            />
            <Pic
              name="render-recliners"
              alt="Rendu conceptuel : salons sectionnels moutarde et blanc"
              eager
              sizes="(min-width: 1000px) 40vw, 80vw"
              className={styles.slide}
            />
            <Pic
              name="render-massage"
              alt="Rendu conceptuel : fauteuils de massage au centre du salon"
              eager
              sizes="(min-width: 1000px) 40vw, 80vw"
              className={styles.slide}
            />
          </div>
          <figcaption className={styles.caption}>Rendu conceptuel du futur salon d’exposition</figcaption>
        </figure>
      </section>
    </>
  );
}

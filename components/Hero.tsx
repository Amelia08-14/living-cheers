import type { CSSProperties } from 'react';
import Pic from './Pic';
import { SITE } from '@/lib/site';
import styles from './Hero.module.css';

const delay = (s: number) => ({ '--d': `${s}s` }) as CSSProperties;

export default function Hero() {
  return (
    <>
      <header className={styles.header}>
        <a href="#top" className={styles.brand} aria-label="Living Cheers, haut de page">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo-ink.png" width={630} height={220} alt="Living Cheers" />
        </a>
        <a className={styles.tel} href={SITE.phoneHref}>
          {SITE.phone}
        </a>
      </header>

      <section id="top" className={styles.hero}>
        <div className={styles.copy}>
          <p className={`eyebrow ${styles.rise}`} style={delay(1.9)}>
            Place Bathurst Mall · Bathurst, N.-B.
          </p>
          <h1 className={styles.title}>
            <span className={`${styles.thin} ${styles.rise}`} style={delay(2)}>
              Site en
            </span>
            <span className={`${styles.bold} ${styles.rise}`} style={delay(2.12)}>
              construction
            </span>
          </h1>
          <p className={`${styles.tagline} ${styles.rise}`} style={delay(2.3)}>
            {SITE.tagline}
          </p>
          <p className={`${styles.note} ${styles.rise}`} style={delay(2.35)}>
            Notre site est en cours de réalisation. Revenez bientôt !
          </p>
          <p className={`${styles.words} ${styles.rise}`} style={delay(2.4)}>
            Meubles · Salons · Confort
          </p>
          <div className={`${styles.actions} ${styles.rise}`} style={delay(2.55)}>
            <a className={styles.primary} href={`mailto:${SITE.email}`}>
              Nous écrire
            </a>
            <a className={styles.ghost} href={SITE.phoneHref}>
              Appeler
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

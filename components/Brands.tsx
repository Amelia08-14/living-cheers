import Link from 'next/link';
import Reveal from './Reveal';
import CountryArch from './catalogue/CountryArch';
import { COUNTRIES } from '@/lib/catalogue';
import styles from './Brands.module.css';

// Accueil : les trois marques représentées, par pays d'origine.
export default function Brands() {
  return (
    <section id="marques" className={styles.section}>
      <div className="wrap">
        <Reveal className={styles.head}>
          <div>
            <p className="eyebrow">Nos marques</p>
            <h2 className={styles.h2}>
              Trois maisons européennes, <em>un seul salon.</em>
            </h2>
          </div>
          <Link href="/catalogue" className={styles.all}>
            Tout le catalogue <span aria-hidden="true">→</span>
          </Link>
        </Reveal>
        <div className={styles.grid}>
          {COUNTRIES.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.1}>
              <CountryArch country={c} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

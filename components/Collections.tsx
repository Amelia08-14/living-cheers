import Link from 'next/link';
import Reveal from './Reveal';
import CountryArch from './catalogue/CountryArch';
import { COUNTRIES } from '@/lib/catalogue';
import styles from './Collections.module.css';

// Accueil : les collections, par pays d'origine.
export default function Collections() {
  return (
    <section id="collections" className={styles.section}>
      <div className="wrap">
        <Reveal className={styles.head}>
          <div>
            <p className="eyebrow">Nos collections</p>
            <h2 className={styles.h2}>
              Trois pays d’Europe, <em>un seul salon.</em>
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

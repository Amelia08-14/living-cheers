import Link from 'next/link';
import Reveal from './Reveal';
import CatalogueArch from './catalogue/CatalogueArch';
import { CATALOGUES } from '@/lib/catalogue';
import styles from './Collections.module.css';

// Accueil : les 3 catalogues.
export default function Collections() {
  return (
    <section id="collections" className={styles.section}>
      <div className="wrap">
        <Reveal className={styles.head}>
          <div>
            <p className="eyebrow">Nos catalogues</p>
            <h2 className={styles.h2}>
              Trois catalogues, <em>un seul salon.</em>
            </h2>
          </div>
          <Link href="/catalogue" className={styles.all}>
            Tout le catalogue <span aria-hidden="true">→</span>
          </Link>
        </Reveal>
        <div className={styles.grid}>
          {CATALOGUES.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.1}>
              <CatalogueArch catalogue={c} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

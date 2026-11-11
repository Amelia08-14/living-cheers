import Link from 'next/link';
import LeafMark from './LeafMark';
import { COUNTRIES } from '@/lib/catalogue';
import { SITE } from '@/lib/site';
import styles from './SiteFooter.module.css';

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <LeafMark className={styles.bigMark} strokeWidth={1} />
      <div className={`wrap ${styles.inner}`}>
        <div className={styles.top}>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/logo-light.png" width={630} height={220} alt="Living Cheers" className={styles.logo} />
            <p className={styles.tag}>{SITE.tagline}</p>
          </div>
          <nav aria-label="Catalogue par pays">
            <p className={styles.navTitle}>Catalogue</p>
            <ul className={styles.navList}>
              {COUNTRIES.map((c) => (
                <li key={c.slug}>
                  <Link href={`/catalogue/${c.slug}`}>
                    {c.name} <span>· {c.brand}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className={styles.legal}>© {new Date().getFullYear()} Living Cheers. Tous droits réservés.</p>
      </div>
    </footer>
  );
}

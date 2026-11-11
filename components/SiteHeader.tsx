import Link from 'next/link';
import { SITE } from '@/lib/site';
import styles from './SiteHeader.module.css';

type Props = {
  /** Posé par-dessus une photo plein écran : en-tête transparent, texte blanc. */
  overlay?: boolean;
};

export default function SiteHeader({ overlay = false }: Props) {
  return (
    <header className={`${styles.header} ${overlay ? styles.overlay : styles.bar}`}>
      <Link href="/" className={styles.brand} aria-label="Living Cheers, accueil">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={overlay ? '/images/logo-light.png' : '/images/logo-ink.png'} width={630} height={220} alt="Living Cheers" />
      </Link>
      <nav className={styles.nav} aria-label="Navigation principale">
        <Link href="/" className={`${styles.link} ${styles.wide}`}>
          Accueil
        </Link>
        <Link href="/catalogue" className={styles.link}>
          Catalogue
        </Link>
        <Link href="/#contact" className={`${styles.link} ${styles.wide}`}>
          Contact
        </Link>
      </nav>
      <a className={styles.tel} href={SITE.phoneHref}>
        {SITE.phone}
      </a>
    </header>
  );
}

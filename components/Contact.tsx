import Pic from './Pic';
import Reveal from './Reveal';
import { SITE } from '@/lib/site';
import styles from './Contact.module.css';

export default function Contact() {
  const { address } = SITE;
  return (
    <section id="contact" className={styles.section}>
      <div className={`wrap ${styles.grid}`}>
        <Reveal className={styles.copy}>
          <p className="eyebrow">Venez nous voir</p>
          <h2 className={styles.h2}>Au cœur de Place Bathurst Mall.</h2>
          <p className={styles.lead}>
            Une question ? Écrivez-nous ou appelez, on vous répond.
          </p>

          <address className={styles.address}>
            {address.street}
            <br />
            {address.place}
            <br />
            {address.city} {address.postal}
          </address>

          <ul className={styles.links}>
            <li>
              <a href={SITE.phoneHref}>{SITE.phone}</a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </li>
            <li>
              <a href={SITE.mapsHref} target="_blank" rel="noopener noreferrer">
                Voir l’itinéraire
              </a>
            </li>
          </ul>
        </Reveal>

        <Reveal className={styles.visual} delay={0.12}>
          <figure>
            <div className={styles.window}>
              <Pic
                name="storefront"
                alt="La vitrine Living Cheers, au Place Bathurst Mall, avec le logo à quatre pétales dorés"
                sizes="(min-width: 1000px) 46vw, 100vw"
                className={styles.img}
              />
            </div>
            <figcaption className={styles.caption}>La vitrine, au Place Bathurst Mall</figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}

import type { CSSProperties } from 'react';
import Pic, { type PicName } from './Pic';
import Reveal from './Reveal';
import styles from './Products.module.css';

type Item = {
  title: string;
  text: string;
  img: PicName;
  alt: string;
  /** Cadrage de la photo dans l'arche (position, zoom). */
  x: string;
  y: string;
  zoom: number;
};

const ITEMS: Item[] = [
  {
    title: 'Salons sectionnels',
    text: 'De l’espace pour toute la famille, en tissus et en couleurs à comparer côte à côte.',
    img: 'render-recliners',
    alt: 'Salon sectionnel moutarde sur tapis, avec table d’appoint ronde',
    x: '4%',
    y: '60%',
    zoom: 1,
  },
  {
    title: 'Divans inclinables',
    text: 'Dossiers et appuie-têtes à ajuster, pour trouver l’inclinaison qui vous convient.',
    img: 'render-arches',
    alt: 'Trois divans en tissu beige, gris et vert olive',
    x: '58%',
    y: '70%',
    zoom: 1,
  },
  {
    title: 'Fauteuils de massage',
    text: 'Une pause détente à essayer sur place avant de choisir.',
    img: 'render-massage',
    alt: 'Quatre fauteuils de massage alignés au centre du salon',
    x: '52%',
    y: '50%',
    zoom: 1.05,
  },
  {
    title: 'Fauteuils inclinables',
    text: 'Le coin lecture ou télé, en cuir ou en tissu.',
    img: 'render-aerial',
    alt: 'Fauteuils inclinables beige et noir sur un tapis, au centre du salon',
    x: '48%',
    y: '46%',
    zoom: 1.9,
  },
];

export default function Products() {
  return (
    <section id="produits" className={styles.section}>
      <div className="wrap">
        <Reveal className={styles.head}>
          <p className="eyebrow">Au salon d’exposition</p>
          <h2 className={styles.h2}>Du confort à essayer sur place.</h2>
          <p className={styles.lead}>
            Quatre univers réunis au même endroit : on s’assoit, on compare, on choisit.
          </p>
        </Reveal>
      </div>

      <ul className={styles.rail}>
        {ITEMS.map((it, i) => (
          <li key={it.title} className={styles.card}>
            <Reveal delay={i * 0.09}>
              <figure>
                <div className={styles.arch}>
                  <Pic
                    name={it.img}
                    alt={it.alt}
                    sizes="(min-width: 1000px) 22vw, 72vw"
                    className={styles.img}
                    style={
                      {
                        objectPosition: `${it.x} ${it.y}`,
                        '--zoom': it.zoom,
                        transformOrigin: `${it.x} ${it.y}`,
                      } as CSSProperties
                    }
                  />
                </div>
                <figcaption className={styles.cap}>
                  <h3 className={styles.h3}>{it.title}</h3>
                  <p>{it.text}</p>
                </figcaption>
              </figure>
            </Reveal>
          </li>
        ))}
      </ul>

      <div className="wrap">
        <p className={styles.note}>Images : rendus conceptuels du futur salon d’exposition.</p>
      </div>
    </section>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import Reveal from '@/components/Reveal';
import CountryArch from '@/components/catalogue/CountryArch';
import ProductCard from '@/components/catalogue/ProductCard';
import { COUNTRIES, PRODUCT_COUNT, productsByCategory } from '@/lib/catalogue';
import styles from './catalogue.module.css';

export const metadata: Metadata = {
  title: 'Catalogue par pays',
  description:
    'Le catalogue Living Cheers : canapés Cheers (Portugal), literie Swiss Forme (Suisse) et fauteuils massants KingPur (Belgique).',
  alternates: { canonical: '/catalogue' },
};

export default function CataloguePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className={`wrap ${styles.intro}`}>
          <p className="eyebrow">Catalogue · {PRODUCT_COUNT} modèles</p>
          <h1 className={styles.h1}>
            Trois pays, <em>trois savoir-faire.</em>
          </h1>
          <p className={styles.lead}>
            Living Cheers réunit trois marques européennes : les canapés relax du Portugal, la literie suisse et les
            fauteuils massants de Belgique. Choisissez un pays pour parcourir sa collection.
          </p>
        </section>

        <section className={`wrap ${styles.countries}`} aria-label="Pays">
          {COUNTRIES.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.1}>
              <CountryArch country={c} as="h2" />
            </Reveal>
          ))}
        </section>

        {COUNTRIES.map((c) => {
          // Un modèle par catégorie, pour donner un aperçu de la collection.
          const preview = productsByCategory(c)
            .map((g) => g.products[0])
            .concat(c.products)
            .filter((p, i, all) => all.indexOf(p) === i)
            .slice(0, 4);
          return (
            <section key={c.slug} className={styles.preview} aria-labelledby={`apercu-${c.slug}`}>
              <div className="wrap">
                <Reveal className={styles.previewHead}>
                  <div>
                    <p className="eyebrow">
                      {c.code} · {c.name}
                    </p>
                    <h2 id={`apercu-${c.slug}`} className={styles.h2}>
                      {c.brand}
                    </h2>
                    <p className={styles.tagline}>{c.tagline}</p>
                  </div>
                  <Link href={`/catalogue/${c.slug}`} className={styles.all}>
                    Voir les {c.products.length} modèles <span aria-hidden="true">→</span>
                  </Link>
                </Reveal>
                <ul className={styles.grid} data-fit={c.frame.fit}>
                  {preview.map((p, i) => (
                    <li key={p.slug}>
                      <Reveal delay={i * 0.06}>
                        <ProductCard country={c} product={p} />
                      </Reveal>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          );
        })}
      </main>
      <SiteFooter />
    </>
  );
}

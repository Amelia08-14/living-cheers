import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import Reveal from '@/components/Reveal';
import CatalogueArch from '@/components/catalogue/CatalogueArch';
import ProductCard from '@/components/catalogue/ProductCard';
import { CATALOGUES, PRODUCT_COUNT, productsByCategory } from '@/lib/catalogue';
import styles from './catalogue.module.css';

export const metadata: Metadata = {
  title: 'Nos catalogues',
  description:
    'Les 3 catalogues Living Cheers : canapés d’angle et méridiennes, canapés et ensembles, fauteuils relax. Fabriqués au Portugal.',
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
            Trois catalogues, <em>un même confort.</em>
          </h1>
          <p className={styles.lead}>
            Canapés d’angle, méridiennes, ensembles et fauteuils relax, fabriqués au Portugal. Choisissez un catalogue
            pour parcourir ses modèles.
          </p>
        </section>

        <section className={`wrap ${styles.countries}`} aria-label="Catalogues">
          {CATALOGUES.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.1}>
              <CatalogueArch catalogue={c} as="h2" />
            </Reveal>
          ))}
        </section>

        {CATALOGUES.map((c) => {
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
                      {c.code} · {c.specialty}
                    </p>
                    <h2 id={`apercu-${c.slug}`} className={styles.h2}>
                      {c.name}
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
                        <ProductCard catalogue={c} product={p} />
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

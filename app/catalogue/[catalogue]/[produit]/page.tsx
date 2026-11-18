import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import Gallery from '@/components/catalogue/Gallery';
import ProductCard from '@/components/catalogue/ProductCard';
import { CATALOGUES, getProduct, productImages } from '@/lib/catalogue';
import styles from '../../catalogue.module.css';

type Params = { params: Promise<{ catalogue: string; produit: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return CATALOGUES.flatMap((c) => c.products.map((p) => ({ catalogue: c.slug, produit: p.slug })));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { catalogue: catalogueSlug, produit } = await params;
  const found = getProduct(catalogueSlug, produit);
  if (!found) return {};
  const { catalogue, product } = found;
  const [img] = productImages(product);
  return {
    title: `${product.name} · ${catalogue.name}`,
    description: `${product.name}, ${catalogue.specialty.toLowerCase()}. ${product.summary}`,
    alternates: { canonical: `/catalogue/${catalogue.slug}/${product.slug}` },
    openGraph: img ? { images: [{ url: img.src, width: img.width, height: img.height }] } : undefined,
  };
}

export default async function ProductPage({ params }: Params) {
  const { catalogue: catalogueSlug, produit } = await params;
  const found = getProduct(catalogueSlug, produit);
  if (!found) notFound();
  const { catalogue, product } = found;

  const category = catalogue.categories.find((c) => c.slug === product.category);
  const images = productImages(product);
  const related = catalogue.products
    .filter((p) => p.slug !== product.slug)
    .sort((a, b) => Number(b.category === product.category) - Number(a.category === product.category))
    .slice(0, 4);
  const stageRatio = catalogue.frame.fit === 'contain' ? '1 / 1' : catalogue.frame.ratio === '4 / 5' ? '4 / 5' : '3 / 2';

  return (
    <>
      <SiteHeader />
      <main>
        <nav className={`wrap ${styles.crumbs}`} aria-label="Fil d’Ariane">
          <Link href="/catalogue">Catalogues</Link>
          <span aria-hidden="true">/</span>
          <Link href={`/catalogue/${catalogue.slug}`}>{catalogue.name}</Link>
          {category && catalogue.categories.length > 1 && (
            <>
              <span aria-hidden="true">/</span>
              <Link href={`/catalogue/${catalogue.slug}#${category.slug}`}>{category.title}</Link>
            </>
          )}
        </nav>

        <article className={`wrap ${styles.product}`}>
          <Gallery images={images} name={product.name} ratio={stageRatio} white={catalogue.frame.fit === 'contain'} />

          <div className={styles.info}>
            <p className="eyebrow">
              {catalogue.name}
              {category ? ` · ${category.title}` : ''}
            </p>
            <h1 className={styles.productTitle}>{product.name}</h1>
            <p className={styles.summaryLine}>{product.summary}</p>

            <div className={styles.desc}>
              {product.description.map((t) => (
                <p key={t}>{t}</p>
              ))}
            </div>

            {product.specs && product.specs.length > 0 && (
              <dl className={styles.specs}>
                {product.specs.map((s) => (
                  <div key={s.label}>
                    <dt>{s.label}</dt>
                    <dd>{s.value}</dd>
                  </div>
                ))}
              </dl>
            )}

            {product.features && product.features.length > 0 && (
              <div className={styles.features}>
                <h2>{product.category === 'entretien' ? 'Mode d’emploi et atouts' : 'Points forts'}</h2>
                <ul>
                  {product.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
            )}

            <p className={styles.origin}>
              {catalogue.name} · Fabriqué au Portugal
            </p>
          </div>
        </article>

        {related.length > 0 && (
          <section className={styles.related} aria-labelledby="dans-la-collection">
            <div className="wrap">
              <div className={styles.previewHead}>
                <h2 id="dans-la-collection" className={styles.h2}>
                  Dans la même collection
                </h2>
                <Link href={`/catalogue/${catalogue.slug}`} className={styles.all}>
                  Toute la collection <span aria-hidden="true">→</span>
                </Link>
              </div>
              <ul className={styles.grid} data-fit={catalogue.frame.fit}>
                {related.map((p) => (
                  <li key={p.slug}>
                    <ProductCard catalogue={catalogue} product={p} />
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}
      </main>
      <SiteFooter />
    </>
  );
}

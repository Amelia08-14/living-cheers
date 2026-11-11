import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import Reveal from '@/components/Reveal';
import CountryArch from '@/components/catalogue/CountryArch';
import ProductCard from '@/components/catalogue/ProductCard';
import { COUNTRIES, countryVisual, getCountry, productsByCategory } from '@/lib/catalogue';
import styles from '../catalogue.module.css';

type Params = { params: Promise<{ pays: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return COUNTRIES.map((c) => ({ pays: c.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const country = getCountry((await params).pays);
  if (!country) return {};
  const img = countryVisual(country);
  return {
    title: `${country.name} · ${country.brand}`,
    description: `${country.brand} (${country.name}) : ${country.specialty.toLowerCase()}. ${country.products.length} modèles au catalogue Living Cheers.`,
    alternates: { canonical: `/catalogue/${country.slug}` },
    openGraph: { images: [{ url: img.src, width: img.width, height: img.height }] },
  };
}

export default async function CountryPage({ params }: Params) {
  const country = getCountry((await params).pays);
  if (!country) notFound();

  const groups = productsByCategory(country);
  const img = countryVisual(country);
  const others = COUNTRIES.filter((c) => c.slug !== country.slug);

  return (
    <>
      <SiteHeader />
      <main>
        <nav className={`wrap ${styles.crumbs}`} aria-label="Fil d’Ariane">
          <Link href="/catalogue">Catalogue</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{country.name}</span>
        </nav>

        <section className={`wrap ${styles.countryHero}`}>
          <div className={styles.countryCopy}>
            <p className="eyebrow">
              {country.code} · {country.place}
            </p>
            <h1 className={styles.brandTitle}>{country.brand}</h1>
            <p className={styles.tagline}>{country.tagline}</p>
            {country.intro.map((t) => (
              <p key={t} className={styles.body}>
                {t}
              </p>
            ))}
            <dl className={styles.facts}>
              {country.facts.map((f) => (
                <div key={f.label}>
                  <dt>{f.value}</dt>
                  <dd>{f.label}</dd>
                </div>
              ))}
            </dl>
          </div>
          <figure className={styles.countryVisual}>
            <div className={styles.outline} aria-hidden="true" />
            <div className={styles.arch}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                srcSet={img.srcSet}
                sizes="(min-width: 1000px) 36vw, 80vw"
                width={img.width}
                height={img.height}
                alt=""
                fetchPriority="high"
                style={{ objectPosition: country.visual.position }}
              />
            </div>
          </figure>
        </section>

        {groups.length > 1 && (
          <nav className={styles.cats} aria-label="Catégories">
            <ul className="wrap">
              {groups.map(({ category, products }) => (
                <li key={category.slug}>
                  <a href={`#${category.slug}`}>
                    {category.title} <span>{products.length}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}

        {groups.map(({ category, products }) => (
          <section key={category.slug} id={category.slug} className={styles.category}>
            <div className="wrap">
              <Reveal className={styles.catHead}>
                <h2 className={styles.h2}>{category.title}</h2>
                <p className={styles.catIntro}>
                  {category.intro} <span>{products.length} modèle{products.length > 1 ? 's' : ''}</span>
                </p>
              </Reveal>
              <ul className={styles.grid} data-fit={country.frame.fit}>
                {products.map((p, i) => (
                  <li key={p.slug}>
                    <Reveal delay={(i % 4) * 0.06}>
                      <ProductCard country={country} product={p} />
                    </Reveal>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}

        <section className={styles.others} aria-labelledby="autres-pays">
          <div className="wrap">
            <p className="eyebrow">Poursuivre la visite</p>
            <h2 id="autres-pays" className={styles.h2}>
              Les autres pays
            </h2>
            <div className={styles.othersGrid}>
              {others.map((c) => (
                <CountryArch key={c.slug} country={c} sizes="(min-width: 900px) 24vw, 80vw" />
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

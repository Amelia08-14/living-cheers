import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import Reveal from '@/components/Reveal';
import CatalogueArch from '@/components/catalogue/CatalogueArch';
import ProductCard from '@/components/catalogue/ProductCard';
import { CATALOGUES, getCatalogue, productsByCategory } from '@/lib/catalogue';
import { heroImage, type HeroName } from '@/lib/hero';
import styles from '../catalogue.module.css';

type Params = { params: Promise<{ catalogue: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return CATALOGUES.map((c) => ({ catalogue: c.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const catalogue = getCatalogue((await params).catalogue);
  if (!catalogue) return {};
  const banner = heroImage(`catalogue-${catalogue.slug}` as HeroName);
  return {
    title: `${catalogue.name} · ${catalogue.specialty}`,
    description: `${catalogue.name} Living Cheers : ${catalogue.specialty.toLowerCase()}. ${catalogue.products.length} modèles fabriqués au Portugal.`,
    alternates: { canonical: `/catalogue/${catalogue.slug}` },
    openGraph: { images: [{ url: banner.src, width: banner.width, height: banner.height }] },
  };
}

export default async function CountryPage({ params }: Params) {
  const catalogue = getCatalogue((await params).catalogue);
  if (!catalogue) notFound();

  const groups = productsByCategory(catalogue);
  const banner = heroImage(`catalogue-${catalogue.slug}` as HeroName);
  const others = CATALOGUES.filter((c) => c.slug !== catalogue.slug);

  return (
    <>
      <main>
        <section className={styles.banner}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={banner.src}
            srcSet={banner.srcSet}
            sizes="100vw"
            width={banner.width}
            height={banner.height}
            alt=""
            fetchPriority="high"
            className={styles.bannerImg}
          />
          <div className={styles.bannerShade} aria-hidden="true" />
          <SiteHeader overlay />
          <div className={`wrap ${styles.bannerInner}`}>
            <nav className={styles.crumbsLight} aria-label="Fil d’Ariane">
              <Link href="/catalogue">Catalogues</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{catalogue.name}</span>
            </nav>
            <p className={styles.bannerEyebrow}>
              {catalogue.code} · {catalogue.specialty}
            </p>
            <h1 className={styles.bannerTitle}>{catalogue.name}</h1>
            <p className={styles.bannerTagline}>{catalogue.tagline}</p>
          </div>
        </section>

        <section className={`wrap ${styles.countryIntro}`}>
          <div className={styles.introText}>
            {catalogue.intro.map((t) => (
              <p key={t}>{t}</p>
            ))}
          </div>
          <dl className={styles.facts}>
            {catalogue.facts.map((f) => (
              <div key={f.label}>
                <dt>{f.value}</dt>
                <dd>{f.label}</dd>
              </div>
            ))}
          </dl>
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
              <ul className={styles.grid} data-fit={catalogue.frame.fit}>
                {products.map((p, i) => (
                  <li key={p.slug}>
                    <Reveal delay={(i % 4) * 0.06}>
                      <ProductCard catalogue={catalogue} product={p} />
                    </Reveal>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}

        <section className={styles.others} aria-labelledby="autres-catalogue">
          <div className="wrap">
            <p className="eyebrow">Poursuivre la visite</p>
            <h2 id="autres-catalogue" className={styles.h2}>
              Les autres catalogue
            </h2>
            <div className={styles.othersGrid}>
              {others.map((c) => (
                <CatalogueArch key={c.slug} catalogue={c} sizes="(min-width: 900px) 24vw, 80vw" />
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import Reveal from '@/components/Reveal';
import CountryArch from '@/components/catalogue/CountryArch';
import ProductCard from '@/components/catalogue/ProductCard';
import { COUNTRIES, getCountry, productsByCategory } from '@/lib/catalogue';
import { heroImage, type HeroName } from '@/lib/hero';
import styles from '../catalogue.module.css';

type Params = { params: Promise<{ pays: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return COUNTRIES.map((c) => ({ pays: c.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const country = getCountry((await params).pays);
  if (!country) return {};
  const banner = heroImage(country.slug as HeroName);
  return {
    title: `Collection ${country.name}`,
    description: `Collection ${country.name} : ${country.specialty.toLowerCase()}. ${country.products.length} modèles au catalogue Living Cheers.`,
    alternates: { canonical: `/catalogue/${country.slug}` },
    openGraph: { images: [{ url: banner.src, width: banner.width, height: banner.height }] },
  };
}

export default async function CountryPage({ params }: Params) {
  const country = getCountry((await params).pays);
  if (!country) notFound();

  const groups = productsByCategory(country);
  const banner = heroImage(country.slug as HeroName);
  const others = COUNTRIES.filter((c) => c.slug !== country.slug);

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
              <Link href="/catalogue">Catalogue</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{country.name}</span>
            </nav>
            <p className={styles.bannerEyebrow}>
              {country.code} · {country.specialty}
            </p>
            <h1 className={styles.bannerTitle}>{country.name}</h1>
            <p className={styles.bannerTagline}>{country.tagline}</p>
          </div>
        </section>

        <section className={`wrap ${styles.countryIntro}`}>
          <div className={styles.introText}>
            {country.intro.map((t) => (
              <p key={t}>{t}</p>
            ))}
          </div>
          <dl className={styles.facts}>
            {country.facts.map((f) => (
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

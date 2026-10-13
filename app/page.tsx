import Gate from '@/components/Gate';
import Hero from '@/components/Hero';
import Contact from '@/components/Contact';
import { SITE } from '@/lib/site';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FurnitureStore',
  name: SITE.name,
  url: SITE.url,
  slogan: SITE.tagline,
  email: SITE.email,
  telephone: '+1-506-546-9626',
  image: `${SITE.url}/images/render-aerial-1400.webp`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1300 St-Peter Avenue, Place Bathurst Mall, unit 64/66',
    addressLocality: 'Bathurst',
    addressRegion: 'NB',
    postalCode: 'E2A 3A6',
    addressCountry: 'CA',
  },
};

export default function Home() {
  return (
    <>
      <Gate />
      <main>
        <Hero />
        <Contact />
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}

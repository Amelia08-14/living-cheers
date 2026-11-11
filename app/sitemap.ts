import type { MetadataRoute } from 'next';
import { COUNTRIES } from '@/lib/catalogue';
import { SITE } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE.url, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE.url}/catalogue`, changeFrequency: 'weekly', priority: 0.9 },
    ...COUNTRIES.flatMap((c) => [
      { url: `${SITE.url}/catalogue/${c.slug}`, changeFrequency: 'weekly' as const, priority: 0.8 },
      ...c.products.map((p) => ({
        url: `${SITE.url}/catalogue/${c.slug}/${p.slug}`,
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      })),
    ]),
  ];
}

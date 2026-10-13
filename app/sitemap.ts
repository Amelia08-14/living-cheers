import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: 'https://livingcheers.groupevelmont.ca', changeFrequency: 'weekly', priority: 1 }];
}

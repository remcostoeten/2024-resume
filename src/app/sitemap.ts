import { MetadataRoute } from 'next';
import { cfg } from '@/lib/cfg';

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString();

  return [
    {
      url: cfg.BASE_URL,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 1.0,
    },
  ];
}


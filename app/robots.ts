import { MetadataRoute } from 'next';
import { getSiteConfig } from '@/lib/content';

export default function robots(): MetadataRoute.Robots {
  const config = getSiteConfig();

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/', '/thank-you', '/keystatic'],
    },
    sitemap: `${config.url}/sitemap.xml`,
  };
}

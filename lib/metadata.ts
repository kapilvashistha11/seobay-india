import type { Metadata } from 'next';
import { getSiteConfig } from './content';

interface MetadataProps {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
}

export function constructMetadata({
  title,
  description,
  path = '',
  noIndex = false,
}: MetadataProps): Metadata {
  const config = getSiteConfig();
  const canonicalUrl = `${config.url}${path.startsWith('/') ? path : `/${path}`}`;

  return {
    metadataBase: new URL(config.url),
    title: `${title} | ${config.name}`,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
    openGraph: {
      title: `${title} | ${config.name}`,
      description,
      url: canonicalUrl,
      siteName: config.name,
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${config.name}`,
      description,
    },
  };
}

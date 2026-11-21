import { getSiteConfig } from './content';

export function getOrganizationSchema() {
  const config = getSiteConfig();
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${config.url}/#organization`,
    name: config.name,
    legalName: config.legalName,
    url: config.url,
    founder: {
      '@type': 'Person',
      name: config.founder.name,
      jobTitle: config.founder.role,
    },
    sameAs: [
      config.social.facebook,
      config.social.instagram,
      config.social.linkedin,
    ].filter(Boolean),
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: config.contact.phone,
      contactType: 'customer support',
      email: config.contact.emailPrimary,
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi'],
    },
  };
}

export function getLocalBusinessSchema() {
  const config = getSiteConfig();
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService'],
    '@id': `${config.url}/#localbusiness`,
    name: config.name,
    url: config.url,
    telephone: config.contact.phone,
    email: config.contact.emailPrimary,
    address: {
      '@type': 'PostalAddress',
      streetAddress: config.address.street,
      addressLocality: config.address.city,
      addressRegion: config.address.state,
      postalCode: config.address.postalCode,
      addressCountry: config.address.countryCode,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: config.address.geo.latitude,
      longitude: config.address.geo.longitude,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        opens: '09:30',
        closes: '19:00',
      },
    ],
    priceRange: '₹₹',
    areaServed: [
      { '@type': 'City', name: 'Jaipur' },
      { '@type': 'State', name: 'Rajasthan' },
      { '@type': 'Country', name: 'India' },
    ],
  };
}

export function getBreadcrumbSchema(items: { name: string; path: string }[]) {
  const config = getSiteConfig();
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${config.url}${item.path}`,
    })),
  };
}

export function getServiceSchema(service: {
  title: string;
  slug: string;
  summary: string;
  startingPrice: string;
}) {
  const config = getSiteConfig();
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${config.url}/services/${service.slug}#service`,
    name: service.title,
    serviceType: service.title,
    description: service.summary,
    url: `${config.url}/services/${service.slug}`,
    provider: {
      '@id': `${config.url}/#localbusiness`,
    },
    areaServed: [
      { '@type': 'City', name: 'Jaipur' },
      { '@type': 'State', name: 'Rajasthan' },
      { '@type': 'Country', name: 'India' },
    ],
    offers: {
      '@type': 'Offer',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'INR',
        description: service.startingPrice,
      },
    },
  };
}

export function getArticleSchema(post: {
  title: string;
  slug: string;
  summary: string;
  publishDate: string;
  author: string;
}) {
  const config = getSiteConfig();
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${config.url}/blog/${post.slug}#article`,
    headline: post.title,
    description: post.summary,
    url: `${config.url}/blog/${post.slug}`,
    datePublished: post.publishDate,
    dateModified: post.publishDate,
    author: {
      '@type': 'Person',
      name: post.author,
      url: `${config.url}/about`,
      jobTitle: config.founder.role,
    },
    publisher: {
      '@id': `${config.url}/#organization`,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${config.url}/blog/${post.slug}`,
    },
  };
}



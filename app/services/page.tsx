import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllServices } from '@/lib/content';
import { constructMetadata } from '@/lib/metadata';
import { getBreadcrumbSchema } from '@/lib/jsonld';
import { ArrowRight, CheckCircle2, Search, MapPin, Star, Wrench, Megaphone, Laptop, BrainCircuit } from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'Digital Marketing & Search Visibility Services',
  description:
    'Explore our comprehensive search acquisition suite: Technical SEO, Local SEO, Google Business Profile optimization, Google/Meta Ads, and fast website development in Jaipur.',
  path: '/services',
});

const categoryIcons: Record<string, React.ReactNode> = {
  seo: <Search className="w-6 h-6" />,
  'local-seo': <MapPin className="w-6 h-6" />,
  'google-business-profile': <Star className="w-6 h-6" />,
  'website-audit': <Wrench className="w-6 h-6" />,
  'google-ads': <Megaphone className="w-6 h-6" />,
  'meta-ads': <Megaphone className="w-6 h-6" />,
  'social-media-marketing': <Megaphone className="w-6 h-6" />,
  'website-design-development': <Laptop className="w-6 h-6" />,
  'aeo-geo-optimization': <BrainCircuit className="w-6 h-6" />,
};

export default function ServicesHubPage() {
  const services = getAllServices();
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
  ]);

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav className="text-xs font-mono text-slate-500 mb-6 flex items-center gap-2">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span>/</span>
          <span className="text-slate-900 font-semibold">Services</span>
        </nav>

        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 font-mono text-xs font-bold mb-3">
            CAPABILITY CATALOG
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Search Visibility & Digital Marketing Services
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Every service we offer is designed to solve one specific commercial challenge: helping qualified, high-intent customers discover, trust, and contact your business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const icon = categoryIcons[service.frontmatter.slug] || <Search className="w-6 h-6" />;
            const isCore = service.frontmatter.priority <= 3;

            return (
              <div
                key={service.frontmatter.slug}
                className={`bg-white rounded-2xl p-8 border transition flex flex-col justify-between ${
                  isCore
                    ? 'border-blue-200 shadow-sm hover:border-blue-400 hover:shadow-md ring-1 ring-blue-500/10'
                    : 'border-slate-200 hover:border-slate-300 hover:shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
                      {icon}
                    </div>
                    <span className="text-[11px] font-mono uppercase font-bold text-slate-500 px-2.5 py-1 bg-slate-100 rounded-md">
                      {service.frontmatter.category}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-slate-950 mb-3">
                    <Link
                      href={`/services/${service.frontmatter.slug}`}
                      className="hover:text-blue-600 transition"
                    >
                      {service.frontmatter.title}
                    </Link>
                  </h2>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {service.frontmatter.summary}
                  </p>

                  <div className="space-y-2 mb-6 border-t border-slate-100 pt-4">
                    <div className="text-xs font-mono font-bold text-slate-700 uppercase">Core Deliverables:</div>
                    <ul className="text-xs space-y-1.5 text-slate-600">
                      {service.frontmatter.deliverables.slice(0, 3).map((d) => (
                        <li key={d} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="text-xs font-mono text-slate-500">
                    <span className="font-semibold text-slate-800">{service.frontmatter.startingPrice}</span>
                  </div>
                  <Link
                    href={`/services/${service.frontmatter.slug}`}
                    className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 group"
                  >
                    <span>View Scope</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Exclusion Banner */}
        <div className="mt-16 p-6 rounded-xl bg-slate-100 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-sm font-bold text-slate-900">Service Scope Notice</h3>
            <p className="text-xs text-slate-600 mt-1">
              SeoBay India specializes in search strategy, technical SEO, performance media, and web engineering. We do <strong>NOT</strong> offer video production, shooting, or physical studio filming.
            </p>
          </div>
          <Link
            href="/#consultation"
            className="px-5 py-2.5 rounded-lg bg-blue-600 text-white font-bold text-xs hover:bg-blue-700 transition flex-shrink-0"
          >
            Schedule Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}

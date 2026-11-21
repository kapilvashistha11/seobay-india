import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllServices, getServiceBySlug, getSiteConfig } from '@/lib/content';
import { constructMetadata } from '@/lib/metadata';
import { getBreadcrumbSchema, getServiceSchema } from '@/lib/jsonld';
import { renderMarkdownToHtml } from '@/lib/markdown';
import { CheckCircle2, XCircle, ArrowRight, Phone, MessageSquare } from 'lucide-react';

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const services = getAllServices();
  return services.map((service) => ({
    slug: service.frontmatter.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};

  return constructMetadata({
    title: service.frontmatter.metaTitle,
    description: service.frontmatter.metaDescription,
    path: `/services/${service.frontmatter.slug}`,
  });
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  const config = getSiteConfig();
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: service.frontmatter.title, path: `/services/${service.frontmatter.slug}` },
  ]);
  const serviceSchema = getServiceSchema(service.frontmatter);

  return (
    <article className="py-12 bg-slate-50 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="text-xs font-mono text-slate-500 mb-6 flex items-center gap-2">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-blue-600">Services</Link>
          <span>/</span>
          <span className="text-slate-900 font-semibold">{service.frontmatter.title}</span>
        </nav>

        {/* Header Block */}
        <header className="bg-white p-8 sm:p-12 rounded-2xl border border-slate-200 shadow-sm mb-10">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <span className="text-xs font-mono uppercase font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              {service.frontmatter.category}
            </span>
            <span className="text-xs font-mono text-slate-500 font-semibold">
              Scope: {service.frontmatter.startingPrice}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight mb-4">
            {service.frontmatter.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
            {service.frontmatter.summary}
          </p>

          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center gap-4">
            <Link
              href="/#consultation"
              className="px-6 py-3 rounded-lg bg-blue-600 text-white font-bold text-xs sm:text-sm hover:bg-blue-700 shadow-sm flex items-center gap-2 transition"
            >
              <span>Schedule Strategy Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`https://wa.me/${config.contact.whatsapp.replace(/[^0-9]/g, '')}?text=Hi%20Kapil,%20I%20am%20interested%20in%20${encodeURIComponent(service.frontmatter.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-lg bg-emerald-50 text-emerald-700 font-semibold text-xs sm:text-sm border border-emerald-200 hover:bg-emerald-100 flex items-center gap-2 transition"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Discuss on WhatsApp</span>
            </a>
          </div>
        </header>

        {/* Deliverables & Exclusions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* Deliverables */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-base font-bold text-slate-950 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              Core Deliverables Included
            </h2>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-700 font-medium">
              {service.frontmatter.deliverables.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Exclusions (Honesty Filter) */}
          <div className="bg-slate-100/70 p-6 sm:p-8 rounded-2xl border border-slate-200">
            <h2 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-slate-400"></span>
              What We Do NOT Do (The Honesty Filter)
            </h2>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
              {service.frontmatter.exclusions.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* In-Depth Content Body */}
        <div className="bg-white p-8 sm:p-12 rounded-2xl border border-slate-200 shadow-sm mb-10 prose prose-slate max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-blue-600 prose-a:font-semibold">
          <div dangerouslySetInnerHTML={{ __html: renderMarkdownToHtml(service.content) }} />
        </div>

        {/* Pricing & Scope Cross-Link Block */}
        <div className="bg-blue-50 border border-blue-200 p-8 rounded-2xl mb-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div>
            <h3 className="text-base font-bold text-slate-950">How We Determine Pricing for {service.frontmatter.title}</h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Pricing is calibrated based on competition, current technical health, and market size.
            </p>
          </div>
          <Link
            href="/pricing"
            className="px-5 py-2.5 rounded-lg bg-blue-600 text-white font-bold text-xs hover:bg-blue-700 transition flex-shrink-0"
          >
            Review Pricing & Scope →
          </Link>
        </div>

        {/* Bottom Consultation Box */}
        <div className="bg-slate-950 text-white p-8 sm:p-12 rounded-2xl text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
            Ready to Discuss Your Search Strategy?
          </h2>
          <p className="text-sm text-slate-400 max-w-md mx-auto mb-8">
            Speak directly with Kapil Vashistha. We will review your website and current search bottlenecks before our call.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#consultation"
              className="px-6 py-3.5 rounded-lg bg-blue-600 text-white font-bold text-xs sm:text-sm hover:bg-blue-500 shadow-lg shadow-blue-600/30 transition"
            >
              Schedule 30-Minute Consultation
            </Link>
            <a
              href={`tel:${config.contact.phone}`}
              className="px-6 py-3.5 rounded-lg bg-slate-900 border border-slate-700 text-white font-semibold text-xs sm:text-sm hover:bg-slate-800 transition flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-blue-400" />
              <span>Call: {config.contact.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

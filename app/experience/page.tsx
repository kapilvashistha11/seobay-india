import type { Metadata } from 'next';
import Link from 'next/link';
import { getTestimonials, getSiteConfig } from '@/lib/content';
import { constructMetadata } from '@/lib/metadata';
import { getBreadcrumbSchema } from '@/lib/jsonld';
import { ArrowRight, CheckCircle2, Building2, ShoppingBag, Sun, GraduationCap, Sparkles, Hotel, HeartPulse, Shield } from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'Experience Across Industries | Proven Search & Digital Growth',
  description:
    'Explore SeoBay India’s practical search visibility and digital marketing experience across 10+ sectors: Jewellery, Wedding Invitations, Solar, Education, Healthcare, and Hospitality.',
  path: '/experience',
});

const pastSectors = [
  {
    title: 'Jewellery & Luxury Goods',
    icon: <Sparkles className="w-5 h-5 text-amber-600" />,
    clientRef: 'Hemaant Jaiswal (Fine Jewellery & Gems)',
    quoteStatus: '[[Verified testimonial pending from client]]',
    challenge: 'Balancing local showroom walk-ins in Rajasthan with nationwide e-commerce category search rankings.',
    solution: 'High-intent commercial category architecture, local 3-pack map dominance, and trust-building schema.',
    relevantService: '/services/seo',
    serviceName: 'Technical & Commercial SEO',
  },
  {
    title: 'Wedding Invitations & Stationery',
    icon: <ShoppingBag className="w-5 h-5 text-blue-600" />,
    clientRef: 'Gaurav Goyal (Luxury Wedding Invitations)',
    quoteStatus: '[[Verified testimonial pending from client]]',
    challenge: 'Intense seasonal search spikes and high visual discovery competition across Indian weddings.',
    solution: 'Seasonal search trend preparation, image search optimization, and friction-free inquiry funnels.',
    relevantService: '/services/seo',
    serviceName: 'E-Commerce SEO Strategy',
  },
  {
    title: 'Solar & Clean Energy',
    icon: <Sun className="w-5 h-5 text-emerald-600" />,
    clientRef: 'The Solar Street (Harsh Sharma)',
    quoteStatus: '[[Verified testimonial pending from client]]',
    challenge: 'High-ticket commercial inquiries, regional EPC competition, and subsidy query capture.',
    solution: 'B2B commercial landing pages, localized rooftop search capture, and qualified lead funnels.',
    relevantService: '/services/local-seo',
    serviceName: 'Local & Regional Search',
  },
  {
    title: 'Education, Colleges & Coaching',
    icon: <GraduationCap className="w-5 h-5 text-purple-600" />,
    clientRef: 'Lakshya Dhakad (Education Institute)',
    quoteStatus: '[[Verified testimonial pending from client]]',
    challenge: 'High-stakes seasonal admissions cycles and hyper-local coaching center discovery in Rajasthan.',
    solution: 'Course-specific landing pages, Google Business Profile category calibration, and parent trust signals.',
    relevantService: '/services/google-business-profile',
    serviceName: 'Google Business Profile',
  },
  {
    title: 'Skin Care Clinics & Medical Specialists',
    icon: <HeartPulse className="w-5 h-5 text-rose-600" />,
    clientRef: 'Medical Specialists & Aesthetic Clinics',
    quoteStatus: '[[Past engagement context]]',
    challenge: 'Google’s strict YMYL (Your Money Your Life) E-E-A-T requirements and patient appointment trust.',
    solution: 'Physician entity markup, medical qualification schema, and hyper-local map pack ranking.',
    relevantService: '/services/local-seo',
    serviceName: 'Local Map Pack Optimization',
  },
  {
    title: 'Hotels, Resorts & Hospitality',
    icon: <Hotel className="w-5 h-5 text-indigo-600" />,
    clientRef: 'Boutique Hotels & Heritage Properties',
    quoteStatus: '[[Past engagement context]]',
    challenge: 'Competing against dominant Online Travel Agencies (OTAs) for direct room reservations.',
    solution: 'Direct booking search intent capture, Google Travel metadata, and local attraction clustering.',
    relevantService: '/services/website-design-development',
    serviceName: 'Fast Web Development',
  },
  {
    title: 'Home Interiors & Architecture',
    icon: <Building2 className="w-5 h-5 text-teal-600" />,
    clientRef: 'Interior Studios & Custom Living',
    quoteStatus: '[[Past engagement context]]',
    challenge: 'High-ticket portfolio presentation combined with local residential inquiry generation.',
    solution: 'Visual portfolio schema, local residential geo-targeting, and pre-qualified inquiry forms.',
    relevantService: '/services/meta-ads',
    serviceName: 'Targeted Paid Social',
  },
  {
    title: 'Handbags & Lifestyle Brands',
    icon: <ShoppingBag className="w-5 h-5 text-cyan-600" />,
    clientRef: 'D2C Lifestyle & Handbag Designers',
    quoteStatus: '[[Past engagement context]]',
    challenge: 'Rising Meta ad costs and sole dependency on paid media for brand sales.',
    solution: 'Non-brand organic category search rankings and Google Shopping feed optimization.',
    relevantService: '/services/seo',
    serviceName: 'Commercial SEO',
  },
];

export default function ExperiencePage() {
  const config = getSiteConfig();
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Experience Across Industries', path: '/experience' },
  ]);

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="text-xs font-mono text-slate-500 mb-6 flex items-center gap-2">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span>/</span>
          <span className="text-slate-900 font-semibold">Experience Across Industries</span>
        </nav>

        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 font-mono text-xs font-bold mb-3">
            PRACTICAL SECTOR DEPTH
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Focused Search Expertise. Broad Commercial Applicability.
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Over 16 years, we have resolved search and customer acquisition bottlenecks across diverse industries. We don’t build thin, duplicate doorway pages; we demonstrate genuine, context-specific commercial understanding.
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {pastSectors.map((sector) => (
            <div
              key={sector.title}
              className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-blue-300 hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
                    {sector.icon}
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-slate-950">{sector.title}</h2>
                    <span className="text-xs font-mono text-slate-500">
                      Ref: <strong className="text-slate-700">{sector.clientRef}</strong>
                    </span>
                  </div>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-slate-600 mb-6">
                  <div>
                    <strong className="text-slate-900 font-semibold">The Search Challenge:</strong>{' '}
                    <span>{sector.challenge}</span>
                  </div>
                  <div>
                    <strong className="text-slate-900 font-semibold">Our Strategic Intervention:</strong>{' '}
                    <span>{sector.solution}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="font-mono text-slate-500">
                  Primary Solution: <strong className="text-slate-800">{sector.serviceName}</strong>
                </span>
                <Link
                  href={sector.relevantService}
                  className="font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 group"
                >
                  <span>Explore Service</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Open Applicability Callout */}
        <div className="bg-slate-950 text-white rounded-2xl p-8 sm:p-12 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-blue-400 font-mono text-xs font-bold mb-4 border border-slate-800">
              OPEN APPLICABILITY PRINCIPLE
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-4 leading-tight">
              Don’t See Your Exact Industry Listed Above?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
              Our emphasis on past sectors is not a limitation on what we take on. Search fundamentals—crawlability, Core Web Vitals, entity relationships, intent alignment, and conversion architecture—apply whether you sell industrial solar installations, run an automobile detailing studio, or manufacture handicrafts.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/#consultation"
                className="px-6 py-3.5 rounded-lg bg-blue-600 text-white font-bold text-xs sm:text-sm hover:bg-blue-500 shadow-lg shadow-blue-600/30 transition flex items-center gap-2"
              >
                <span>Discuss Your Industry Scope</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`https://wa.me/${config.contact.whatsapp.replace(/[^0-9]/g, '')}?text=Hi%20Kapil,%20I%20would%20like%20to%20discuss%20SEO%20for%20my%20industry.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-lg bg-slate-900 border border-slate-800 text-white font-semibold text-xs sm:text-sm hover:bg-slate-800 transition"
              >
                Chat on WhatsApp Directly
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteConfig } from '@/lib/content';
import { constructMetadata } from '@/lib/metadata';
import { getBreadcrumbSchema } from '@/lib/jsonld';
import { CheckCircle2, XCircle, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'SEO & Digital Marketing Pricing | Transparent Retainer Scope',
  description:
    'Clear, honest pricing for SEO and digital marketing by SeoBay India. Foundational SEO retainers start from ₹20,000/month. Learn what factors determine your project scope.',
  path: '/pricing',
});

const pricingFaqs = [
  {
    q: 'Why do SEO retainers start from ₹20,000/month?',
    a: '₹20,000/month represents the minimum resource investment required to conduct genuine, manual technical optimization, schema deployment, content architecture, and ongoing search management. Services advertising ₹5,000/month inevitably rely on automated tools, spam link schemes, or superficial reporting that create long-term algorithmic risk.',
  },
  {
    q: 'Can you guarantee #1 rankings or specific traffic figures?',
    a: 'No, and no legitimate SEO expert ever will. Organic search outcomes depend on your competitors, technical codebase, market demand, backlinks, client execution, and Google algorithm updates. We focus on commercial buying intent, crawlability, and qualified customer inquiries.',
  },
  {
    q: 'Is there a minimum contract duration?',
    a: 'We recommend a minimum 3 to 6-month commitment for organic search, as technical indexing, crawling, and algorithmic authority consolidation take time. However, we do not lock clients into restrictive multi-year contracts.',
  },
  {
    q: 'What determines whether my scope is ₹20,000 or higher?',
    a: 'Your scope is calibrated based on four factors: the competitive intensity of your target keywords, the current technical health and size of your website, whether you target a single city (Jaipur) or national markets, and the velocity of content required.',
  },
];

export default function PricingPage() {
  const config = getSiteConfig();
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Pricing & Scope', path: '/pricing' },
  ]);

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="text-xs font-mono text-slate-500 mb-6 flex items-center gap-2">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span>/</span>
          <span className="text-slate-900 font-semibold">Pricing & Scope</span>
        </nav>

        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 font-mono text-xs font-bold mb-3">
            COMMERCIAL CLARITY
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Transparent Pricing & Scope Guidelines
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            We don’t believe in hiding pricing behind endless sales calls. We give you a clear baseline, explain exactly what variables influence your total investment, and never sell commoditized packages.
          </p>
        </div>

        {/* Core Pricing Hero Box */}
        <div className="bg-white rounded-2xl border-2 border-blue-600 p-8 sm:p-12 shadow-md mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs font-mono uppercase font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                FOUNDATIONAL SEO RETAINER
              </span>
              <div className="text-sm font-semibold text-slate-500 mt-3">Engagements Start From</div>
              <div className="text-4xl sm:text-5xl font-extrabold text-slate-950 mt-1 mb-4">
                {config.pricing.seoStartingMonthly}
                <span className="text-base font-semibold text-slate-500"> / month</span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed max-w-lg mb-6">
                Designed for businesses with established websites seeking hands-on, white-hat technical search leadership directly from Kapil Vashistha (16 years SEO experience).
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/#consultation"
                  className="px-6 py-3.5 rounded-lg bg-blue-600 text-white font-bold text-xs sm:text-sm hover:bg-blue-700 shadow-sm transition flex items-center gap-2"
                >
                  <span>Request Scope Assessment</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={`https://wa.me/${config.contact.whatsapp.replace(/[^0-9]/g, '')}?text=Hi%20Kapil,%20I%20would%20like%20to%20discuss%20pricing%20for%20my%20website.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold text-xs sm:text-sm hover:bg-emerald-100 transition"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-50 p-6 rounded-xl border border-slate-200 text-xs sm:text-sm space-y-3">
              <div className="font-bold text-slate-900 pb-2 border-b border-slate-200 uppercase font-mono text-xs">
                What Is Included in Every Retainer:
              </div>
              <div className="flex items-start gap-2 text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>Direct strategy & reviews with Kapil Vashistha</span>
              </div>
              <div className="flex items-start gap-2 text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>Monthly technical crawl & error resolution</span>
              </div>
              <div className="flex items-start gap-2 text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>Commercial intent keyword clustering</span>
              </div>
              <div className="flex items-start gap-2 text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>Local Map Pack / GBP integration</span>
              </div>
              <div className="flex items-start gap-2 text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>Unedited work logs (zero vanity metrics)</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Scope Variables Grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-slate-950 mb-3">The Four Scope Determination Variables</h2>
          <p className="text-sm text-slate-600 mb-8 leading-relaxed max-w-2xl">
            Why SEO cannot be sold as rigid, identical commodity packages. Your exact scope is calibrated based on these operational factors:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs sm:text-sm">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <span className="font-mono text-blue-600 font-bold text-xs">VARIABLE 01</span>
              <h3 className="text-base font-bold text-slate-950 mt-1 mb-2">Market Search Intensity</h3>
              <p className="text-slate-600 leading-relaxed">
                A local medical clinic in Mansarovar requires a different resource allocation than a nationwide diamond jewellery e-commerce store competing against funded national brands.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <span className="font-mono text-blue-600 font-bold text-xs">VARIABLE 02</span>
              <h3 className="text-base font-bold text-slate-950 mt-1 mb-2">Codebase & Technical Health</h3>
              <p className="text-slate-600 leading-relaxed">
                Websites with deep crawl debt, broken rendering, duplicate indexation bloat, or slow Core Web Vitals require substantial upfront engineering remediation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <span className="font-mono text-blue-600 font-bold text-xs">VARIABLE 03</span>
              <h3 className="text-base font-bold text-slate-950 mt-1 mb-2">Geographic Footprint</h3>
              <p className="text-slate-600 leading-relaxed">
                Optimizing for a single physical catchment area in Jaipur versus multiple commercial metropolitan regions across India scales citation and entity governance scope.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <span className="font-mono text-blue-600 font-bold text-xs">VARIABLE 04</span>
              <h3 className="text-base font-bold text-slate-950 mt-1 mb-2">Topical Authority Velocity</h3>
              <p className="text-slate-600 leading-relaxed">
                The volume and depth of technical guides, comparison teardowns, and landing pages needed to build definitive topical dominance in your industry.
              </p>
            </div>
          </div>
        </div>

        {/* Pricing FAQs with native details/summary */}
        <div className="bg-white p-8 sm:p-12 rounded-2xl border border-slate-200 shadow-sm mb-12">
          <h2 className="text-2xl font-bold text-slate-950 mb-6 flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-blue-600" />
            <span>Frequently Asked Questions About Pricing</span>
          </h2>

          <div className="space-y-4">
            {pricingFaqs.map((faq, i) => (
              <details
                key={faq.q}
                open={i === 0}
                className="group border border-slate-200 rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer items-center justify-between font-bold text-slate-900 text-sm sm:text-base">
                  <span>{faq.q}</span>
                  <span className="ml-4 flex-shrink-0 text-slate-400 group-open:rotate-180 transition">▼</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

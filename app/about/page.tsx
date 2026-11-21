import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteConfig } from '@/lib/content';
import { constructMetadata } from '@/lib/metadata';
import { getBreadcrumbSchema } from '@/lib/jsonld';
import { ShieldCheck, CheckCircle2, ArrowRight, UserCheck, MapPin, Award } from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'About Kapil Vashistha & SeoBay India | 16 Years Search Depth',
  description:
    'Learn about Kapil Vashistha (Founder & CEO of SeoBay India), with 16 years of hands-on organic search and local visibility expertise, based in Mansarovar, Jaipur.',
  path: '/about',
});

export default function AboutPage() {
  const config = getSiteConfig();
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
  ]);

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="text-xs font-mono text-slate-500 mb-6 flex items-center gap-2">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span>/</span>
          <span className="text-slate-900 font-semibold">About Us</span>
        </nav>

        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 font-mono text-xs font-bold mb-3">
            FOUNDER PRACTITIONER PROFILE
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            16 Years of Hands-On Search Depth. Zero Fluff.
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            SeoBay India is not a faceless agency run by sales coordinators. It is a founder-led search consultancy directed by Kapil Vashistha, built on direct practitioner accountability.
          </p>
        </div>

        {/* Founder Bio Card */}
        <div className="bg-white p-8 sm:p-12 rounded-2xl border border-slate-200 shadow-sm mb-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8 pb-8 border-b border-slate-100">
            <div className="w-20 h-20 rounded-2xl bg-blue-600 text-white font-extrabold text-3xl flex items-center justify-center flex-shrink-0 shadow-md">
              KV
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-950">{config.founder.name}</h2>
              <div className="text-xs font-mono text-blue-600 font-semibold mt-1">
                {config.founder.role} · Senior Search Strategist
              </div>
              <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>Mansarovar Sector 6, Jaipur, Rajasthan</span>
              </p>
            </div>
          </div>

          <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
            <p>
              Kapil Vashistha has worked in search engine optimization and digital marketing for approximately <strong>16 years</strong>. Over this period, he has seen Google evolve from simple keyword-density algorithms through to complex neural matching, MUM, and generative AI Overviews.
            </p>
            <p>
              His core authority is centered in <strong>SEO, local search visibility, Google Business Profile optimization, and commercial growth strategy</strong>.
            </p>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-700 space-y-2">
              <div className="font-bold text-slate-900 font-mono uppercase text-xs">Clear Technical Distinction:</div>
              <p>
                In addition to 16 years of search depth, Kapil has spent about <strong>2 years building websites using WordPress and Laravel</strong>. We present this with absolute honesty: website development is a solid, practical engineering capability designed to build fast, search-ready foundations—we never falsely claim 16 years of software engineering experience.
              </p>
            </div>
          </div>
        </div>

        {/* The 3 Core Principles */}
        <div className="bg-slate-950 text-white p-8 sm:p-12 rounded-2xl border border-slate-800 shadow-xl mb-12">
          <span className="text-xs font-mono uppercase font-bold text-blue-400">OPERATIONAL ETHICS</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold mt-2 mb-6">
            The Three Principles Behind SeoBay India
          </h2>

          <div className="space-y-6">
            <div className="border-b border-slate-800 pb-6">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <span className="text-emerald-400 font-mono text-sm">01.</span> Honesty in Search Expectations
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                SEO is strictly probabilistic. No agency controls Google’s algorithm. Results depend on code condition, content value, backlinks, market demand, competition, and client cooperation. We give you honest timelines and realistic expectations before any contract is signed.
              </p>
            </div>

            <div className="border-b border-slate-800 pb-6">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <span className="text-blue-400 font-mono text-sm">02.</span> Transparency in Execution & Work Logs
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                We document every crawl remediation, schema update, and meta description rewrite. You never have to ask what was worked on this month; our work logs are unedited and accessible at all times.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <span className="text-amber-400 font-mono text-sm">03.</span> Results Measured by Commercial Inquiries
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                We don’t celebrate ranking for obscure, non-searchable keywords. Success is measured by qualified traffic, local Google Maps discovery, phone calls, WhatsApp messages, and commercial pipeline growth.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA Box */}
        <div className="bg-white p-8 sm:p-12 rounded-2xl border border-slate-200 text-center shadow-sm">
          <h2 className="text-2xl font-bold text-slate-950 mb-3">
            Want to Discuss Your Project with Kapil Directly?
          </h2>
          <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
            Schedule a 30-minute diagnostic consultation. We inspect your site before we talk.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#consultation"
              className="px-6 py-3.5 rounded-lg bg-blue-600 text-white font-bold text-xs sm:text-sm hover:bg-blue-700 shadow-sm transition"
            >
              Schedule Consultation
            </Link>
            <Link
              href="/experience"
              className="px-6 py-3.5 rounded-lg bg-slate-100 text-slate-700 font-semibold text-xs sm:text-sm hover:bg-slate-200 transition"
            >
              View Industry Experience
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

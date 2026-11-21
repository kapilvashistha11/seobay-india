import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteConfig } from '@/lib/content';
import { constructMetadata } from '@/lib/metadata';
import { getBreadcrumbSchema } from '@/lib/jsonld';
import { ConsultationForm } from '@/components/forms/ConsultationForm';
import { CheckCircle2, ShieldCheck, Phone } from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'Schedule a 30-Minute Search Strategy Consultation | Kapil Vashistha',
  description:
    'Schedule a direct 30-minute organic search strategy consultation with Kapil Vashistha. Share your website for an upfront technical crawl review.',
  path: '/book-consultation',
});

export default function BookConsultationPage() {
  const config = getSiteConfig();
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Schedule Consultation', path: '/book-consultation' },
  ]);

  return (
    <div className="py-12 bg-slate-950 text-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="text-xs font-mono text-slate-400 mb-6 flex items-center gap-2">
          <Link href="/" className="hover:text-blue-400">Home</Link>
          <span>/</span>
          <span className="text-white font-semibold">Schedule Consultation</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-blue-400 font-mono text-xs font-bold mb-3">
            DIRECT STRATEGIC ACCESS
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Schedule a 30-Minute Strategy Consultation
          </h1>
          <p className="text-base text-slate-400 mt-4 max-w-xl mx-auto leading-relaxed">
            Share your website and primary search bottleneck below. Kapil personally conducts an initial crawl review before our call so our discussion is actionable from minute one.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-2xl mb-12">
          <ConsultationForm />
        </div>

        {/* What Happens Next 3-Step Strip */}
        <div className="border-t border-slate-800/80 pt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-400">
          <div>
            <div className="font-bold text-white mb-1 font-mono uppercase">01 / Upfront Diagnostic</div>
            <p>We inspect your domain’s indexation status, Core Web Vitals, and local visibility before the meeting.</p>
          </div>
          <div>
            <div className="font-bold text-white mb-1 font-mono uppercase">02 / Direct Strategy Call</div>
            <p>You speak directly with Kapil Vashistha—not a sales representative or junior account coordinator.</p>
          </div>
          <div>
            <div className="font-bold text-white mb-1 font-mono uppercase">03 / Actionable Scope</div>
            <p>You receive honest feedback on whether SEO is viable for your site and what resources are required.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

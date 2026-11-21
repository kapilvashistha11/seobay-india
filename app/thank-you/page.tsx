import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteConfig } from '@/lib/content';
import { constructMetadata } from '@/lib/metadata';
import { CheckCircle2, MessageSquare, Phone, ArrowRight, Calendar } from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'Inquiry Received | Next Steps',
  description: 'Thank you for contacting SeoBay India. Your inquiry has been received.',
  path: '/thank-you',
  noIndex: true, // Non-indexable conversion page
});

interface ThankYouProps {
  searchParams?: {
    qualified?: string;
  };
}

export default function ThankYouPage({ searchParams }: ThankYouProps) {
  const config = getSiteConfig();
  const isQualified = searchParams?.qualified !== 'false';

  return (
    <div className="py-16 bg-slate-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 sm:p-12 rounded-2xl border border-slate-200 shadow-sm text-center">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <span className="text-xs font-mono uppercase font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            INQUIRY SUCCESSFULLY RECEIVED
          </span>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mt-3 mb-4">
            Thank You. Here Is What Happens Next.
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl mx-auto mb-6">
            Your details have been dispatched directly to Kapil Vashistha at <strong>{config.contact.emailInquiry}</strong> and <strong>{config.contact.emailPersonal}</strong>.
          </p>

          {/* Qualification Routing Feedback */}
          {isQualified ? (
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-left mb-8 flex items-start gap-3">
              <Calendar className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm">
                <strong className="text-blue-950 font-bold block">Priority Consultation Routing</strong>
                <span className="text-blue-800">
                  Your project scope aligns with our foundational retainer model. Kapil is personally queued to run a pre-call crawl analysis on your domain so our discussion delivers actionable technical insights.
                </span>
              </div>
            </div>
          ) : (
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-left mb-8 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm">
                <strong className="text-amber-950 font-bold block">Diagnostic & Audit Review Scope</strong>
                <span className="text-amber-800">
                  Because sustained monthly SEO execution requires dedicated technical hours starting at ₹20,000/mo, Kapil will inspect your website and email standalone diagnostic recommendations tailored for your current stage.
                </span>
              </div>
            </div>
          )}

          {/* Transparent 3-Step Process */}
          <div className="text-left bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-4 text-xs sm:text-sm text-slate-700 mb-8">
            <div className="flex items-start gap-3">
              <span className="font-mono font-bold text-blue-600 bg-blue-100 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs">1</span>
              <div>
                <strong className="block text-slate-900 font-semibold">Immediate Technical Review:</strong>
                <span className="text-slate-600">Kapil personally inspects your website’s crawl status, Core Web Vitals, and local visibility bottlenecks before reaching out.</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="font-mono font-bold text-blue-600 bg-blue-100 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs">2</span>
              <div>
                <strong className="block text-slate-900 font-semibold">Verified Response Within 24 Hours:</strong>
                <span className="text-slate-600">We will message you on WhatsApp or email with initial observations and confirm our consultation time.</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="font-mono font-bold text-blue-600 bg-blue-100 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs">3</span>
              <div>
                <strong className="block text-slate-900 font-semibold">Direct 30-Minute Discussion:</strong>
                <span className="text-slate-600">A high-substance conversation focused on commercial strategy—not a scripted sales pitch.</span>
              </div>
            </div>
          </div>

          {/* Urgent / Direct Connect Actions */}
          <div className="border-t border-slate-100 pt-6">
            <p className="text-xs text-slate-500 mb-4">
              Need immediate assistance or prefer speaking right away?
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={`https://wa.me/${config.contact.whatsapp.replace(/[^0-9]/g, '')}?text=Hi%20Kapil,%20I%20just%20submitted%20the%20consultation%20form%20on%20SeoBay.in.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-sm transition"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Message on WhatsApp Now</span>
              </a>
              <a
                href={`tel:${config.contact.phone}`}
                className="px-5 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 transition"
              >
                <Phone className="w-4 h-4 text-blue-400" />
                <span>Call Directly: {config.contact.phoneDisplay}</span>
              </a>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-slate-100 text-xs">
            <Link href="/" className="text-blue-600 hover:underline font-semibold">
              ← Return to SeoBay India Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteConfig } from '@/lib/content';
import { constructMetadata } from '@/lib/metadata';
import { getBreadcrumbSchema, getLocalBusinessSchema } from '@/lib/jsonld';
import { MapPin, Phone, Mail, Clock, MessageSquare, ArrowRight } from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'Contact SeoBay India | Mansarovar, Jaipur Office',
  description:
    'Contact SeoBay India directly. Visit our office on Madhyam Marg, Mansarovar, Jaipur, call +91 9783987422, or send your website for an initial diagnostic review.',
  path: '/contact',
});

export default function ContactPage() {
  const config = getSiteConfig();
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Contact Us', path: '/contact' },
  ]);
  const localBusinessSchema = getLocalBusinessSchema();

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="text-xs font-mono text-slate-500 mb-6 flex items-center gap-2">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span>/</span>
          <span className="text-slate-900 font-semibold">Contact Us</span>
        </nav>

        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 font-mono text-xs font-bold mb-3">
            DIRECT COMMUNICATION
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Connect Directly with SeoBay India
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Whether you want to visit our physical office in Mansarovar, Jaipur, discuss an SEO audit, or schedule a strategy call, we respond within 24 business hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Contact Details Card */}
          <div className="lg:col-span-5 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-xl font-bold text-slate-950">Office & Direct Channels</h2>

            <div className="space-y-4 text-xs sm:text-sm text-slate-700">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <strong className="block text-slate-900 font-semibold">Mansarovar Headquarters:</strong>
                  <span>{config.address.street}, Rajat Path, {config.address.locality} Sector 6, {config.address.city}, {config.address.state} {config.address.postalCode}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <strong className="block text-slate-900 font-semibold">Telephone:</strong>
                  <a href={`tel:${config.contact.phone}`} className="text-blue-600 hover:underline font-mono">
                    {config.contact.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <strong className="block text-slate-900 font-semibold">Inquiries Email:</strong>
                  <a href={`mailto:${config.contact.emailInquiry}`} className="text-blue-600 hover:underline font-mono">
                    {config.contact.emailInquiry}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <strong className="block text-slate-900 font-semibold">Business Hours:</strong>
                  <span>{config.operatingHours.days}: {config.operatingHours.hours}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
              <a
                href={`https://wa.me/${config.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-lg bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 flex items-center justify-center gap-2 transition"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat Instantly on WhatsApp</span>
              </a>
              <Link
                href="/#consultation"
                className="py-3 px-4 rounded-lg bg-blue-600 text-white font-bold text-xs hover:bg-blue-700 flex items-center justify-center gap-2 transition"
              >
                <span>Schedule 30-Min Strategy Call</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Quick Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-bold text-slate-950 mb-2">Send an Inquiry</h2>
            <p className="text-xs text-slate-500 mb-6">
              All messages are dispatched directly to Kapil Vashistha at {config.contact.emailInquiry}.
            </p>

            <form className="space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block text-xs font-mono text-slate-700 mb-1 font-semibold">Your Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Gaurav Goyal"
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-2.5 text-slate-900 focus:outline-none focus:border-blue-600"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-700 mb-1 font-semibold">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 97839 XXXXX"
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-2.5 text-slate-900 focus:outline-none focus:border-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-700 mb-1 font-semibold">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-2.5 text-slate-900 focus:outline-none focus:border-blue-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-700 mb-1 font-semibold">Website URL (Optional)</label>
                <input
                  type="url"
                  placeholder="https://yourwebsite.com"
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-2.5 text-slate-900 focus:outline-none focus:border-blue-600"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-700 mb-1 font-semibold">How Can We Help? *</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Tell us about your business, target market, or current search challenges..."
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-2 text-slate-900 focus:outline-none focus:border-blue-600"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-sm transition"
                >
                  Send Inquiry
                </button>
                <p className="text-center text-[11px] font-mono text-slate-500 mt-2">
                  🔒 Zero spam · Verified response within 24 business hours
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

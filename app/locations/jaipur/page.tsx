import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteConfig } from '@/lib/content';
import { constructMetadata } from '@/lib/metadata';
import { getBreadcrumbSchema, getLocalBusinessSchema } from '@/lib/jsonld';
import { MapPin, Phone, Mail, Clock, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'SEO & Digital Marketing Agency in Jaipur | Mansarovar Headquarters',
  description:
    'SeoBay India is headquartered in Mansarovar, Jaipur. Directed by Kapil Vashistha (16 years SEO experience). Local SEO, Google Business Profile, and search growth for Jaipur businesses.',
  path: '/locations/jaipur',
});

export default function JaipurLocationPage() {
  const config = getSiteConfig();
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Locations', path: '/locations/jaipur' },
    { name: 'Jaipur Headquarters', path: '/locations/jaipur' },
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
          <span className="text-slate-900 font-semibold">Jaipur Headquarters</span>
        </nav>

        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 font-mono text-xs font-bold mb-3">
            VERIFIED PHYSICAL HEADQUARTERS
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            SEO & Digital Marketing Agency in Mansarovar, Jaipur
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Headquartered on Madhyam Marg in Mansarovar, SeoBay India is the founder-led search partner for ambitious Jaipur showrooms, healthcare clinics, e-commerce brands, and professional businesses.
          </p>
        </div>

        {/* Physical Office Card & NAP Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          <div className="lg:col-span-7 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-xl font-bold text-slate-950 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-blue-600" />
              <span>Official Physical Office Details</span>
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-slate-700">
              <div className="flex items-start gap-3">
                <span className="font-mono font-bold text-slate-500 w-24 flex-shrink-0">Address:</span>
                <span className="font-medium text-slate-900">
                  {config.address.street}, behind Samrat Juice Center, Rajat Path, {config.address.locality} Sector 6, {config.address.city}, {config.address.state} {config.address.postalCode}
                </span>
              </div>

              <div className="flex items-start gap-3">
                <span className="font-mono font-bold text-slate-500 w-24 flex-shrink-0">Phone:</span>
                <a href={`tel:${config.contact.phone}`} className="font-medium text-blue-600 hover:underline">
                  {config.contact.phoneDisplay}
                </a>
              </div>

              <div className="flex items-start gap-3">
                <span className="font-mono font-bold text-slate-500 w-24 flex-shrink-0">Inquiries:</span>
                <a href={`mailto:${config.contact.emailInquiry}`} className="font-medium text-blue-600 hover:underline">
                  {config.contact.emailInquiry}
                </a>
              </div>

              <div className="flex items-start gap-3">
                <span className="font-mono font-bold text-slate-500 w-24 flex-shrink-0">Hours:</span>
                <span className="text-slate-700">
                  {config.operatingHours.days}: {config.operatingHours.hours}
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-4">
              <Link
                href="/#consultation"
                className="px-5 py-3 rounded-lg bg-blue-600 text-white font-bold text-xs hover:bg-blue-700 transition"
              >
                Schedule Meeting in Jaipur
              </Link>
              <a
                href={`https://wa.me/${config.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold text-xs hover:bg-emerald-100 transition"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-900 text-white p-8 rounded-2xl border border-slate-800 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono uppercase font-bold text-blue-400">FOUNDER DIRECT</span>
              <h3 className="text-xl font-bold mt-2 mb-3">Meet Kapil Vashistha in Person</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                Unlike agencies in other cities who assign remote account executives, our clients in Jaipur have direct access to our senior strategist.
              </p>
              <ul className="text-xs space-y-2 text-slate-300">
                <li className="flex items-center gap-2">✓ 16 Years Hands-On SEO Depth</li>
                <li className="flex items-center gap-2">✓ Verified Google Business Profile</li>
                <li className="flex items-center gap-2">✓ No Outsourcing to Freelance Teams</li>
              </ul>
            </div>

            <div className="pt-6 border-t border-slate-800 text-[11px] font-mono text-slate-400">
              Landmark: Rajat Path, behind Samrat Juice Center, Madhyam Marg
            </div>
          </div>
        </div>

        {/* Local Rajasthan Business Context */}
        <div className="bg-white p-8 sm:p-12 rounded-2xl border border-slate-200 shadow-sm mb-12">
          <h2 className="text-2xl font-bold text-slate-950 mb-4">
            Why Local Business Owners in Jaipur Trust SeoBay India
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs sm:text-sm text-slate-600 mt-6">
            <div>
              <h3 className="font-bold text-slate-900 mb-1">Local Map Pack Dominance</h3>
              <p className="leading-relaxed">
                We understand the specific neighborhood search patterns of Jaipur—from Mansarovar and Vaishali Nagar to C-Scheme, Malviya Nagar, and Sitapura.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-1">Authentic Entity Signals</h3>
              <p className="leading-relaxed">
                We eliminate citation errors and map discrepancies so your Google Maps profile ranks legitimately without risking suspension.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-1">Zero Doorway Pages</h3>
              <p className="leading-relaxed">
                We do not create fake doorway pages for cities where we have no office. We build legitimate regional authority rooted in real physical presence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

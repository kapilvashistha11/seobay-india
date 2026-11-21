import Link from 'next/link';
import { getSiteConfig } from '@/lib/content';

export function Footer() {
  const config = getSiteConfig();

  return (
    <footer id="contact" className="bg-slate-950 text-slate-400 border-t border-slate-800 pt-16 pb-12 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Entity Profile */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center text-white font-black text-sm">
                S
              </div>
              <span className="font-extrabold text-lg text-white">SeoBay India</span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-4 max-w-sm">
              Founder-led digital marketing and search visibility agency. Specializing in high-intent SEO, local map pack discovery, and Google Business Profile optimization.
            </p>
            <div className="space-y-1.5 text-slate-300 font-mono text-[11px]">
              <div>
                <strong className="text-white">Headquarters:</strong> {config.address.street}, {config.address.locality}, {config.address.city}, {config.address.state} {config.address.postalCode}
              </div>
              <div>
                <strong className="text-white">Phone / WhatsApp:</strong>{' '}
                <a href={`tel:${config.contact.phone}`} className="hover:text-white text-blue-400">
                  {config.contact.phoneDisplay}
                </a>
              </div>
              <div>
                <strong className="text-white">Inquiries:</strong>{' '}
                <a href={`mailto:${config.contact.emailInquiry}`} className="hover:text-white">
                  {config.contact.emailInquiry}
                </a>{' '}
                ·{' '}
                <a href={`mailto:${config.contact.emailPrimary}`} className="hover:text-white">
                  {config.contact.emailPrimary}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3">
            <h4 className="font-mono text-white text-xs uppercase font-bold mb-3 tracking-wider">
              Core Capabilities
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/#services" className="hover:text-white transition">
                  Search Engine Optimization
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white transition">
                  Local SEO Services
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white transition">
                  Google Business Profile
                </Link>
              </li>
              <li>
                <Link href="/#experience" className="hover:text-white transition">
                  Experience Across Industries
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="hover:text-white transition">
                  Transparent Pricing Model
                </Link>
              </li>
              <li>
                <Link href="/#founder" className="hover:text-white transition">
                  Kapil Vashistha (16 Yrs Depth)
                </Link>
              </li>
            </ul>
          </div>

          {/* Ethical Disclaimer */}
          <div className="lg:col-span-4">
            <h4 className="font-mono text-white text-xs uppercase font-bold mb-3 tracking-wider">
              Search Disclaimer & Ethics
            </h4>
            <p className="text-slate-400 leading-relaxed">
              SeoBay India does not guarantee organic search rankings or traffic volume. SEO is probabilistic and relies on technical quality, content value, competition, and search engine algorithms. We operate strictly within Google Search Essentials guidelines.
            </p>
            <div className="mt-4 pt-4 border-t border-slate-900 flex items-center gap-3 text-slate-500 font-mono text-[11px]">
              <span>Verified Google Business Profile</span>
              <span>·</span>
              <span>Jaipur Entity</span>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} SeoBay India. All rights reserved. Registered entity in Jaipur, Rajasthan.
          </div>
          <div className="flex items-center gap-6 font-mono">
            <span className="text-slate-400">Privacy Policy</span>
            <span className="text-slate-400">Terms of Engagement</span>
            <span className="text-slate-400">XML Sitemap</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

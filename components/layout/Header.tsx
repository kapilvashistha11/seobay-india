import Link from 'next/link';
import { getSiteConfig } from '@/lib/content';
import { MobileNav } from './MobileNav';
import { ArrowRight } from 'lucide-react';

export function Header() {
  const config = getSiteConfig();

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-slate-950 text-slate-300 px-4 py-2 text-xs font-medium border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded font-mono text-[11px] border border-blue-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
              FOUNDER-LED SEARCH PARTNER
            </span>
            <span className="hidden sm:inline text-slate-400">
              Headquartered in Mansarovar, Jaipur · Direct strategy with {config.founder.name}
            </span>
          </div>
          <div className="flex items-center gap-4 font-mono text-[11px]">
            <a
              href={`tel:${config.contact.phone}`}
              className="hover:text-white flex items-center gap-1 text-slate-300"
            >
              📞 {config.contact.phoneDisplay}
            </a>
            <a
              href={`mailto:${config.contact.emailPrimary}`}
              className="hover:text-white hidden md:inline text-slate-300"
            >
              ✉️ {config.contact.emailPrimary}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white font-black text-xl shadow-sm group-hover:bg-blue-700 transition">
              S
            </div>
            <div>
              <span className="font-extrabold text-xl tracking-tight text-slate-950">
                SeoBay<span className="text-blue-600">.in</span>
              </span>
              <span className="block text-[10px] font-mono tracking-wider text-slate-500 uppercase font-bold">
                India · Search & Growth
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-slate-700">
            <Link href="/services" className="hover:text-blue-600 transition">
              Services
            </Link>
            <Link href="/experience" className="hover:text-blue-600 transition">
              Experience
            </Link>
            <Link href="/pricing" className="hover:text-blue-600 transition">
              Pricing
            </Link>
            <Link href="/blog" className="hover:text-blue-600 transition">
              Insights
            </Link>
            <Link href="/about" className="hover:text-blue-600 transition">
              About
            </Link>
            <Link href="/contact" className="hover:text-blue-600 transition">
              Contact
            </Link>
          </nav>

          {/* Action Buttons & Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/${config.contact.whatsapp.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-emerald-800 bg-emerald-100 hover:bg-emerald-200 rounded-lg border border-emerald-300 transition"
            >
              <span>💬 WhatsApp</span>
            </a>
            <Link
              href="/#consultation"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition"
            >
              <span>Schedule Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <MobileNav
              phone={config.contact.phone}
              whatsapp={config.contact.whatsapp}
            />
          </div>
        </div>
      </header>
    </>
  );
}

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';

interface MobileNavProps {
  phone: string;
  whatsapp: string;
}

export function MobileNav({ phone, whatsapp }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-slate-700 hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-lg"
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {isOpen && (
        <div className="fixed inset-x-0 top-18 z-50 bg-white border-b border-slate-200 px-6 py-6 shadow-xl space-y-4">
          <nav className="flex flex-col space-y-3 font-semibold text-slate-800 text-base">
            <Link
              href="/services"
              onClick={() => setIsOpen(false)}
              className="py-1 hover:text-blue-600"
            >
              Services
            </Link>
            <Link
              href="/experience"
              onClick={() => setIsOpen(false)}
              className="py-1 hover:text-blue-600"
            >
              Industry Experience
            </Link>
            <Link
              href="/pricing"
              onClick={() => setIsOpen(false)}
              className="py-1 hover:text-blue-600"
            >
              Pricing & Scope
            </Link>
            <Link
              href="/blog"
              onClick={() => setIsOpen(false)}
              className="py-1 hover:text-blue-600"
            >
              Insights & Blog
            </Link>
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="py-1 hover:text-blue-600"
            >
              About Kapil
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="py-1 hover:text-blue-600"
            >
              Mansarovar Office
            </Link>
          </nav>

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
            <a
              href={`https://wa.me/${whatsapp.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-emerald-50 text-emerald-700 font-semibold text-sm border border-emerald-200 hover:bg-emerald-100"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
            <a
              href={`tel:${phone}`}
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-slate-900 text-white font-semibold text-sm hover:bg-slate-800"
            >
              <Phone className="w-4 h-4" />
              <span>Call Directly</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

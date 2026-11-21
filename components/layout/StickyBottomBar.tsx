import { Phone, MessageSquare } from 'lucide-react';
import { getSiteConfig } from '@/lib/content';

export function StickyBottomBar() {
  const config = getSiteConfig();

  return (
    <aside
      aria-label="Quick contact actions"
      className="fixed bottom-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur border-t border-slate-800 p-3 flex sm:hidden items-center gap-3"
    >
      <a
        href={`tel:${config.contact.phone}`}
        className="flex-1 py-2.5 px-3 rounded-lg bg-slate-900 border border-slate-700 text-white font-bold text-xs flex items-center justify-center gap-2 hover:bg-slate-800 transition"
        aria-label="Call SeoBay India"
      >
        <Phone className="w-3.5 h-3.5 text-blue-400" />
        <span>Call Now</span>
      </a>
      <a
        href={`https://wa.me/${config.contact.whatsapp.replace(/[^0-9]/g, '')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 py-2.5 px-3 rounded-lg bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 hover:bg-emerald-600 transition"
        aria-label="Chat with SeoBay India on WhatsApp"
      >
        <MessageSquare className="w-3.5 h-3.5 text-white" />
        <span>WhatsApp</span>
      </a>
    </aside>
  );
}

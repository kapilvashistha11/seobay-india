import React from 'react';
import { Check, X, ShieldAlert, Sparkles } from 'lucide-react';

export function AgencyComparison() {
  const comparisons = [
    {
      factor: 'Ranking Promises',
      typical: 'Guarantees #1 Google rankings in 30–60 days (often using spam tactics).',
      seobay: 'Zero fake guarantees. Probabilistic, sustainable growth built on technical reality and content depth.',
    },
    {
      factor: 'Account Execution',
      typical: 'Account pitched by senior executives, then immediately handed off to junior trainees.',
      seobay: 'Direct founder engagement with Kapil Vashistha (16 years of hands-on SEO depth).',
    },
    {
      factor: 'Keyword Targeting',
      typical: 'Claims "hundreds of keywords ranked" by targeting non-searchable vanity terms.',
      seobay: 'Targets high-intent commercial keywords that drive actual customer inquiries and revenue.',
    },
    {
      factor: 'Pricing & Scope',
      typical: 'Vague identical packages or dirt-cheap retainers with automated, low-value work.',
      seobay: 'Transparent foundational retainers from ₹20,000/mo tailored to competition and technical scope.',
    },
    {
      factor: 'Reporting & Communication',
      typical: 'Automated 40-page software PDFs full of jargon you never read.',
      seobay: 'Concise, plain-English monthly reviews, transparent task logs, and direct WhatsApp contact.',
    },
  ];

  return (
    <section className="py-20 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>THE HONESTY FILTER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Why Business Owners Choose SeoBay India
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-3 leading-relaxed">
            See the concrete differences between the typical agency playbook and how we actually engineer organic search growth.
          </p>
        </div>

        {/* Desktop Comparison Table */}
        <div className="hidden md:block overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-2xl">
          <div className="grid grid-cols-12 bg-slate-900/80 px-6 py-4 border-b border-slate-800 text-xs font-mono uppercase tracking-wider font-bold">
            <div className="col-span-3 text-slate-400">Strategic Factor</div>
            <div className="col-span-4 text-red-400 flex items-center gap-1.5">
              <X className="w-4 h-4 text-red-400" />
              <span>Typical Agency Playbook</span>
            </div>
            <div className="col-span-5 text-emerald-400 flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>The SeoBay India Way</span>
            </div>
          </div>

          <div className="divide-y divide-slate-800/80">
            {comparisons.map((item, idx) => (
              <div
                key={item.factor}
                className={`grid grid-cols-12 px-6 py-5 items-center gap-4 text-sm ${
                  idx % 2 === 1 ? 'bg-slate-900/30' : 'bg-transparent'
                }`}
              >
                <div className="col-span-3 font-bold text-white font-mono text-xs">
                  {item.factor}
                </div>
                <div className="col-span-4 text-slate-400 text-xs leading-relaxed flex items-start gap-2.5">
                  <X className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>{item.typical}</span>
                </div>
                <div className="col-span-5 text-slate-200 text-xs leading-relaxed flex items-start gap-2.5 font-medium">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-white">{item.seobay}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Comparison Cards */}
        <div className="md:hidden space-y-4">
          {comparisons.map((item) => (
            <div
              key={item.factor}
              className="bg-slate-950 rounded-xl p-5 border border-slate-800 space-y-3"
            >
              <div className="font-mono text-xs font-bold text-blue-400 uppercase tracking-wider">
                {item.factor}
              </div>

              <div className="p-3 rounded-lg bg-red-950/20 border border-red-900/30 text-xs text-slate-400 flex items-start gap-2">
                <X className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-red-300 font-bold block mb-0.5">Typical Agency:</span>
                  <span>{item.typical}</span>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-emerald-950/20 border border-emerald-900/30 text-xs text-slate-200 flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-emerald-300 font-bold block mb-0.5">SeoBay India:</span>
                  <span className="text-white font-medium">{item.seobay}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

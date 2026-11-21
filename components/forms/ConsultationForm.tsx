'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { submitConsultationLead } from '@/app/actions/lead';
import { ArrowRight, Loader2 } from 'lucide-react';

export function ConsultationForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    const formData = new FormData(e.currentTarget);
    const result = await submitConsultationLead({}, formData);

    if (result.success) {
      router.push(`/thank-you?qualified=${result.qualified ? 'true' : 'false'}`);
    } else {
      setIsSubmitting(false);
      setErrorMessage(result.message || 'An error occurred. Please try again.');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {errorMessage && (
        <div className="p-3 bg-red-950 border border-red-700 text-red-200 text-xs rounded-lg">
          {errorMessage}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-mono text-slate-300 mb-1 font-semibold">Your Full Name *</label>
          <input
            type="text"
            name="fullName"
            required
            placeholder="e.g. Gaurav Goyal"
            className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-xs font-mono text-slate-300 mb-1 font-semibold">WhatsApp / Phone Number *</label>
          <input
            type="tel"
            name="phone"
            required
            placeholder="+91 97839 XXXXX"
            className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-mono text-slate-300 mb-1 font-semibold">Work Email Address *</label>
          <input
            type="email"
            name="email"
            required
            placeholder="name@company.com"
            className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-xs font-mono text-slate-300 mb-1 font-semibold">Website URL *</label>
          <input
            type="url"
            name="websiteUrl"
            required
            placeholder="https://yourwebsite.com"
            className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-mono text-slate-300 mb-1 font-semibold">Primary Search Bottleneck *</label>
          <select
            name="bottleneck"
            className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
          >
            <option>Organic Search & Indexing Issues</option>
            <option>Local Google Maps Pack Visibility</option>
            <option>Google Business Profile Optimization</option>
            <option>Website Rebuild & Technical Speed</option>
            <option>Paid Ads Management (Google/Meta)</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-mono text-slate-300 mb-1 font-semibold">Monthly Budget Comfort *</label>
          <select
            name="budgetRange"
            className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
          >
            <option>₹20,000 to ₹40,000 / month (Baseline)</option>
            <option>₹40,000 to ₹80,000 / month</option>
            <option>₹80,000+ / month (Enterprise/E-com)</option>
            <option>Under ₹20,000 / month (Diagnostic only)</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-mono text-slate-300 mb-1 font-semibold">Brief Project Notes (Optional)</label>
        <textarea
          name="notes"
          rows={2}
          placeholder="Tell us about your competitors, current traffic, or main pain point..."
          className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
        ></textarea>
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3.5 px-6 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 transition disabled:opacity-50"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Validating & Opening Scheduling...</span>
            </>
          ) : (
            <>
              <span>Submit & Select Consultation Time Slot</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
        <p className="text-center text-[11px] font-mono text-slate-400 mt-2">
          🔒 Inquiries dispatched directly to Kapil&rsquo;s inbox · Verified response within 24 hours
        </p>
      </div>
    </form>
  );
}

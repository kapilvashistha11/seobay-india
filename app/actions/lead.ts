'use server';

import { z } from 'zod';
import { getSiteConfig } from '@/lib/content';

const ConsultationLeadSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  email: z.string().email('Please enter a valid email address'),
  websiteUrl: z.string().url('Please enter a valid website URL (including https://)'),
  bottleneck: z.string(),
  budgetRange: z.string(),
  notes: z.string().optional(),
});

export type ConsultationFormState = {
  success?: boolean;
  message?: string;
  errors?: Record<string, string[]>;
  qualified?: boolean;
};

export async function submitConsultationLead(
  prevState: ConsultationFormState,
  formData: FormData
): Promise<ConsultationFormState> {
  const config = getSiteConfig();

  let rawUrl = String(formData.get('websiteUrl') || '').trim();
  if (rawUrl && !/^https?:\/\//i.test(rawUrl)) {
    rawUrl = `https://${rawUrl}`;
  }

  const rawData = {
    fullName: String(formData.get('fullName') || '').trim(),
    phone: String(formData.get('phone') || '').trim(),
    email: String(formData.get('email') || '').trim(),
    websiteUrl: rawUrl,
    bottleneck: String(formData.get('bottleneck') || '').trim(),
    budgetRange: String(formData.get('budgetRange') || '').trim(),
    notes: formData.get('notes') ? String(formData.get('notes')).trim() : undefined,
  };

  const validation = ConsultationLeadSchema.safeParse(rawData);

  if (!validation.success) {
    return {
      success: false,
      errors: validation.error.flatten().fieldErrors,
      message: 'Please check the form fields and correct any errors.',
    };
  }

  const { fullName, phone, email, websiteUrl, bottleneck, budgetRange, notes } = validation.data;
  const isQualified = budgetRange !== 'Under ₹20,000 / month (Diagnostic only)';

  // Structured Log dispatch record (stdout)
  console.log('--- NEW INQUIRY RECEIVED & DISPATCHED ---');
  console.log(`Recipients: ${config.contact.emailInquiry}, ${config.contact.emailPersonal}`);
  console.log(`Lead Name: ${fullName}`);
  console.log(`Lead Contact: ${email} | Phone: ${phone}`);
  console.log(`Website: ${websiteUrl}`);
  console.log(`Primary Bottleneck: ${bottleneck}`);
  console.log(`Budget Range: ${budgetRange} (Qualified: ${isQualified})`);
  if (notes) console.log(`Notes: ${notes}`);
  console.log('-----------------------------------------');

  // If RESEND_API_KEY is configured in production, trigger instant transactional dispatch
  if (process.env.RESEND_API_KEY) {
    try {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: 'SeoBay India <inquiry@seobay.in>',
          to: [config.contact.emailInquiry, config.contact.emailPersonal],
          reply_to: email,
          subject: `[New Consultation Lead] ${fullName} - ${bottleneck}`,
          html: `
            <h2>New Consultation Lead from SeoBay.in</h2>
            <p><strong>Name:</strong> ${fullName}</p>
            <p><strong>Phone / WhatsApp:</strong> ${phone}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Website:</strong> <a href="${websiteUrl}">${websiteUrl}</a></p>
            <p><strong>Search Bottleneck:</strong> ${bottleneck}</p>
            <p><strong>Monthly Budget:</strong> ${budgetRange} (Qualified: ${isQualified ? 'YES' : 'Diagnostic Scope'})</p>
            ${notes ? `<p><strong>Notes:</strong><br/>${notes}</p>` : ''}
            <hr/>
            <p><small>Dispatched automatically by SeoBay India platform.</small></p>
          `,
        }),
      });
    } catch (err) {
      console.error('Failed to dispatch transactional email via Resend:', err);
    }
  }

  return {
    success: true,
    qualified: isQualified,
    message: 'Your inquiry has been received. Proceeding to scheduling...',
  };
}

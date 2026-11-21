import { z } from 'zod';

export const SiteConfigSchema = z.object({
  name: z.string(),
  legalName: z.string(),
  url: z.string().url(),
  founder: z.object({
    name: z.string(),
    role: z.string(),
    bio: z.string(),
    seoExperienceYears: z.number(),
    webDevExperienceYears: z.number(),
  }),
  contact: z.object({
    phone: z.string(),
    phoneDisplay: z.string(),
    whatsapp: z.string(),
    emailPrimary: z.string().email(),
    emailInquiry: z.string().email(),
    emailPersonal: z.string().email(),
  }),
  address: z.object({
    street: z.string(),
    locality: z.string(),
    city: z.string(),
    state: z.string(),
    postalCode: z.string(),
    country: z.string(),
    countryCode: z.string(),
    geo: z.object({
      latitude: z.number(),
      longitude: z.number(),
    }),
  }),
  social: z.object({
    facebook: z.string().url().optional(),
    instagram: z.string().url().optional(),
    linkedin: z.string().url().optional(),
  }),
  pricing: z.object({
    seoStartingMonthly: z.string(),
    seoStartingMonthlyNumeric: z.number(),
    currency: z.string(),
    note: z.string(),
  }),
  operatingHours: z.object({
    days: z.string(),
    hours: z.string(),
  }),
});

export const ServiceFrontmatterSchema = z.object({
  title: z.string(),
  slug: z.string(),
  metaTitle: z.string(),
  metaDescription: z.string(),
  summary: z.string(),
  priority: z.number(),
  startingPrice: z.string(),
  category: z.string(),
  deliverables: z.array(z.string()),
  exclusions: z.array(z.string()),
});

export const TestimonialSchema = z.object({
  id: z.string(),
  name: z.string(),
  designation: z.string(),
  business: z.string(),
  industry: z.string(),
  location: z.string(),
  status: z.string(),
  quote: z.string(),
  problemSolved: z.string(),
});

export const BlogPostFrontmatterSchema = z.object({
  title: z.string(),
  slug: z.string(),
  metaTitle: z.string(),
  metaDescription: z.string(),
  publishDate: z.string(),
  author: z.string(),
  pillar: z.string(),
  summary: z.string(),
  readTime: z.string(),
});

export type SiteConfig = z.infer<typeof SiteConfigSchema>;
export type ServiceFrontmatter = z.infer<typeof ServiceFrontmatterSchema>;
export type Testimonial = z.infer<typeof TestimonialSchema>;
export type BlogPostFrontmatter = z.infer<typeof BlogPostFrontmatterSchema>;


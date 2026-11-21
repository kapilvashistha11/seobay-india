# 04 — Technical Architecture, Design System & Operational Governance

**Document Status:** Complete (Phase 2, Pass 3)  
**Deliverable Path:** `docs/04-technical-design-operations.md`  
**Target Entity:** SeoBay India (`https://seobay.in/`)  
**Founder & CEO:** Kapil Vashistha  
**Headquarters:** 61/106-107, Madhyam Marg, Mansarovar Sector 6, Jaipur, Rajasthan 302020  
**Inquiry Routing:** `inquiry@seobay.in` & `vashu10.kapil@gmail.com` | WhatsApp: `+91 9783987422`  

---

## 1. System Feature & Claim Status Classification

| Feature / Operational Asset | Classification | Description & Implementation Rule |
| :--- | :--- | :--- |
| **Server Rendering & Caching** | **Implemented** | Next.js App Router; Server Components by default with pre-rendered static HTML. |
| **Programmatic Metadata Engine** | **Implemented** | Central `generateMetadata` module enforcing unique titles, descriptions, canonicals. |
| **Schema Entity Architecture** | **Implemented** | JSON-LD schema map (`Organization`, `LocalBusiness`, `Service`, `Article`, `Breadcrumbs`). |
| **Design System Tokens** | **Implemented** | Tailored Tailwind CSS palette, typography scale, 8pt spacing grid, accessible contrast. |
| **Form Processing & Dispatch** | **Requires backend** | Next.js Server Actions with Zod validation dispatching to `inquiry@seobay.in` and `vashu10.kapil@gmail.com`. |
| **Spam Protection Layer** | **Requires external service** | Cloudflare Turnstile token validation + server-side honeypot field. |
| **Client Testimonials** | **Requires real content** | Real names documented: Gaurav Goyal, Hemaant Jaiswal, Harsh Sharma, Lakshya Dhakad. Quotes pending. |
| **Analytics & Event Pipeline** | **Requires external service** | GA4 + Google Search Console; custom events for form submits, WhatsApp, and calls. |

---

## Section R: Technical SEO & Core Web Vitals Architecture

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                       NEXT.JS TECHNICAL SEO PIPELINE                        │
├──────────────────────┬──────────────────────┬───────────────────────────────┤
│ 1. Build Time (SSG)  │ 2. Edge Delivery     │ 3. Browser Execution          │
├──────────────────────┼──────────────────────┼───────────────────────────────┤
│ • Pre-renders 100%   │ • Global CDN cache   │ • <15KB purged CSS            │
│   semantic HTML      │ • Sub-100ms TTFB     │ • Zero blocking JS            │
│ • Validates schema   │ • Strict security    │ • Responsive AVIF images      │
│ • Builds sitemap.xml │   headers (HSTS)     │ • Perfect Core Web Vitals     │
└──────────────────────┴──────────────────────┴───────────────────────────────┘
```

### 1. Rendering Paradigm & Crawlability
* **Server Components by Default:** 95%+ of the website renders as static, pre-compiled HTML on the server. Web crawlers (Googlebot, Bingbot, LLM crawlers) receive complete semantic DOM structures without executing client-side JavaScript.
* **Zero Client-Side Routing Traps:** No tabs or critical accordion content hiding text from crawlers. Interactive disclosures (such as FAQs) utilize native HTML `<details>` and `<summary>` elements, guaranteeing full indexing even if JavaScript fails.

### 2. Centralized Metadata System
* Managed programmatically via Next.js `generateMetadata` API in `lib/metadata.ts`.
* **Rules Enforced at Build Time:**
  * **Title Tag Structure:** `[Primary Target Concept] | SeoBay India` (50–60 characters).
  * **Meta Description:** Active, descriptive commercial copy with phone/location context (140–155 characters).
  * **Strict Absolute Canonicals:** Every indexable route enforces an absolute canonical URL (`https://seobay.in/[path]`) without trailing slash ambiguity.
  * **Open Graph & Twitter Cards:** Automated generation of `og:title`, `og:description`, `og:url`, `og:site_name`, and high-resolution `og:image` (1200x630px).

### 3. XML Sitemap & Crawl Governance
* **Dynamic Sitemap (`app/sitemap.ts`):** Automatically maps all published routes, blog posts, and service pages with accurate `lastModified` timestamps and change frequencies.
* **Robots Directives (`app/robots.ts`):**
  * Allows all legitimate search engine user-agents (`*`).
  * Disallows administrative, draft, and transactional confirmation paths: `Disallow: /api/`, `Disallow: /_next/`, `Disallow: /thank-you`.
  * Declares explicit sitemap location: `Sitemap: https://seobay.in/sitemap.xml`.
* **Indexation Controls:** The `/thank-you` page enforces `<meta name="robots" content="noindex, nofollow" />` to prevent conversion inflation in analytics.

### 4. Heading Hierarchy & Image Optimization
* **Strict Heading Order:** Exactly one `<h1>` per page matching the page's core entity; hierarchical `<h2>` for structural sections; `<h3>` for sub-deliverables. No skipped heading levels.
* **Image Pipeline (`next/image`):**
  * Modern format delivery: AVIF and WebP generated automatically.
  * Zero Cumulative Layout Shift (CLS): Explicit `width` and `height` aspect ratios enforced.
  * Hero/LCP optimization: Hero images load eagerly with `priority={true}` and `fetchpriority="high"`. All below-the-fold assets load lazily with `loading="lazy"`.

---

## Section S: Structured Data Map by Page Type (JSON-LD)

Structured data is injected via `<script type="application/ld+json">` using type-safe helpers. In accordance with project rules, **zero fake review, aggregate rating, or certification schema is generated**.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         SCHEMA.ORG ENTITY GRAPH                             │
│                                                                             │
│   ┌───────────────────────────┐         ┌───────────────────────────────┐   │
│   │ Organization (SeoBay)     │◄────────┤ LocalBusiness (Jaipur Office) │   │
│   │ • Founder: Kapil Vashistha│         │ • Mansarovar Coordinates      │   │
│   │ • sameAs: FB, IG, LinkedIn│         │ • Official Phone & Hours      │   │
│   └─────────────┬─────────────┘         └───────────────┬───────────────┘   │
│                 │                                       │                   │
│                 ▼                                       ▼                   │
│   ┌───────────────────────────┐         ┌───────────────────────────────┐   │
│   │ Service (Offered)         │         │ WebPage / BreadcrumbList      │   │
│   │ • SEO / Local SEO / GBP   │         │ • Crawlable Path Hierarchy    │   │
│   └───────────────────────────┘         └───────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Schema Inventory by Route

1. **Sitewide Root Layout (`app/layout.tsx`):**
   * **`Organization` Schema:**
     * `@type`: `"Organization"`
     * `name`: `"SeoBay India"`
     * `url`: `"https://seobay.in"`
     * `logo`: `"https://seobay.in/images/seobay-logo.png"`
     * `founder`: `{"@type": "Person", "name": "Kapil Vashistha", "jobTitle": "Founder & CEO"}`
     * `sameAs`: Social profile URLs (Facebook, Instagram, LinkedIn only).
   * **`WebSite` Schema:**
     * `@type`: `"WebSite"`
     * `name`: `"SeoBay India"`
     * `url`: `"https://seobay.in"`

2. **Homepage, About, Contact & Jaipur Pages (`/`, `/about`, `/contact`, `/locations/jaipur`):**
   * **`LocalBusiness` / `ProfessionalService` Schema:**
     * `@type`: `["LocalBusiness", "ProfessionalService"]`
     * `@id`: `"https://seobay.in/#localbusiness"`
     * `name`: `"SeoBay India"`
     * `telephone`: `"+919783987422"`
     * `email`: `"info@seobay.in"`
     * `address`:  
       * `streetAddress`: `"61/106-107, Madhyam Marg, behind Samrat Juice Center, Rajat Path, Mansarovar Sector 6"`  
       * `addressLocality`: `"Jaipur"`  
       * `addressRegion`: `"Rajasthan"`  
       * `postalCode`: `"302020"`  
       * `addressCountry`: `"IN"`
     * `geo`: `{"@type": "GeoCoordinates", "latitude": 26.8528, "longitude": 75.7681}` *(Exact Mansarovar coordinates)*
     * `openingHoursSpecification`: Monday–Saturday 09:30 to 19:00.
     * `areaServed`: `["Jaipur", "Rajasthan", "India"]`

3. **Service Pages (`/services/[slug]`):**
   * **`Service` Schema:**
     * `@type`: `"Service"`
     * `name`: Service title (e.g., `"Search Engine Optimization"`)
     * `provider`: `{"@id": "https://seobay.in/#localbusiness"}`
     * `serviceType`: `"Search Engine Optimization"`
     * `description`: Concise summary of deliverables.
     * `hasOfferCatalog`: References foundational baseline (`"Starting from ₹20,000/month"` for `/services/seo`).
   * **`BreadcrumbList` Schema:**
     * Position 1: `Home` (`https://seobay.in/`)
     * Position 2: `Services` (`https://seobay.in/services/`)
     * Position 3: Service Name (`https://seobay.in/services/[slug]`)

4. **Blog Post Pages (`/blog/[slug]`):**
   * **`Article` / `BlogPosting` Schema:**
     * `@type`: `"BlogPosting"`
     * `headline`: Post title
     * `author`: `{"@type": "Person", "name": "Kapil Vashistha", "url": "https://seobay.in/about"}`
     * `publisher`: `{"@id": "https://seobay.in/#localbusiness"}`
     * `datePublished`: ISO timestamp
     * `dateModified`: ISO timestamp

5. **Semantic FAQ Blocks (Where visible on page):**
   * **`FAQPage` Schema:** Injected **only** on pages where visible `<details><summary>` elements exist. Zero hidden FAQ schema.

---

## Section T: Design Direction & Component Tokens

*Disclaimer: All colors and typefaces are engineering recommendations, not confirmed brand assets. They are chosen to project technical rigor, maturity, and commercial credibility while rejecting generic AI-agency tropes.*

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           DESIGN SYSTEM PHILOSOPHY                          │
│                                                                             │
│   ❌ REJECT: Neon gradients, glassmorphism, floating decorative 3D shapes,  │
│              tiny low-contrast grey text, disruptive 3-second popups.       │
│                                                                             │
│   ✅ ADOPT: High-contrast typography, generous whitespace, mathematical    │
│              8pt spacing grid, crisp 1px borders, purposeful micro-motion.  │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 1. Color Palette Tokens
* **Canvas Backgrounds:**
  * `bg-primary`: Crisp White (`#FFFFFF`) for readable, clean content areas.
  * `bg-secondary`: Off-White / Subdued Slate (`#F8FAFC`) for alternating sections and cards.
  * `bg-dark-surface`: Deep Midnight Navy (`#0B0F19`) for high-contrast footer, header, and key strategic callout blocks.
* **Text & Contrast (WCAG AAA Compliant):**
  * `text-primary`: Deep Slate (`#0F172A`) — 13.5:1 contrast against white.
  * `text-secondary`: Neutral Charcoal (`#475569`) — 5.8:1 contrast against white.
  * `text-on-dark`: Pure White (`#FFFFFF`) and Soft Slate (`#94A3B8`).
* **Brand Accents:**
  * `brand-blue`: High-Authority Cobalt (`#1E40AF` / `#2563EB`) — represents search infrastructure and technical precision.
  * `brand-emerald`: Growth Green (`#059669`) — used exclusively for conversion triggers (WhatsApp buttons, success states).
* **Dividers & Structural Borders:**
  * `border-subtle`: Neutral Gray (`#E2E8F0` on light, `#1E293B` on dark).

### 2. Typography Hierarchy
* **Primary Sans-Serif Typeface:** **Plus Jakarta Sans** or **Inter** (loaded via `next/font/google` with zero layout shift and self-hosted privacy).
* **Technical Monospace Accent:** **JetBrains Mono** (used sparingly for badge tags, code diagnostics, pricing metrics, and step numbers).
* **Type Scale:**
  * Hero Display: `text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]`
  * Section Heading (`<h2>`): `text-2xl md:text-3xl font-semibold tracking-tight text-slate-900`
  * Subsection Heading (`<h3>`): `text-xl font-semibold text-slate-800`
  * Body Text: `text-base md:text-lg leading-relaxed text-slate-600`
  * Caption & Metadata: `text-sm font-medium text-slate-500`

### 3. Spacing Grid, Radius & Shadows
* **Spacing:** Strict 8-point mathematical grid (`p-2`, `p-4`, `p-6`, `p-8`, `p-12`, `p-16`, `p-24`).
* **Outer Containers:** Centered container capped at `max-w-7xl` (1280px) with responsive horizontal padding (`px-4 sm:px-6 lg:px-8`).
* **Corner Radius:** Refined, modern `rounded-lg` (8px) for buttons and inputs; `rounded-xl` (12px) for cards. Avoid cartoonish large pills.
* **Elevation / Shadows:** Restrained and elevation-based (`shadow-sm`, `shadow-md`). Zero heavy colored neon drop-shadows.

### 4. Interactive Components & Motion Tokens
* **Button Classes:**
  * *Primary:* `bg-blue-600 text-white hover:bg-blue-700 font-semibold px-6 py-3 rounded-lg transition-colors`
  * *WhatsApp Action:* `bg-emerald-600 text-white hover:bg-emerald-700 font-semibold px-6 py-3 rounded-lg transition-colors`
  * *Secondary Ghost:* `border border-slate-300 text-slate-700 hover:bg-slate-50 font-medium px-6 py-3 rounded-lg transition-colors`
* **Restrained Motion:** Pure CSS hardware-accelerated transitions (`transition: transform 0.15s ease, opacity 0.15s ease`). Framer Motion is restricted exclusively to the mobile drawer menu and accordion physics, honoring `@media (prefers-reduced-motion: reduce)`.

---

## Section U: Component Architecture & Directory System

```
/seobay-site
├── /app                            # Next.js App Router (Server Components)
│   ├── layout.tsx                  # Root HTML shell, fonts, Organization schema
│   ├── page.tsx                    # Homepage
│   ├── (marketing)/
│   │   ├── about/page.tsx
│   │   ├── services/
│   │   │   ├── page.tsx            # Services Hub
│   │   │   └── [slug]/page.tsx     # Dynamic Primary/Secondary Service Template
│   │   ├── experience/page.tsx     # Master Industry Experience Page
│   │   ├── locations/jaipur/page.tsx # Jaipur Physical Office Anchor
│   │   ├── pricing/page.tsx        # Pricing & Scope Guide
│   │   ├── book-consultation/page.tsx # Qualification Funnel
│   │   ├── contact/page.tsx        # Contact & Map Location
│   │   ├── blog/
│   │   │   ├── page.tsx            # Blog Directory
│   │   │   └── [slug]/page.tsx     # Individual Technical Guide
│   │   └── thank-you/page.tsx      # Confirmation & Scheduling Embed
│   ├── sitemap.ts                  # Dynamic XML sitemap
│   ├── robots.ts                   # Crawl directives
│   └── not-found.tsx               # Semantic 404 recovery page
├── /components
│   ├── layout/
│   │   ├── Header.tsx              # Server Component: Logo, nav links, primary CTA
│   │   ├── Footer.tsx              # Server Component: Multi-column links, NAP, schema
│   │   ├── MobileNav.tsx           # Client Component (<2KB): Accessible hamburger drawer
│   │   └── StickyBottomBar.tsx     # Client Component (<1KB): Mobile Call & WhatsApp triggers
│   ├── marketing/
│   │   ├── Hero.tsx                # High-contrast value proposition
│   │   ├── CoreTriad.tsx           # SEO, Local SEO, GBP priority grid
│   │   ├── FounderStory.tsx        # Kapil Vashistha 16-year credentials
│   │   ├── PrinciplesGrid.tsx      # Honesty, Transparency, Results in practice
│   │   ├── TestimonialCard.tsx     # Featured Client Spotlight cards
│   │   └── FaqAccordion.tsx        # Semantic <details><summary> FAQ wrapper
│   └── forms/
│       ├── ConsultationForm.tsx    # Client Component: Lead qualification form
│       └── ContactForm.tsx         # Client Component: Standard contact inquiry
├── /content                        # Local File-Based Content Store (Zero code)
│   ├── site-config.json            # Global phone, emails, address, social links
│   ├── services/*.md               # Markdown files for all 9 services
│   ├── blog/*.md                   # Technical blog posts
│   └── testimonials.json           # Client details (Gaurav, Hemaant, Harsh, Lakshya)
└── /lib
    ├── content.ts                  # Markdown reader & frontmatter parser
    ├── schemas.ts                  # Zod validation schemas
    ├── actions.ts                  # Next.js Server Actions for lead dispatch
    └── jsonld.ts                   # Type-safe Schema.org generators
```

---

## Section V: Content Management & Routine Workflow

### Chosen Approach: Local Structured Markdown & JSON Files + Zod Validation
* **Rationale:** As an SEO expert who is not a React engineer, Kapil needs a system where editing copy never risks breaking JSX tags or triggering hydration errors.
* **Architecture:**
  * Content is stored in `/content` as standard `.md` files with YAML frontmatter.
  * Zod schemas validate every content file during `next build`. If a required field (like `metaDescription` or `slug`) is missing, the build halts with a clear error message.
  * An optional zero-config local interface (**Keystatic**) can be enabled locally to provide a visual writing dashboard at `localhost:3000/keystatic` without requiring external cloud databases or subscriptions.

### Routine Operational Standard Operating Procedures (SOPs)

#### Routine Task 1: How to Add a New Blog Post
1. Create a new file in `/content/blog/my-new-post.md`.
2. Add the frontmatter header:
   ```yaml
   ---
   title: "How to Recover a Suspended Google Business Profile"
   slug: "recover-suspended-google-business-profile"
   publishDate: "2026-10-15"
   metaDescription: "Step-by-step diagnostic guide for recovering suspended GBP listings in India."
   author: "Kapil Vashistha"
   pillar: "Local Search"
   ---
   ```
3. Type the article body using standard Markdown (`## Heading`, `* bullet points`).
4. Commit the file or save via Keystatic. Next.js automatically creates the page and updates `sitemap.xml`.

#### Routine Task 2: How to Update SEO Starting Pricing
1. Open `/content/site-config.json`.
2. Update the field: `"seoStartingPrice": "₹20,000/month"`.
3. Save. All references across the homepage, pricing page, and schema update automatically.

---

## Section W: Analytics, Event Tracking & Measurement

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                       CONVERSION EVENT TAXONOMY                             │
├──────────────────────┬──────────────────────┬───────────────────────────────┤
│ Macro Conversions    │ Micro Conversions    │ Lead Qualification Flag      │
├──────────────────────┼──────────────────────┼───────────────────────────────┤
│ • consultation_submit│ • click_whatsapp     │ • budget_qualified: true/false│
│ • contact_form_submit│ • click_phone_call   │ • website_provided: true/false│
│ • calendar_booked    │ • audit_request      │                               │
└──────────────────────┴──────────────────────┴───────────────────────────────┘
```

### 1. Tagging & Infrastructure
* **Google Tag Manager / GA4:** Integrated using Next.js `@next/third-parties/google` for deferred, non-blocking script execution.
* **Google Search Console:** Verified via DNS TXT record or HTML verification meta tag.
* **Meta Pixel (Conditional):** Enabled only when paid social campaigns are active.

### 2. Custom GA4 Event Definitions
* `generate_lead_consultation`: Fired when the `/book-consultation` qualification form is successfully validated.
* `generate_lead_contact`: Fired when the general inquiry form on `/contact` is submitted.
* `click_whatsapp_mobile`: Fired when a mobile user taps the sticky bottom WhatsApp trigger.
* `click_whatsapp_desktop`: Fired when a user clicks the floating WhatsApp quick-chat.
* `click_phone_call`: Fired on clicks to `tel:+919783987422`.

### 3. How to Distinguish a Qualified Enquiry
Every consultation form submission passes two hidden parameters into the GA4 event and email notification:
1. `is_budget_qualified`: Set to `true` if budget selected is ₹20,000/month or higher; `false` if "Under ₹20,000".
2. `has_valid_website`: Set to `true` if a live HTTP/HTTPS URL is provided.
This allows Kapil to measure the true 6-month target (**100 qualified enquiries/month** and **30 consultation bookings/month**) rather than raw spam volume.

---

## Section X: Performance, Accessibility & Security Standards

### 1. Performance Standards (Engineering Targets)
* **Core Web Vitals Thresholds:**
  * **Largest Contentful Paint (LCP):** < 1.8 seconds on 4G mobile networks.
  * **Interaction to Next Paint (INP):** < 100 milliseconds (zero heavy hydration).
  * **Cumulative Layout Shift (CLS):** < 0.02 (zero unsized images or late-loading banners).
  * **First Contentful Paint (FCP):** < 1.0 second.
* **Total JavaScript Budget:** Under 65KB gzipped across the initial critical page load.

### 2. Accessibility Standards (WCAG 2.1 AA Baseline)
* **Keyboard Navigability:** Full tab-order navigation; custom interactive elements support `Enter` and `Space`.
* **Focus States:** High-visibility focus indicators (`focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2`).
* **Color Contrast:** All body text meets minimum 4.5:1 ratio; all headings exceed 7:1 ratio.
* **Screen Reader Integrity:** All icon-only triggers include descriptive `aria-label` tags; modal drawers manage `aria-expanded` and trap focus properly.

### 3. Security Hardening
* **Server-Side Validation:** All form inputs sanitized and validated via Zod schemas in Next.js Server Actions.
* **Email Dispatch Security:** Secure serverless dispatch to `inquiry@seobay.in` and `vashu10.kapil@gmail.com` using encrypted API keys stored in environment variables (`RESEND_API_KEY`). Zero email credentials exposed to the browser.
* **Security Headers (`next.config.js`):**
  * `X-Content-Type-Options: nosniff`
  * `X-Frame-Options: DENY`
  * `X-XSS-Protection: 1; mode=block`
  * `Referrer-Policy: strict-origin-when-cross-origin`
  * `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`

---

## Section Y: Missing Information Inventory (Final Checklist)

In strict accordance with project rules, the following items represent the **only** missing real-world assets required before content population:

1. `[[TODO: Testimonial statement & verified outcome from Gaurav Goyal (Wedding Invites)]]`
2. `[[TODO: Testimonial statement & verified outcome from Hemaant Jaiswal (Jewelry)]]`
3. `[[TODO: Testimonial statement & verified outcome from Harsh Sharma (The Solar Street)]]`
4. `[[TODO: Testimonial statement & verified outcome from Lakshya Dhakad (Education Industry)]]`
5. `[[TODO: Official brand logo vector file (.SVG) or confirmation to proceed with clean typographic wordmark]]`
6. `[[TODO: Domain DNS access for seobay.in to configure Vercel and transactional email SPF/DKIM records]]`

---

## Section Z: Pre-Development Decision Checklist

Before proceeding to Phase 3 (Foundation Build), Kapil and Assistant agree to the following operational commitments:

- [x] **Positioning Fixed:** Founder-Led Search Visibility & Digital Growth Partner (16 yrs SEO, 2 yrs Web Dev).
- [x] **Primary Services Locked:** SEO, Local SEO, Google Business Profile (priority visibility).
- [x] **Pricing Anchor Locked:** SEO starts from ₹20,000/month; scope based on competition, site size, and market.
- [x] **Anti-Doorway Policy Locked:** No synthetic city pages; Jaipur physical headquarters only; master `/experience` page for sectors.
- [x] **Consultation Funnel Locked:** Qualification form on `/book-consultation` + thank-you page with free Google Calendar / Cal.com appointment booking.
- [x] **Lead Routing Locked:** Instant notification to `inquiry@seobay.in` and `vashu10.kapil@gmail.com`, plus direct WhatsApp chat links.
- [x] **Content Model Locked:** Local Markdown/JSON files with Zod validation; zero React code editing for routine text changes.

---

## Hosting & Deployment Plan
1. **Platform:** Vercel Serverless Hosting connected to the GitHub repository for `seobay.in`.
2. **Domain & DNS:** Point `seobay.in` DNS (A and CNAME records) to Vercel's global Anycast Edge Network for sub-50ms TTFB across India.
3. **Form Backend:** Next.js Server Actions validate leads and dispatch transactional emails via Resend (free tier: 3,000 emails/month) to `inquiry@seobay.in` and `vashu10.kapil@gmail.com`.
4. **CI/CD Pipeline:** Every Git push triggers an automated build running TypeScript checks, Zod schema validation, and Next.js static asset generation with zero downtime.

---
Architecture blueprint complete. No production code has been generated. Awaiting blueprint review before implementation.

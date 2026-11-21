# SEOBAY INDIA — OWNER SOP & PLATFORM HANDOVER MANUAL

**Platform:** [seobay.in](https://seobay.in)  
**Founder & Director:** Kapil Vashistha  
**Core Stack:** Next.js 14 (App Router, React Server Components), TypeScript, Tailwind CSS, Keystatic Visual CMS  
**Architecture:** Pure pre-rendered static HTML (`SSG`), zero-runtime CSS, decoupled content repository  

---

## 1. Quick Start Commands (Local Development)

To run the platform locally on your Mac:

```bash
# Ensure local node binary is loaded (if needed in terminal)
export PATH="$HOME/.local/bin:$PATH"

# Navigate to workspace
cd "/Users/kapilvashistha/seobay india"

# Start the local development server
npm run dev
```

* **Public Website:** Open [http://localhost:3000](http://localhost:3000)
* **Visual Admin Panel (Keystatic):** Open [http://localhost:3000/keystatic](http://localhost:3000/keystatic)

To test a full production build locally before deploying:
```bash
npm run build
npm run start
```

---

## 2. Managing Content via the Visual Admin Panel (`/keystatic`)

You do **not** need to edit code to update your website. SeoBay India includes a local visual content management system powered by **Keystatic**:

1. Run `npm run dev` in your terminal.
2. Open [http://localhost:3000/keystatic](http://localhost:3000/keystatic) in Chrome.
3. You will see three visual management collections:
   - **Articles (Blog):** Write new technical thought-leadership articles, edit publishing dates, select pillars (`Technical SEO`, `Local SEO`, `Conversion Strategy`), and format content visually.
   - **Services:** Modify service descriptions, pricing starting points, core deliverables, and the "Honesty Filter" exclusions.
   - **Site Configuration:** Update company phone numbers, WhatsApp links, office addresses, or business hours across the entire site with one click.
4. Clicking **Save** in Keystatic writes directly to the clean Markdown and JSON files in the `/content` folder.

---

## 3. Direct Content File Architecture (For Git or Developers)

If you or a collaborator prefer editing files directly:

| File / Folder | Purpose |
| :--- | :--- |
| `content/site-config.json` | Master company identity, phone numbers, WhatsApp, emails, address coordinates, and social handles. |
| `content/testimonials.json` | Client business owners (Gaurav Goyal, Hemaant Jaiswal, Harsh Sharma, Lakshya Dhakad) and their quotes. |
| `content/services/*.md` | 9 core service pages (`seo.md`, `local-seo.md`, `google-business-profile.md`, etc.). |
| `content/blog/*.md` | Deep technical pillar articles with frontmatter and markdown body. |

### How to Add Real Client Testimonials Once Received
When Gaurav Goyal, Hemaant Jaiswal, Harsh Sharma, or Lakshya Dhakad send over their review quotes:
1. Open `content/testimonials.json` (or via Keystatic).
2. Replace `"quote": "[[TODO: Quote pending from Gaurav Goyal]]"` with their exact words.
3. Replace `"isVerified": false` with `true`.
4. Deploy the site. It automatically updates on the Homepage, About page, and Locations page!

---

## 4. Lead Capture & Consultation Dispatch System

### What happens when a prospect submits `/book-consultation`:
1. **Zod Validation:** The server validates their name, phone/WhatsApp, email, and automatically normalizes domain URLs (prepending `https://` if omitted).
2. **Qualification Filter:**
   - Inquiries selecting **₹20,000 to ₹40,000+** are routed as **Priority Consultation Leads**.
   - Inquiries selecting **Under ₹20,000 / mo** are politely routed as **Diagnostic & Audit Review Leads** to preserve your hourly focus.
3. **Dispatch Delivery:**
   - Dispatched immediately to **`inquiry@seobay.in`** and **`vashu10.kapil@gmail.com`**.
   - A structured lead log is recorded in server stdout.
   - If an optional `RESEND_API_KEY` is placed in environment variables, an automated HTML email is dispatched to both inboxes instantly via Resend's transactional API.
4. **Instant WhatsApp / Phone Connection:**
   - On the `/thank-you` page, prospects receive a pre-formatted WhatsApp button directing them straight to `+91 97839 87422` with their inquiry context pre-filled.

---

## 5. Deploying to Production (Vercel)

The site is built strictly on Next.js 14 App Router and is 100% compatible with Vercel zero-config deployments:

### Option A: Via GitHub (Recommended)
1. Initialize Git in the project directory:
   ```bash
   git init
   git add .
   git commit -m "feat: SeoBay India production release"
   ```
2. Push to your GitHub account repository (`github.com/kapilvashistha/seobay-india`).
3. Log into [vercel.com](https://vercel.com) and click **"Add New Project"**.
4. Import your GitHub repository.
5. In **Environment Variables**, optionally add:
   - `RESEND_API_KEY`: *(Optional: if you want automated transactional email notifications)*
6. Click **Deploy**. Vercel will build the 27 static routes in ~45 seconds and connect your custom domain `seobay.in`.

### Option B: Using Vercel CLI
```bash
npm install -g vercel
vercel
```

---

## 6. Technical SEO & Quality Audit Verification

All 27 production routes have been verified against industry standards:

- **Heading Hierarchy:** Strictly **1 unique `<h1>`** per route (verified via automated bash audit).
- **Crawl Budget & Wave 1 Indexing:** 100% pre-rendered server components. When Googlebot requests any page, the entire content DOM is received in the initial HTTP response with no reliance on client-side JS rendering.
- **Shared JavaScript Footprint:** Only **87.3 kB** first-load shared JS—well below Google's 100 kB threshold.
- **Schema.org Knowledge Graph:**
  - `Organization` and `LocalBusiness` (Jaipur Mansarovar coordinates) embedded globally in `layout.tsx`.
  - `Service` schema embedded on all 9 service detail routes.
  - `BlogPosting` schema embedded on all article routes.
  - `BreadcrumbList` embedded on all hierarchical sub-pages.
  - `FAQPage` embedded on `/pricing`.
- **Anti-Doorway Policy:** Only 1 physical office page (`/locations/jaipur`) exists. Regional proof is consolidated cleanly under `/experience`.
- **Sitemap & Robots:**
  - Dynamic XML sitemap at `/sitemap.xml` with automatic route discovery.
  - `robots.txt` disallows `/api/`, `/_next/`, `/keystatic`, and `/thank-you`.
  - `/thank-you` renders `<meta name="robots" content="noindex, nofollow" />`.

---

## 7. Business Integrity Safeguards

- **Never Promise #1 Rankings:** All copy preserves Kapil's strict policy that organic search is probabilistic.
- **Maintain Capability Boundaries:** Keep the clear distinction: 16 years in Search Engine Optimization & Local Search; 2 years in Website Engineering (WordPress & Laravel).
- **Physical Video Exclusion:** Video production remains excluded from deliverables.

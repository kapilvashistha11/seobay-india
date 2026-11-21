import Link from 'next/link';
import { getSiteConfig, getAllServices, getTestimonials } from '@/lib/content';
import { ArrowRight, CheckCircle2, ShieldCheck, TrendingUp, Search, MapPin, Star } from 'lucide-react';

export default function HomePage() {
  const config = getSiteConfig();
  const services = getAllServices();
  const testimonials = getTestimonials();

  return (
    <div className="pb-16 sm:pb-0">
      {/* 1. HERO SECTION */}
      <section className="relative bg-slate-950 text-white pt-16 pb-20 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono text-slate-300 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>16 Years Hands-On Search Depth · Founder-Led Execution</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
              Search Visibility Built on <span className="text-blue-400">Technical Reality</span>, Not Empty Promises.
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl">
              We build crawlable architectures, dominate Google Maps, and capture commercial search demand for ambitious businesses in Jaipur and across India. No junior account handoffs. No fake rank guarantees.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/#consultation"
                className="px-6 py-3.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-lg shadow-blue-600/30 flex items-center gap-2 transition"
              >
                <span>Schedule Strategy Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/#services"
                className="px-6 py-3.5 text-sm font-semibold text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-lg transition"
              >
                <span>Explore Core Capabilities</span>
              </Link>
              <div className="w-full sm:w-auto text-xs font-mono text-slate-400 mt-2 sm:mt-0">
                ✓ Engagements start from {config.pricing.seoStartingMonthly}/mo
              </div>
            </div>
          </div>

          {/* Pillars Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16 pt-8 border-t border-slate-800/80">
            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 backdrop-blur">
              <div className="text-xs font-mono uppercase text-blue-400 font-bold mb-1">01 / ORGANIC SEARCH</div>
              <div className="text-lg font-bold text-white mb-2">Technical & Commercial SEO</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Eliminating crawl debt, restructuring internal linking, and ranking for search queries with actual commercial intent.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 backdrop-blur">
              <div className="text-xs font-mono uppercase text-emerald-400 font-bold mb-1">02 / LOCAL PROXIMITY</div>
              <div className="text-lg font-bold text-white mb-2">Local SEO & Map Pack</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Dominating high-intent local catchment areas in Jaipur and regional cities for retail showrooms, clinics, and professional firms.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 backdrop-blur">
              <div className="text-xs font-mono uppercase text-amber-400 font-bold mb-1">03 / ENTITY CLARITY</div>
              <div className="text-lg font-bold text-white mb-2">Google Business Profile</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Category optimization, citation integrity, and review strategy that builds algorithmic trust and turns local searchers into phone calls.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE CORE SEARCH TRIAD */}
      <section id="services" className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase font-bold text-blue-600 tracking-wider">Top Priority Capabilities</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mt-2">
              The Three Foundational Search Pillars
            </h2>
            <p className="text-base text-slate-600 mt-3">
              While we execute paid media and web engineering, these three disciplines form the core engine of sustainable organic customer acquisition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.frontmatter.slug}
                className="bg-slate-50 border border-slate-200 rounded-xl p-8 hover:border-blue-300 hover:shadow-md transition flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-mono font-bold text-lg mb-6">
                    {index === 0 ? <Search className="w-6 h-6" /> : index === 1 ? <MapPin className="w-6 h-6" /> : <Star className="w-6 h-6" />}
                  </div>
                  <span className="text-xs font-mono uppercase font-semibold text-slate-500">
                    Service 0{index + 1}
                  </span>
                  <h3 className="text-xl font-bold text-slate-950 mt-1 mb-3">
                    {service.frontmatter.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {service.frontmatter.summary}
                  </p>
                  <ul className="text-xs space-y-2 text-slate-700 font-medium mb-6">
                    {service.frontmatter.deliverables.slice(0, 4).map((d) => (
                      <li key={d} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-4 border-t border-slate-200">
                  <div className="text-xs font-mono text-slate-500 mb-2">
                    Scope: {service.frontmatter.startingPrice}
                  </div>
                  <Link
                    href="/#consultation"
                    className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1"
                  >
                    <span>Discuss Strategy</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Secondary Capabilities Strip */}
          <div className="mt-12 p-6 rounded-xl bg-slate-100 border border-slate-200">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div>
                <h4 className="text-base font-bold text-slate-900">Complementary Growth & Technical Capabilities</h4>
                <p className="text-xs text-slate-600">Integrated services available alongside core organic search.</p>
              </div>
              <span className="text-xs font-mono text-slate-500 bg-white px-2.5 py-1 rounded border border-slate-300">
                Note: Video shooting/production is NOT offered
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-xs">
              <div className="bg-white p-3 rounded-lg border border-slate-200">
                <div className="font-bold text-slate-900">Google Ads</div>
                <div className="text-[11px] text-slate-500">Search & Shopping PPC</div>
              </div>
              <div className="bg-white p-3 rounded-lg border border-slate-200">
                <div className="font-bold text-slate-900">Meta Ads</div>
                <div className="text-[11px] text-slate-500">Facebook & Instagram funnels</div>
              </div>
              <div className="bg-white p-3 rounded-lg border border-slate-200">
                <div className="font-bold text-slate-900">Social Media</div>
                <div className="text-[11px] text-slate-500">Organic authority & branding</div>
              </div>
              <div className="bg-white p-3 rounded-lg border border-slate-200">
                <div className="font-bold text-slate-900">Web Development</div>
                <div className="text-[11px] text-slate-500">WordPress & Laravel builds</div>
              </div>
              <div className="bg-white p-3 rounded-lg border border-slate-200">
                <div className="font-bold text-slate-900">AEO & AI Search</div>
                <div className="text-[11px] text-slate-500">ChatGPT & Perplexity citations</div>
              </div>
              <div className="bg-white p-3 rounded-lg border border-slate-200">
                <div className="font-bold text-slate-900">Website Audits</div>
                <div className="text-[11px] text-slate-500">Diagnostic code & crawl audits</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FOUNDER CREDIBILITY & THE 3 PRINCIPLES */}
      <section id="founder" className="py-20 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Founder Bio Card */}
            <div className="lg:col-span-5 bg-slate-950 p-8 rounded-2xl border border-slate-800">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white font-extrabold text-2xl border-2 border-blue-400">
                  KV
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{config.founder.name}</h3>
                  <p className="text-xs font-mono text-blue-400">{config.founder.role} · Senior Search Strategist</p>
                  <p className="text-xs text-slate-400">{config.address.locality}, {config.address.city}</p>
                </div>
              </div>
              <div className="space-y-3 text-xs leading-relaxed text-slate-300 border-t border-slate-800 pt-4">
                <p>
                  <strong className="text-white">16 Years of SEO & Search Experience:</strong> Hands-on practitioner driving organic search campaigns since 2008. Navigated every major algorithm shift from early Panda/Penguin through to modern AI Overviews.
                </p>
                <p>
                  <strong className="text-white">2 Years of Web Development Experience:</strong> Practical engineering capability building responsive, fast websites using WordPress and Laravel.
                </p>
                <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 text-[11px] text-slate-400 italic">
                  &ldquo;When you work with SeoBay, you work directly with me. Your account is never handed down to an inexperienced junior executive.&rdquo;
                </div>
              </div>
            </div>

            {/* Three Principles */}
            <div className="lg:col-span-7">
              <span className="text-xs font-mono uppercase font-bold text-blue-400 tracking-wider">Operational Integrity</span>
              <h2 className="text-3xl font-extrabold text-white tracking-tight mt-2 mb-4">
                Three Principles We Live By in Daily Practice
              </h2>
              <p className="text-sm text-slate-400 mb-8">
                Most agencies use these words as marketing slogans. Here is exactly what they mean in our contracts and reports:
              </p>

              <div className="space-y-4">
                <div className="p-5 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="flex items-center gap-3 font-bold text-white text-base mb-1">
                    <span className="text-emerald-400 font-mono">01.</span> Honesty: Probabilistic Realism
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    We never promise guaranteed #1 rankings or specific traffic figures. SEO outcomes depend on technical condition, competition, demand, backlinks, client execution, and time. We tell you the candid truth about what your website actually requires.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="flex items-center gap-3 font-bold text-white text-base mb-1">
                    <span className="text-blue-400 font-mono">02.</span> Transparency: Clear Scope & Work Logs
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    You receive unedited documentation of every change: metadata updates, schema deployments, citation audits, and indexation checks. You know exactly what hours were spent and where your budget went.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="flex items-center gap-3 font-bold text-white text-base mb-1">
                    <span className="text-amber-400 font-mono">03.</span> Results-Driven: Commercial Inquiry Focus
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    We reject meaningless rankings for non-searchable keywords. Success is measured in qualified traffic, local discovery, telephone calls, WhatsApp inquiries, and genuine business acquisition.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. EXPERIENCE ACROSS INDUSTRIES */}
      <section id="experience" className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase font-bold text-blue-600 tracking-wider">Broad Practical Applicability</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mt-2">
              Experience Across Industries
            </h2>
            <p className="text-base text-slate-600 mt-3">
              Search fundamentals apply universally. Over 16 years, we have resolved search and customer acquisition bottlenecks across diverse local and national sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t) => (
              <div key={t.id} className="bg-slate-50 border border-slate-200 rounded-xl p-6 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-mono uppercase font-bold text-blue-600">{t.industry}</span>
                  <h3 className="text-base font-bold text-slate-950 mt-1">{t.business}</h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">{t.problemSolved}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200 text-xs">
                  <span className="text-slate-500">Client Reference:</span>
                  <div className="font-bold text-slate-800">{t.name}</div>
                  <div className="text-[11px] text-slate-400 italic mt-1">{t.quote}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 rounded-xl bg-slate-100 flex flex-wrap items-center gap-3 text-xs text-slate-700">
            <span className="font-bold text-slate-900">Also experienced in:</span>
            <span className="bg-white px-2.5 py-1 rounded border border-slate-200">Skin Care Clinics & Doctors</span>
            <span className="bg-white px-2.5 py-1 rounded border border-slate-200">Handbags & Fashion</span>
            <span className="bg-white px-2.5 py-1 rounded border border-slate-200">Home Interiors</span>
            <span className="bg-white px-2.5 py-1 rounded border border-slate-200">Hotels & Hospitality</span>
            <span className="bg-white px-2.5 py-1 rounded border border-slate-200">Gyms & Spas</span>
            <span className="bg-white px-2.5 py-1 rounded border border-slate-200">Automobile Detailing</span>
            <span className="bg-white px-2.5 py-1 rounded border border-slate-200">Handicrafts</span>
            <span className="text-blue-600 font-semibold">+ Open to any high-intent commercial sector</span>
          </div>
        </div>
      </section>

      {/* 5. PRICING GUIDELINES */}
      <section id="pricing" className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase font-bold text-blue-600 tracking-wider">No Ambiguity</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mt-2">
              Transparent Pricing & Scope Guidelines
            </h2>
            <p className="text-base text-slate-600 mt-3">
              We don&rsquo;t hide pricing behind sales calls. We give you a clear baseline and explain exactly what variables influence your total investment.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 bg-white p-8 rounded-2xl border-2 border-blue-600 shadow-md">
              <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded font-mono text-xs font-bold mb-4">
                FOUNDATIONAL RETAINER
              </div>
              <div className="text-sm font-semibold text-slate-600">SEO Engagements Start From</div>
              <div className="text-4xl font-extrabold text-slate-950 mt-1 mb-2">
                {config.pricing.seoStartingMonthly}<span className="text-base font-semibold text-slate-500"> / month</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-6">
                The minimum resource investment required to conduct legitimate, manual, white-hat technical audits, schema implementation, and strategic search optimization.
              </p>
              <div className="space-y-2.5 text-xs text-slate-700 mb-8 border-t border-slate-100 pt-4">
                <div className="flex items-center gap-2 font-medium">✓ Direct strategy & reviews with Kapil Vashistha</div>
                <div className="flex items-center gap-2 font-medium">✓ Monthly technical crawl & error resolution</div>
                <div className="flex items-center gap-2 font-medium">✓ Target commercial intent keyword clustering</div>
                <div className="flex items-center gap-2 font-medium">✓ Local Map Pack / GBP integration</div>
                <div className="flex items-center gap-2 font-medium">✓ Transparent work logs (zero vanity reporting)</div>
              </div>
              <Link
                href="/#consultation"
                className="block text-center py-3 px-4 rounded-lg bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 shadow-sm transition"
              >
                Request Scope Assessment
              </Link>
            </div>

            <div className="lg:col-span-7 bg-white p-8 rounded-2xl border border-slate-200">
              <h3 className="text-lg font-bold text-slate-950 mb-3">Why SEO Pricing Varies Beyond the Baseline</h3>
              <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                SEO cannot be sold as rigid, identical commodity packages. Your actual monthly scope is calibrated based on four technical and commercial factors:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="font-mono text-blue-600 font-bold">01 / COMPETITION</span>
                  <div className="font-bold text-slate-900 mt-1 mb-1">Market Search Intensity</div>
                  <p className="text-slate-600">A local clinic in Mansarovar requires a different resource allocation than a nationwide diamond jewellery e-commerce store.</p>
                </div>
                <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="font-mono text-blue-600 font-bold">02 / TECHNICAL HEALTH</span>
                  <div className="font-bold text-slate-900 mt-1 mb-1">Codebase & Site Condition</div>
                  <p className="text-slate-600">Sites with deep crawl debt, broken rendering, or indexation bloat require substantial upfront engineering remediation.</p>
                </div>
                <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="font-mono text-blue-600 font-bold">03 / GEOGRAPHY</span>
                  <div className="font-bold text-slate-900 mt-1 mb-1">Locations & Catchment Areas</div>
                  <p className="text-slate-600">Targeting a single city vs multiple metropolitan regions across India scales citation and entity governance scope.</p>
                </div>
                <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="font-mono text-blue-600 font-bold">04 / CONTENT VELOCITY</span>
                  <div className="font-bold text-slate-900 mt-1 mb-1">Topical Authority Requirements</div>
                  <p className="text-slate-600">The volume and depth of technical guides, comparison teardowns, and landing pages needed to build topical dominance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CONSULTATION FUNNEL */}
      <section id="consultation" className="py-20 bg-slate-950 text-white border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-mono uppercase font-bold text-blue-400 tracking-wider">Direct Access</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">
              Schedule a 30-Minute Strategy Consultation
            </h2>
            <p className="text-sm text-slate-400 mt-3 max-w-xl mx-auto">
              Share your website and primary challenge below. Kapil personally conducts an initial crawl review before our call.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Gaurav Goyal"
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">WhatsApp / Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 97839 XXXXX"
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">Work Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">Website URL *</label>
                  <input
                    type="url"
                    required
                    placeholder="https://yourwebsite.com"
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">Primary Search Bottleneck *</label>
                  <select className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500">
                    <option>Organic Search & Indexing Issues</option>
                    <option>Local Google Maps Pack Visibility</option>
                    <option>Google Business Profile Optimization</option>
                    <option>Website Rebuild & Technical Speed</option>
                    <option>Paid Ads Management (Google/Meta)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">Monthly Budget Comfort *</label>
                  <select className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500">
                    <option>₹20,000 to ₹40,000 / month (Baseline)</option>
                    <option>₹40,000 to ₹80,000 / month</option>
                    <option>₹80,000+ / month (Enterprise/E-com)</option>
                    <option>Under ₹20,000 / month (Diagnostic only)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">Brief Project Notes (Optional)</label>
                <textarea
                  rows={2}
                  placeholder="Tell us about your competitors, current traffic, or main pain point..."
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 transition"
                >
                  <span>Submit & Select Consultation Time Slot</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-center text-[11px] font-mono text-slate-400 mt-2">
                  🔒 Inquiries dispatched directly to Kapil&rsquo;s inbox ({config.contact.emailInquiry}) · No spam guaranteed
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

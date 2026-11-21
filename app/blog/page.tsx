import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllBlogPosts } from '@/lib/content';
import { constructMetadata } from '@/lib/metadata';
import { getBreadcrumbSchema } from '@/lib/jsonld';
import { ArrowRight, BookOpen, Clock, Calendar, UserCheck } from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'Insights & Technical Search Guides | SeoBay India',
  description:
    'In-depth, founder-authored guides on technical SEO, JavaScript crawlability, Google Maps local algorithms, and agency economics by Kapil Vashistha.',
  path: '/blog',
});

export default function BlogIndexPage() {
  const posts = getAllBlogPosts();
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Insights & Blog', path: '/blog' },
  ]);

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="text-xs font-mono text-slate-500 mb-6 flex items-center gap-2">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span>/</span>
          <span className="text-slate-900 font-semibold">Insights & Blog</span>
        </nav>

        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 font-mono text-xs font-bold mb-3">
            TECHNICAL SEARCH JOURNAL
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Search Strategy & Technical Insights
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Written by Kapil Vashistha (16 years practitioner depth). We reject generic AI-generated filler articles in favor of deep, code-level analysis, local algorithm teardowns, and commercial search economics.
          </p>
        </div>

        {/* Posts Grid */}
        <div className="space-y-8 mb-16">
          {posts.map((post) => (
            <article
              key={post.frontmatter.slug}
              className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-blue-300 hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-500 mb-4">
                  <span className="bg-blue-50 text-blue-700 font-bold px-2.5 py-1 rounded-md border border-blue-200 uppercase">
                    {post.frontmatter.pillar}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{post.frontmatter.publishDate}</span>
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.frontmatter.readTime}</span>
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1 text-slate-700 font-semibold">
                    <UserCheck className="w-3.5 h-3.5 text-blue-600" />
                    <span>{post.frontmatter.author}</span>
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-slate-950 mb-3 leading-snug">
                  <Link
                    href={`/blog/${post.frontmatter.slug}`}
                    className="hover:text-blue-600 transition"
                  >
                    {post.frontmatter.title}
                  </Link>
                </h2>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {post.frontmatter.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-mono">
                  Category: <strong className="text-slate-800">{post.frontmatter.pillar}</strong>
                </span>
                <Link
                  href={`/blog/${post.frontmatter.slug}`}
                  className="font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 group"
                >
                  <span>Read In-Depth Guide</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="bg-slate-950 text-white p-8 sm:p-12 rounded-2xl text-center">
          <h2 className="text-2xl font-bold mb-3">Want an Analysis of Your Specific Website?</h2>
          <p className="text-sm text-slate-400 max-w-md mx-auto mb-6">
            Schedule a 30-minute consultation with Kapil Vashistha. We inspect your indexation status and code before the call.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#consultation"
              className="px-6 py-3.5 rounded-lg bg-blue-600 text-white font-bold text-xs sm:text-sm hover:bg-blue-500 shadow-lg shadow-blue-600/30 transition"
            >
              Schedule Strategy Consultation
            </Link>
            <Link
              href="/services/website-audit"
              className="px-6 py-3.5 rounded-lg bg-slate-900 border border-slate-800 text-white font-semibold text-xs sm:text-sm hover:bg-slate-800 transition"
            >
              Request Technical Website Audit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

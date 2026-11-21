import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllBlogPosts, getBlogPostBySlug, getSiteConfig } from '@/lib/content';
import { constructMetadata } from '@/lib/metadata';
import { getBreadcrumbSchema, getArticleSchema } from '@/lib/jsonld';
import { renderMarkdownToHtml } from '@/lib/markdown';
import { Calendar, Clock, UserCheck, ArrowRight, Phone, MessageSquare, MapPin } from 'lucide-react';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.frontmatter.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug);
  if (!post) return {};

  return constructMetadata({
    title: post.frontmatter.metaTitle,
    description: post.frontmatter.metaDescription,
    path: `/blog/${post.frontmatter.slug}`,
  });
}

export default function BlogPostDetailPage({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) notFound();

  const config = getSiteConfig();
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Insights & Blog', path: '/blog' },
    { name: post.frontmatter.title, path: `/blog/${post.frontmatter.slug}` },
  ]);
  const articleSchema = getArticleSchema(post.frontmatter);

  return (
    <article className="py-12 bg-slate-50 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="text-xs font-mono text-slate-500 mb-6 flex items-center gap-2">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-blue-600">Insights</Link>
          <span>/</span>
          <span className="text-slate-900 font-semibold truncate max-w-xs">{post.frontmatter.title}</span>
        </nav>

        {/* Article Header */}
        <header className="bg-white p-8 sm:p-12 rounded-2xl border border-slate-200 shadow-sm mb-10">
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
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight mb-6">
            {post.frontmatter.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-8">
            {post.frontmatter.summary}
          </p>

          {/* Author Chip */}
          <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-sm">
                KV
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">{post.frontmatter.author}</div>
                <div className="text-xs text-slate-500 font-mono">Founder & CEO · 16 Yrs Search Depth</div>
              </div>
            </div>
            <Link
              href="/#consultation"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600 text-white font-bold text-xs hover:bg-blue-700 transition"
            >
              <span>Discuss Strategy</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </header>

        {/* Article Body */}
        <div className="bg-white p-8 sm:p-12 rounded-2xl border border-slate-200 shadow-sm mb-10 prose prose-slate max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-blue-600 prose-a:font-semibold">
          <div dangerouslySetInnerHTML={{ __html: renderMarkdownToHtml(post.content) }} />
        </div>

        {/* Author Bio Box */}
        <div className="bg-slate-100 p-8 rounded-2xl border border-slate-200 mb-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="w-16 h-16 rounded-full bg-blue-600 text-white font-bold text-2xl flex items-center justify-center flex-shrink-0">
            KV
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-950">About {post.frontmatter.author}</h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
              Kapil Vashistha has led organic search, local SEO, and digital growth campaigns for approximately 16 years. Based in Mansarovar, Jaipur, he directs technical search strategy and website builds for ambitious regional and national businesses.
            </p>
            <div className="mt-3 flex items-center gap-4 text-xs font-mono text-blue-600">
              <Link href="/about" className="font-semibold hover:underline">Read Founder Bio →</Link>
              <Link href="/locations/jaipur" className="font-semibold hover:underline">Jaipur Office Details →</Link>
            </div>
          </div>
        </div>

        {/* Bottom Consultation Box */}
        <div className="bg-slate-950 text-white p-8 sm:p-12 rounded-2xl text-center shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
            Want to Discuss Your Website’s Search Strategy?
          </h2>
          <p className="text-sm text-slate-400 max-w-md mx-auto mb-8">
            Speak directly with Kapil Vashistha. We will inspect your domain’s indexation and technical health before the call.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#consultation"
              className="px-6 py-3.5 rounded-lg bg-blue-600 text-white font-bold text-xs sm:text-sm hover:bg-blue-500 shadow-lg shadow-blue-600/30 transition"
            >
              Schedule 30-Minute Consultation
            </Link>
            <a
              href={`https://wa.me/${config.contact.whatsapp.replace(/[^0-9]/g, '')}?text=Hi%20Kapil,%20I%20just%20read%20your%20article%20on%20${encodeURIComponent(post.frontmatter.title)}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-lg bg-emerald-600 text-white font-semibold text-xs sm:text-sm hover:bg-emerald-500 transition flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

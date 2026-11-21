import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import {
  SiteConfigSchema,
  ServiceFrontmatterSchema,
  TestimonialSchema,
  BlogPostFrontmatterSchema,
  type SiteConfig,
  type ServiceFrontmatter,
  type Testimonial,
  type BlogPostFrontmatter,
} from './schemas';

const contentDirectory = path.join(process.cwd(), 'content');

export function getSiteConfig(): SiteConfig {
  const filePath = path.join(contentDirectory, 'site-config.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const json = JSON.parse(fileContents);
  return SiteConfigSchema.parse(json);
}

export function getTestimonials(): Testimonial[] {
  const filePath = path.join(contentDirectory, 'testimonials.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const json = JSON.parse(fileContents);
  return json.map((item: unknown) => TestimonialSchema.parse(item));
}

export interface ServiceItem {
  frontmatter: ServiceFrontmatter;
  content: string;
}

export function getAllServices(): ServiceItem[] {
  const servicesDir = path.join(contentDirectory, 'services');
  if (!fs.existsSync(servicesDir)) return [];

  const fileNames = fs.readdirSync(servicesDir);
  const services = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const fullPath = path.join(servicesDir, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);
      const validatedFrontmatter = ServiceFrontmatterSchema.parse(data);
      return {
        frontmatter: validatedFrontmatter,
        content,
      };
    })
    .sort((a, b) => a.frontmatter.priority - b.frontmatter.priority);

  return services;
}

export function getServiceBySlug(slug: string): ServiceItem | null {
  const services = getAllServices();
  return services.find((s) => s.frontmatter.slug === slug) || null;
}

export interface BlogPostItem {
  frontmatter: BlogPostFrontmatter;
  content: string;
}

export function getAllBlogPosts(): BlogPostItem[] {
  const blogDir = path.join(contentDirectory, 'blog');
  if (!fs.existsSync(blogDir)) return [];

  const fileNames = fs.readdirSync(blogDir);
  const posts = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const fullPath = path.join(blogDir, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);
      const validatedFrontmatter = BlogPostFrontmatterSchema.parse(data);
      return {
        frontmatter: validatedFrontmatter,
        content,
      };
    })
    .sort((a, b) => new Date(b.frontmatter.publishDate).getTime() - new Date(a.frontmatter.publishDate).getTime());

  return posts;
}

export function getBlogPostBySlug(slug: string): BlogPostItem | null {
  const posts = getAllBlogPosts();
  return posts.find((p) => p.frontmatter.slug === slug) || null;
}


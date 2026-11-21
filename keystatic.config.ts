import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    services: collection({
      label: 'Services',
      slugField: 'title',
      path: 'content/services/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Service Title' } }),
        metaTitle: fields.text({ label: 'Meta Title' }),
        metaDescription: fields.text({ label: 'Meta Description', multiline: true }),
        summary: fields.text({ label: 'Summary', multiline: true }),
        priority: fields.number({ label: 'Priority Order', defaultValue: 1 }),
        startingPrice: fields.text({ label: 'Starting Price', defaultValue: '₹20,000 / month' }),
        category: fields.text({ label: 'Category', defaultValue: 'Core Search' }),
        deliverables: fields.array(fields.text({ label: 'Deliverable' }), {
          label: 'Deliverables List',
          itemLabel: (props) => props.value,
        }),
        exclusions: fields.array(fields.text({ label: 'Exclusion' }), {
          label: 'What We Do Not Do',
          itemLabel: (props) => props.value,
        }),
        content: fields.markdoc({ label: 'Full Service Description Content' }),
      },
    }),
    blog: collection({
      label: 'Blog & Insights',
      slugField: 'title',
      path: 'content/blog/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Article Title' } }),
        metaTitle: fields.text({ label: 'Meta Title' }),
        metaDescription: fields.text({ label: 'Meta Description', multiline: true }),
        publishDate: fields.date({ label: 'Publish Date', defaultValue: { kind: 'today' } }),
        author: fields.text({ label: 'Author Name', defaultValue: 'Kapil Vashistha' }),
        pillar: fields.select({
          label: 'Content Pillar',
          options: [
            { label: 'Technical SEO', value: 'Technical SEO' },
            { label: 'Local Search', value: 'Local Search' },
            { label: 'Search Economics', value: 'Search Economics' },
            { label: 'Commercial Strategy', value: 'Commercial Strategy' },
          ],
          defaultValue: 'Technical SEO',
        }),
        summary: fields.text({ label: 'Article Summary', multiline: true }),
        readTime: fields.text({ label: 'Estimated Read Time', defaultValue: '5 min read' }),
        content: fields.markdoc({ label: 'Article Markdown Content' }),
      },
    }),
  },
  singletons: {
    siteConfig: singleton({
      label: 'Site Configuration',
      path: 'content/site-config',
      format: 'json',
      schema: {
        name: fields.text({ label: 'Agency Name', defaultValue: 'SeoBay India' }),
        url: fields.url({ label: 'Website URL', defaultValue: 'https://seobay.in' }),
      },
    }),
  },
});

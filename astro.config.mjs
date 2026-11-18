// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import seoGraph from '@jdevalk/astro-seo-graph/integration';

// https://astro.build/config
export default defineConfig({
  site: 'https://davidsilva.site',
  // Custom domain serves at root → no base path needed.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt'],
    routing: {
      prefixDefaultLocale: false, // EN at root, PT under /pt/
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en-US', pt: 'pt-BR' },
      },
    }),
    seoGraph({
      validateH1: true,
      validateUniqueMetadata: true,
      validateImageAlt: true,
      validateMetadataLength: true,
      validateInternalLinks: true,
      llmsTxt: {
        title: 'David Silva',
        siteUrl: 'https://davidsilva.site',
        summary:
          'A bilingual personal site about AI engineering, production software, teaching, and tabletop role-playing.',
      },
    }),
  ],
});

// @ts-check
import { defineConfig } from 'astro/config';

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
});

export const languages = { en: 'English', pt: 'Português' };
export const defaultLang = 'en';

export const ui = {
  en: {
    'nav.blog': 'Blog',
    'nav.about': 'About',
    'nav.home': 'Home',
    'post.readingTime': 'min read',
  },
  pt: {
    'nav.blog': 'Blog',
    'nav.about': 'Sobre',
    'nav.home': 'Início',
    'post.readingTime': 'min de leitura',
  },
} as const;

export type UiKey = keyof (typeof ui)['en'];

/** Detect the locale ('en' | 'pt') from a URL pathname. */
export function getLangFromPath(pathname: string): keyof typeof ui {
  return pathname === '/pt' || pathname.startsWith('/pt/') ? 'pt' : 'en';
}

/** Returns a translator bound to a locale, falling back to the default. */
export function useTranslations(lang: keyof typeof ui) {
  return (key: UiKey) => ui[lang][key] ?? ui[defaultLang][key];
}

/** Prefix a root-relative path with the locale (EN stays at root). */
export function localizedPath(path: string, lang: keyof typeof ui): string {
  if (lang === 'en') return path;
  return '/pt' + (path === '/' ? '/' : path);
}

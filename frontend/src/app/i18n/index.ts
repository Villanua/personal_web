import { navigationTranslations } from './navigation';
import { homePageTranslations } from './homePage';
import { aboutPageTranslations } from './aboutPage';
import { commonTranslations } from './common';

// Merge all translations
export const translations = {
  es: {
    ...navigationTranslations.es,
    ...homePageTranslations.es,
    ...aboutPageTranslations.es,
    ...commonTranslations.es,
  },
  en: {
    ...navigationTranslations.en,
    ...homePageTranslations.en,
    ...aboutPageTranslations.en,
    ...commonTranslations.en,
  }
} as const;

type LanguageCode = keyof typeof translations;

export function useLanguage(): LanguageCode {
  const browserLanguage = typeof navigator !== 'undefined' 
    ? navigator.language.split('-')[0] 
    : 'en';
  
  return (browserLanguage === 'es' ? 'es' : 'en') as LanguageCode;
}

export function getTranslation(key: string, lang: LanguageCode): string {
  return (translations[lang] as any)[key] || (translations.en as any)[key];
}

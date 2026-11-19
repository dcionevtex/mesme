import type {Metadata} from 'next';
import {type Locale, localePath} from '@/i18n/routing';

const site = new URL(process.env.SITE_URL || 'https://mesmeofficial.com');

export const indexable = process.env.SITE_INDEXABLE === 'true' &&
  process.env.VERCEL_ENV !== 'preview';

export function siteUrl(path: string) {
  return new URL(path, site).href;
}

export function languageAlternates(path: string) {
  return {
    en: siteUrl(localePath('en', path)),
    ar: siteUrl(localePath('ar', path)),
    'x-default': siteUrl(localePath('en', path))
  };
}

export function pageMetadata({
  locale, path = '', title, description, image = '/media/hero-desktop-1600.webp',
  index = indexable
}: {
  locale: Locale;
  path?: string;
  title: string;
  description: string;
  image?: string;
  index?: boolean;
}): Metadata {
  const canonical = siteUrl(localePath(locale, path));

  return {
    title,
    description,
    alternates: {canonical, languages: languageAlternates(path)},
    robots: {index, follow: index},
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: 'MESME',
      type: 'website',
      locale: locale === 'ar' ? 'ar_AE' : 'en_AE',
      alternateLocale: locale === 'ar' ? 'en_AE' : 'ar_AE',
      images: [{url: siteUrl(image)}]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [siteUrl(image)]
    }
  };
}

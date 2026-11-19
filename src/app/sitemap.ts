import type {MetadataRoute} from 'next';
import {routing, localePath} from '@/i18n/routing';
import {productPath, productSlugs} from '@/lib/catalog';
import {languageAlternates, siteUrl} from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  return ['', ...productSlugs.map(productPath)].flatMap((path) =>
    routing.locales.map((locale) => ({
      url: siteUrl(localePath(locale, path)),
      alternates: {languages: languageAlternates(path)}
    }))
  );
}

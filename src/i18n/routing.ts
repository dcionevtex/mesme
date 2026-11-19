import {defineRouting} from 'next-intl/routing';
import {hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';

export const routing = defineRouting({
  locales: ['en', 'ar'],
  defaultLocale: 'en',
  localePrefix: 'always'
});

export type Locale = (typeof routing.locales)[number];

export function requireLocale(value: string): Locale {
  if (!hasLocale(routing.locales, value)) notFound();
  return value;
}

export function localePath(locale: Locale, path = '') {
  return `/${locale}${path}`;
}

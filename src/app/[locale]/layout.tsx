import type {Metadata} from 'next';
import localFont from 'next/font/local';
import {setRequestLocale} from 'next-intl/server';
import type {ReactNode} from 'react';
import '@fontsource-variable/noto-sans-arabic/wght.css';
import '@/app/globals.css';
import {requireLocale, routing} from '@/i18n/routing';

const dmSans = localFont({
  src: [
    {path: '../../../assets/source/fonts/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAopxhS2f3ZGMZpg.woff2', weight: '400'},
    {path: '../../../assets/source/fonts/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAkJxhS2f3ZGMZpg.woff2', weight: '500'},
    {path: '../../../assets/source/fonts/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAfJthS2f3ZGMZpg.woff2', weight: '600'}
  ],
  variable: '--font-dm-sans',
  display: 'swap'
});

export const metadata: Metadata = {
  icons: {icon: '/media/site-icon.jpg', apple: '/media/apple-touch-icon.jpg'},
  applicationName: 'MESME'
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({children, params}: {
  children: ReactNode;
  params: Promise<{locale: string}>;
}) {
  const locale = requireLocale((await params).locale);
  setRequestLocale(locale);

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'} className={dmSans.variable}>
      <body>{children}</body>
    </html>
  );
}

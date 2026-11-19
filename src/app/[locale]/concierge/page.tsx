import Link from 'next/link';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import type {Metadata} from 'next';
import {SiteFooter, SiteHeader} from '@/components/site-chrome';
import {localePath, requireLocale} from '@/i18n/routing';
import {isProductSlug, official, products} from '@/lib/catalog';
import {pageMetadata} from '@/lib/seo';

type Props = {
  params: Promise<{locale: string}>;
  searchParams: Promise<{subject?: string | string[]}>;
};

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const locale = requireLocale((await params).locale);
  const t = await getTranslations({locale, namespace: 'concierge'});
  return pageMetadata({locale, path: '/concierge', title: `${t('title')} | MESME`,
    description: t('intro'), index: false});
}

export default async function Concierge({params, searchParams}: Props) {
  const locale = requireLocale((await params).locale);
  const {subject} = await searchParams;
  setRequestLocale(locale);
  const t = await getTranslations('concierge');
  const product = isProductSlug(subject) ? products[subject] : null;
  const route = `/concierge${product || subject === 'bespoke' ? `?subject=${subject}` : ''}`;

  return (
    <>
      <SiteHeader locale={locale} route={route} />
      <main className="shell concierge-page" id="main-content" tabIndex={-1}>
        <div>
          <Link className="text-link" href={localePath(locale)}>{t('back')}</Link>
          <h1>{t('title')}</h1>
          <p className="concierge-intro">
            {product ? t.rich('productIntro', {name: product.name, piece: (name) => <bdi lang="en" dir="ltr">{name}</bdi>})
              : t(subject === 'bespoke' ? 'bespokeIntro' : 'intro')}
          </p>
          <p className="body-copy">{t('body')}</p>
          <a className="button button-light" href={official.enquiry}>{t('cta')}</a>
        </div>
      </main>
      <SiteFooter locale={locale} route={route} />
    </>
  );
}

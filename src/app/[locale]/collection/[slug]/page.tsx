import Image from 'next/image';
import Link from 'next/link';
import {notFound} from 'next/navigation';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import type {Metadata} from 'next';
import {SiteFooter, SiteHeader} from '@/components/site-chrome';
import {localePath, requireLocale} from '@/i18n/routing';
import {isProductSlug, productPath, products, productSlugs} from '@/lib/catalog';
import {pageMetadata} from '@/lib/seo';

type Props = {params: Promise<{locale: string; slug: string}>};

export function generateStaticParams() {
  return productSlugs.map((slug) => ({slug}));
}

async function getProduct(params: Props['params']) {
  const {locale: code, slug} = await params;
  const locale = requireLocale(code);
  if (!isProductSlug(slug)) notFound();
  return {locale, slug, product: products[slug], route: productPath(slug)};
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {locale, product, route} = await getProduct(params);
  const t = await getTranslations({locale, namespace: 'collection'});
  const edition = locale === 'ar' ? ` · ${t(product.editionKey)}` : '';
  return pageMetadata({
    locale, path: route, title: `${product.name}${edition} | MESME`,
    description: t(product.introKey), image: product.image
  });
}

export default async function Product({params}: Props) {
  const {locale, slug, product, route} = await getProduct(params);
  setRequestLocale(locale);
  const t = await getTranslations('collection');

  return (
    <>
      <SiteHeader locale={locale} route={route} />
      <main className="shell detail-page" id="main-content" tabIndex={-1}>
        <div className="detail-copy">
          <Link className="text-link" href={localePath(locale, '#collection')}>{t('back')}</Link>
          <p className="eyebrow">{t('category')}</p>
          <h1><bdi lang="en" dir="ltr">{product.name}</bdi></h1>
          {locale === 'ar' && <p className="edition-label">{t(product.editionKey)}</p>}
          <p className="body-copy">{t(product.introKey)}</p>
          <Link className="button button-light" href={localePath(locale, `/concierge?subject=${slug}`)}>
            {t('enquire')}
          </Link>
        </div>
        <div className="detail-image visual">
          <Image src={product.image} alt={t(product.altKey)} fill
            sizes="(max-width: 699px) 85vw, 45vw" preload />
        </div>
      </main>
      <SiteFooter locale={locale} route={route} />
    </>
  );
}

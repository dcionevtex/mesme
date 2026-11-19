import Image from 'next/image';
import Link from 'next/link';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import type {Metadata} from 'next';
import {HeroFilm} from '@/components/hero-film';
import {SiteFooter, SiteHeader} from '@/components/site-chrome';
import {localePath, requireLocale} from '@/i18n/routing';
import {productPath, products, productSlugs} from '@/lib/catalog';
import {pageMetadata} from '@/lib/seo';

type Props = {params: Promise<{locale: string}>};

const editorial = {
  portrait: '/media/world-portrait.webp',
  sand: '/media/world-sand.webp',
  studio: '/media/world-studio.webp'
} as const;

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const locale = requireLocale((await params).locale);
  const t = await getTranslations({locale, namespace: 'seo'});
  return pageMetadata({locale, title: t('title'), description: t('description')});
}

export default async function Home({params}: Props) {
  const locale = requireLocale((await params).locale);
  setRequestLocale(locale);
  const t = await getTranslations();

  return (
    <>
      <SiteHeader locale={locale} />
      <main id="main-content" tabIndex={-1}>
        <section className="hero" aria-labelledby="hero-title">
          <div className="shell hero-inner">
            <div className="hero-copy">
              <p className="eyebrow hero-category">{t('hero.category')}</p>
              <h1 id="hero-title">{t('hero.titleStart')}{' '}<br />{t('hero.titleEnd')}</h1>
              <p className="hero-description">{t('hero.copy')}</p>
              <a className="button button-light" href="#collection">{t('hero.cta')}</a>
            </div>
          </div>
          <HeroFilm play={t('hero.play')} pause={t('hero.pause')} />
        </section>

        <section className="shell collection section-spacing" id="collection" aria-labelledby="collection-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">{t('collection.label')}</p>
              <h2 id="collection-title">{t('collection.title')}</h2>
            </div>
            <p className="body-copy">{t('collection.copy')}</p>
          </div>
          <ul className="product-grid">
            {productSlugs.map((slug) => {
              const product = products[slug];
              return (
                <li key={slug}>
                  <Link className="product-link" href={localePath(locale, productPath(slug))}
                    aria-labelledby={`${slug}-name ${slug}-action`}>
                    <div className="product-image visual">
                      <Image src={product.image} alt={t(`collection.${product.altKey}`)}
                        fill sizes="(max-width: 699px) 82vw, (max-width: 1460px) 42vw, 606px" />
                    </div>
                    <div className="product-caption">
                      <div>
                        {locale === 'ar' && <p className="edition-label">{t(`collection.${product.editionKey}`)}</p>}
                        <h3 id={`${slug}-name`}><bdi lang="en" dir="ltr">{product.name}</bdi></h3>
                      </div>
                      <span className="text-link" id={`${slug}-action`}>{t('collection.view')}</span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>

        <section className="craft" id="craftsmanship" aria-labelledby="craft-title">
          <div className="shell craft-layout">
            <div className="craft-image visual">
              <Image src="/media/craftsmanship.webp" alt={t('craft.alt')} fill
                sizes="(max-width: 699px) 100vw, (max-width: 1250px) 55vw, 720px" />
            </div>
            <div className="craft-copy">
              <p className="eyebrow">{t('craft.label')}</p>
              <h2 id="craft-title">{t('craft.title')}</h2>
              <p className="body-copy">{t('craft.copy')}</p>
              <ul className="materials">
                <li>{t('craft.gold')}</li>
                <li>{t('craft.diamonds')}</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="shell bespoke section-spacing" id="bespoke" aria-labelledby="bespoke-title">
          <div className="bespoke-stage">
            <div className="bespoke-image visual">
              <Image src="/media/bespoke.webp" alt={t('bespoke.alt')} fill sizes="(max-width: 1250px) 93vw, 1240px" />
            </div>
            <div className="bespoke-copy">
              <p className="eyebrow">{t('bespoke.label')}</p>
              <h2 id="bespoke-title">{t('bespoke.title')}</h2>
              <p className="body-copy">{t('bespoke.copy')}</p>
              <Link className="button button-outline" href={localePath(locale, '/concierge?subject=bespoke')}>
                {t('bespoke.cta')}
              </Link>
            </div>
          </div>
        </section>

        <section className="shell fragrance" id="fragrance" aria-labelledby="fragrance-title">
          <div className="fragrance-copy">
            <p className="eyebrow">{t('fragrance.label')}</p>
            <h2 id="fragrance-title"><bdi lang="en" dir="ltr">{t('fragrance.name')}</bdi></h2>
            <p className="body-copy">{t('fragrance.copy')}</p>
            <div className="notes">
              <h3 className="eyebrow">{t('fragrance.notes')}</h3>
              <ul>
                {(['sandalwood', 'vanilla', 'patchouli', 'milk'] as const).map((note) => (
                  <li key={note}>{t(`fragrance.${note}`)}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="fragrance-images">
            <div className="sachet-image visual">
              <Image src="/media/origin-sachet.webp" alt={t('fragrance.alt')} fill
                sizes="(max-width: 699px) 85vw, (max-width: 1250px) 43vw, 560px" />
            </div>
            <div className="notes-image visual">
              <Image src="/media/origin-notes.webp" alt={t('fragrance.notesAlt')} fill
                sizes="(max-width: 699px) 46vw, 270px" />
            </div>
          </div>
        </section>

        <section className="shell world section-spacing" id="world" aria-labelledby="world-title">
          <h2 id="world-title">{t.rich('world.title', {brand: (name) => <bdi lang="en" dir="ltr">{name}</bdi>})}</h2>
          <div className="world-grid">
            {(Object.entries(editorial) as [keyof typeof editorial, string][]).map(([key, src]) => (
              <div key={key} className={`world-image world-${key} visual`}>
                <Image src={src} alt={t(`world.${key}`)} fill sizes="(max-width: 699px) 45vw, 30vw" />
              </div>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}

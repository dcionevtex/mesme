import Image from 'next/image';
import Link from 'next/link';
import {getTranslations} from 'next-intl/server';
import {localePath, type Locale} from '@/i18n/routing';
import {official} from '@/lib/catalog';
import {MobileMenu} from './mobile-menu';

function Languages({locale, route, label}: {locale: Locale; route: string; label: string}) {
  return (
    <div className="language-switch" role="group" aria-label={label}>
      <Link href={localePath('en', route)} lang="en" hrefLang="en" aria-current={locale === 'en' ? 'page' : undefined}>
        English
      </Link>
      <Link href={localePath('ar', route)} lang="ar" hrefLang="ar" aria-current={locale === 'ar' ? 'page' : undefined}>
        العربية
      </Link>
    </div>
  );
}

function Wordmark({locale, label, className}: {locale: Locale; label: string; className: string}) {
  return (
    <Link href={localePath(locale)} aria-label={label} className={className}>
      <Image src="/media/mesme-wordmark.svg" alt="" width={1150} height={410} unoptimized />
    </Link>
  );
}

async function navigation(locale: Locale) {
  const t = await getTranslations({locale, namespace: 'nav'});
  const sections = (['collection', 'craftsmanship', 'bespoke', 'fragrance'] as const).map((section) => ({
    href: localePath(locale, `#${section}`),
    label: t(section)
  }));
  const concierge = {href: localePath(locale, '/concierge'), label: t('concierge')};
  return {t, sections, concierge};
}

export async function SiteHeader({locale, route = ''}: {locale: Locale; route?: string}) {
  const {t, sections, concierge} = await navigation(locale);

  return (
    <>
      <a className="skip-link" href="#main-content">{t('skip')}</a>
      <header className="site-header">
        <div className="shell header-inner">
          <Wordmark locale={locale} label={t('home')} className="header-mark" />
          <nav className="desktop-nav" aria-label={t('main')}>
            {sections.map(({href, label}) => <Link key={href} href={href}>{label}</Link>)}
          </nav>
          <div className="header-actions">
            <Link className="header-concierge" href={concierge.href}>{concierge.label}</Link>
            <Languages locale={locale} route={route} label={t('language')} />
            <MobileMenu items={[...sections, concierge]} labels={{
              open: t('menu'), close: t('close'), navigation: t('main')
            }} />
          </div>
        </div>
      </header>
    </>
  );
}

export async function SiteFooter({locale, route = ''}: {locale: Locale; route?: string}) {
  const {t, sections, concierge} = await navigation(locale);
  const footer = await getTranslations({locale, namespace: 'footer'});
  const year = new Date().getUTCFullYear();

  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-main">
          <Wordmark locale={locale} label={t('home')} className="footer-mark" />
          <nav className="footer-nav" aria-label={t('footer')}>
            {sections.map(({href, label}) => <Link key={href} href={href}>{label}</Link>)}
            <Link href={concierge.href}>{concierge.label}</Link>
            <Link href={localePath(locale, '#world')}>{t('world')}</Link>
          </nav>
        </div>
        <div className="footer-bottom">
          <span>{footer('copyright', {year})}</span>
          <a href={official.privacy}>{t('privacy')}</a>
          <Languages locale={locale} route={route} label={t('language')} />
        </div>
      </div>
    </footer>
  );
}

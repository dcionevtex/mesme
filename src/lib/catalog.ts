export const products = {
  'gold-diamond-bear': {
    name: 'Gold Diamond Bear',
    image: '/media/gold-diamond-bear.webp',
    altKey: 'goldAlt',
    editionKey: 'goldEdition',
    introKey: 'goldIntro'
  },
  'black-diamond-bear': {
    name: 'Black Diamond Bear',
    image: '/media/black-diamond-bear.webp',
    altKey: 'blackAlt',
    editionKey: 'blackEdition',
    introKey: 'blackIntro'
  }
} as const;

export type ProductSlug = keyof typeof products;
export const productSlugs = Object.keys(products) as ProductSlug[];

export function isProductSlug(value: unknown): value is ProductSlug {
  return typeof value === 'string' && Object.hasOwn(products, value);
}

export const productPath = (slug: ProductSlug) => `/collection/${slug}`;

export const official = {
  enquiry: 'https://mesmeofficial.com/#contact-form',
  privacy: 'https://mesmeofficial.com/index.php/privacy-policy/'
};

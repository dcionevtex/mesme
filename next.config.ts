import type {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const config: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [{source: '/', destination: '/en', permanent: true}];
  }
};

export default createNextIntlPlugin('./src/i18n/request.ts')(config);

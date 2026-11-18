/** @type {import('next').NextConfig} */
const nextConfig = {
  // Les images sont déjà optimisées (npm run images) : pas besoin de sharp côté serveur Plesk.
  images: { unoptimized: true },
  poweredByHeader: false,
  reactStrictMode: true,
  // Anciennes adresses (catalogue par pays) vers les 3 catalogues.
  async redirects() {
    const to = (n) => `/catalogue/${n}/:slug`;
    return [
      { source: '/catalogue/portugal/:slug(angle-.*|meridienne-.*)', destination: to(1), permanent: true },
      { source: '/catalogue/portugal/:slug(canape-.*|ensemble-.*)', destination: to(2), permanent: true },
      { source: '/catalogue/portugal/:slug(fauteuil-.*|table-.*|cleaning-pro|protecting-spray)', destination: to(3), permanent: true },
      { source: '/catalogue/:pays(portugal|suisse|belgique)/:rest*', destination: '/catalogue', permanent: true },
    ];
  },
};

export default nextConfig;

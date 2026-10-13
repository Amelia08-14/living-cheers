/** @type {import('next').NextConfig} */
const nextConfig = {
  // Les images sont déjà optimisées (npm run images) : pas besoin de sharp côté serveur Plesk.
  images: { unoptimized: true },
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;

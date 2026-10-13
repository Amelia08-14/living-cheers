import type { Metadata, Viewport } from 'next';
import '@fontsource-variable/jost';
import '@fontsource/instrument-serif/400-italic.css';
import './globals.css';

const SITE_URL = 'https://livingcheers.groupevelmont.ca';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Living Cheers | Meubles, salons et confort — site en construction',
  description:
    'Le site de Living Cheers est en construction. Meubles, salons et confort au Place Bathurst Mall, à Bathurst. Un chez-vous qui vous ressemble.',
  openGraph: {
    type: 'website',
    locale: 'fr_CA',
    siteName: 'Living Cheers',
    title: 'Living Cheers — site en construction',
    description: 'Meubles · Salons · Confort. Un chez-vous qui vous ressemble.',
    images: [{ url: '/images/render-aerial-1400.webp', width: 1206, height: 680 }],
  },
  twitter: { card: 'summary_large_image' },
};

export const viewport: Viewport = {
  themeColor: '#15171a',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr-CA">
      <body>{children}</body>
    </html>
  );
}

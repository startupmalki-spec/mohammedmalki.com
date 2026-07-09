import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mohammed Malki — Ideas, systems, and momentum',
  description: 'Personal site of Mohammed Malki: founder of Mugdm, ex-lender, and builder thinking through ideas, systems, momentum, and building from Saudi.',
  metadataBase: new URL('https://mohammedmalki.com'),
  openGraph: {
    title: 'Mohammed Malki',
    description: 'Ideas, systems, and momentum — from Saudi, through lending, AI, product, and company-building.',
    url: 'https://mohammedmalki.com',
    siteName: 'Mohammed Malki',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mohammed Malki',
    description: 'Ideas, systems, and momentum — from Saudi, through lending, AI, product, and company-building.',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

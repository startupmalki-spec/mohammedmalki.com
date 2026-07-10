import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mohammed Malki',
  description: 'Crafting your professional narrative with finesse.',
  metadataBase: new URL('https://mohammedmalki.com'),
  openGraph: {
    title: 'Mohammed Malki',
    description: 'Crafting your professional narrative with finesse.',
    url: 'https://mohammedmalki.com',
    siteName: 'Mohammed Malki',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mohammed Malki',
    description: 'Crafting your professional narrative with finesse.',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

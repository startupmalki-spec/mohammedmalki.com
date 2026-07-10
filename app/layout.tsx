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
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon-256x256.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Shadows+Into+Light:wght@400&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}

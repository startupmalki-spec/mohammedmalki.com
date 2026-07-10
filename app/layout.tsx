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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Shadows+Into+Light:wght@400&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}

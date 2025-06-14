import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
   title: 'Portfolio | Rahul Kumar Singh',
  description: 'Passionate full-stack developer showcasing modern web applications and technical expertise.',
  openGraph: {
    title: 'Developer Portfolio | Full Stack Web Developer',
    description: 'Passionate full-stack developer showcasing modern web applications and technical expertise.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Developer Portfolio | Full Stack Web Developer',
    description: 'Passionate full-stack developer showcasing modern web applications and technical expertise.',
    images: ['/twitter-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' fill='black'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='40' fill='white'>RKS</text></svg>" type="image/svg+xml" />
      </head>
      <body className={`${inter.className} font-geist-sans bg-white overscroll-none dark:bg-zinc-900`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

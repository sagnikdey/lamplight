import type { Metadata } from 'next';
import { Merriweather, Open_Sans } from 'next/font/google';
import { ThemeProvider } from '../components/ThemeProvider';
import './globals.css';

// Fonts load via next/font — self-hosted at build time, zero layout shift.
// These override the --brand-font-family-* token values with the actual loaded fonts.
const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--brand-font-family-headings',
  display: 'swap',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--brand-font-family-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Lamplight Design System',
  description: 'Token-driven component library',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${merriweather.variable} ${openSans.variable}`}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import type { ThemeProviderProps } from 'next-themes';

/**
 * Wraps next-themes and configures it to use `data-theme` attribute
 * on <html>, which our CSS variable layers respond to.
 *
 * Usage: wrap your root layout with this provider.
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="data-theme"   // matches [data-theme="dark"] in mapped.dark.css
      defaultTheme="system"    // respect OS preference by default
      enableSystem
      disableTransitionOnChange
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}

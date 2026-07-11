import * as React from 'react';
import { DocsMobileNav } from './DocsMobileNav';
import { ExternalLinks } from './ExternalLinks';
import { ThemeToggle } from './ThemeToggle';

export function DocsHeader() {
  return (
    <header className="sticky top-0 z-[var(--brand-z-index-sticky)] flex items-center justify-between gap-[var(--spacing-md)] border-b border-[color:var(--color-border-default)] bg-[var(--color-surface-default)] px-[var(--spacing-xl)] py-[var(--spacing-md)]">
      <DocsMobileNav />
      <div className="ml-auto flex items-center gap-[var(--spacing-md)]">
        <ExternalLinks />
        <ThemeToggle />
      </div>
    </header>
  );
}

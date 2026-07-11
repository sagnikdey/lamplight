'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@lamplight/ui';
import { DocsNav } from './DocsNav';

export function DocsSidebar() {
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        'hidden w-[280px] shrink-0 flex-col border-r border-[color:var(--color-border-default)]',
        'bg-[var(--color-surface-default)] lg:flex'
      )}
      aria-label="Documentation navigation"
    >
      <div className="border-b border-[color:var(--color-border-default)] px-[var(--spacing-xl)] py-[var(--spacing-lg)]">
        <Link
          href="/"
          className={cn(
            'font-[family-name:var(--font-heading)] text-[length:var(--type-paragraph-md-size)]',
            'leading-[var(--type-paragraph-md-lh)] text-[color:var(--color-text-headings)]',
            'no-underline hover:text-[color:var(--color-text-action)]'
          )}
        >
          Lamplight
        </Link>
        <p className="mt-[var(--spacing-xs)] text-[length:var(--type-paragraph-xsm-size)] leading-[var(--type-paragraph-xsm-lh)] text-[color:var(--color-text-body-secondary)]">
          Design System
        </p>
      </div>

      <nav className="flex-1 overflow-y-auto px-[var(--spacing-lg)] py-[var(--spacing-xl)]">
        <DocsNav key={pathname} />
      </nav>
    </aside>
  );
}

'use client';

import * as React from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@lamplight/ui';
import { DocsNav } from './DocsNav';

export function DocsMobileNav() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <Button
        variant="ghost"
        size="sm"
        aria-expanded={open}
        aria-controls="mobile-docs-nav"
        aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
        onClick={() => setOpen((prev) => !prev)}
        leadingIcon={open ? <X size={16} aria-hidden /> : <Menu size={16} aria-hidden />}
      />

      {open ? (
        <>
          <button
            type="button"
            aria-label="Close navigation menu"
            className="fixed inset-0 z-[var(--brand-z-index-overlay)] bg-[var(--color-surface-page)]/80"
            onClick={() => setOpen(false)}
          />
          <div
            id="mobile-docs-nav"
            className="fixed inset-y-0 left-0 z-[var(--brand-z-index-modal)] flex w-[min(320px,85vw)] flex-col border-r border-[color:var(--color-border-default)] bg-[var(--color-surface-default)] shadow-modal"
          >
            <div className="border-b border-[color:var(--color-border-default)] px-[var(--spacing-xl)] py-[var(--spacing-lg)]">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="font-[family-name:var(--font-heading)] text-[length:var(--type-paragraph-md-size)] text-[color:var(--color-text-headings)] no-underline"
              >
                Lamplight
              </Link>
              <p className="mt-[var(--spacing-xs)] text-[length:var(--type-paragraph-xsm-size)] text-[color:var(--color-text-body-secondary)]">
                Design System
              </p>
            </div>
            <nav className="flex-1 overflow-y-auto px-[var(--spacing-lg)] py-[var(--spacing-xl)]" aria-label="Documentation navigation">
              <DocsNav onNavigate={() => setOpen(false)} />
            </nav>
          </div>
        </>
      ) : null}
    </div>
  );
}

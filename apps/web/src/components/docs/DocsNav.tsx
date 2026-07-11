'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@lamplight/ui';
import { docsNavigation } from '@/lib/docs/navigation';

const overviewPaths = new Set(['/foundations', '/components']);

function isNavItemActive(pathname: string, href: string) {
  if (overviewPaths.has(href)) {
    return pathname === href;
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export interface DocsNavProps {
  onNavigate?: () => void;
  className?: string;
}

export function DocsNav({ onNavigate, className }: DocsNavProps) {
  const pathname = usePathname();

  return (
    <ul className={cn('flex flex-col gap-[var(--spacing-2xl)]', className)}>
      {docsNavigation.map((section) => (
        <li key={section.href}>
          <div className="mb-[var(--spacing-sm)] flex items-center gap-[var(--spacing-sm)]">
            <span className="text-[length:var(--type-paragraph-xsm-size)] font-semibold uppercase tracking-wide text-[color:var(--color-text-body-secondary)]">
              {section.label}
            </span>
            {section.badge ? (
              <span className="rounded-[var(--border-radius-full)] bg-[var(--color-surface-sunken)] px-[var(--spacing-sm)] py-[var(--spacing-xs)] text-[length:var(--type-paragraph-xsm-size)] text-[color:var(--color-text-body-secondary)]">
                {section.badge}
              </span>
            ) : null}
          </div>
          <ul className="flex flex-col gap-[var(--spacing-xs)]">
            {section.children?.map((item) => {
              const isActive = isNavItemActive(pathname, item.href);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onNavigate}
                    aria-current={isActive ? 'page' : undefined}
                    className={cn(
                      'block rounded-[var(--border-radius-md)] px-[var(--spacing-md)] py-[var(--spacing-sm)]',
                      'text-[length:var(--type-paragraph-sm-size)] leading-[var(--type-paragraph-sm-lh)]',
                      'no-underline transition-colors duration-150',
                      isActive
                        ? 'bg-[var(--color-surface-sunken)] font-medium text-[color:var(--color-text-action)]'
                        : 'text-[color:var(--color-text-body)] hover:bg-[var(--color-surface-sunken)] hover:text-[color:var(--color-text-action)]'
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </li>
      ))}
    </ul>
  );
}

import * as React from 'react';
import { cn } from '@lamplight/ui';

export interface CalloutProps {
  title: string;
  children: React.ReactNode;
  variant?: 'info' | 'warning' | 'do' | 'dont';
}

const variantClasses = {
  info: 'border-[color:var(--color-border-information)] bg-[var(--color-surface-information)]',
  warning: 'border-[color:var(--color-border-warning)] bg-[var(--color-surface-warning)]',
  do: 'border-[color:var(--color-border-success)] bg-[var(--color-surface-success)]',
  dont: 'border-[color:var(--color-border-error)] bg-[var(--color-surface-error)]',
} as const;

export function Callout({ title, children, variant = 'info' }: CalloutProps) {
  return (
    <aside
      className={cn(
        'rounded-[var(--border-radius-lg)] border p-[var(--spacing-xl)]',
        variantClasses[variant]
      )}
    >
      <p className="text-[length:var(--type-paragraph-sm-size)] font-semibold leading-[var(--type-paragraph-sm-lh)] text-[color:var(--color-text-headings)]">
        {title}
      </p>
      <div className="mt-[var(--spacing-sm)] text-[length:var(--type-paragraph-sm-size)] leading-[var(--type-paragraph-sm-lh)] text-[color:var(--color-text-body)]">
        {children}
      </div>
    </aside>
  );
}

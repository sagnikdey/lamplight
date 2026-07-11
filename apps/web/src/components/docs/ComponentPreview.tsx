import * as React from 'react';
import { cn } from '@lamplight/ui';

export interface ComponentPreviewProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  padded?: boolean;
}

export function ComponentPreview({
  title,
  children,
  className,
  padded = true,
}: ComponentPreviewProps) {
  return (
    <figure className="overflow-hidden rounded-[var(--border-radius-lg)] border border-[color:var(--color-border-default)] bg-[var(--color-surface-page)]">
      {title ? (
        <figcaption className="border-b border-[color:var(--color-border-default)] bg-[var(--color-surface-default)] px-[var(--spacing-lg)] py-[var(--spacing-md)] text-[length:var(--type-paragraph-xsm-size)] font-semibold uppercase tracking-wide text-[color:var(--color-text-body-secondary)]">
          {title}
        </figcaption>
      ) : null}
      <div className={cn(padded && 'p-[var(--spacing-xl)]', className)}>{children}</div>
    </figure>
  );
}

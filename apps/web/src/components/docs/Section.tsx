import * as React from 'react';
import { cn } from '@lamplight/ui';

export interface SectionProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
  id?: string;
  className?: string;
}

export function Section({ title, description, children, id, className }: SectionProps) {
  return (
    <section id={id} className={cn('mb-[var(--spacing-3xl)]', className)}>
      <h2 className="font-[family-name:var(--font-heading)] text-[length:var(--type-h4-size)] leading-[var(--type-h4-lh)] text-[color:var(--color-text-headings)]">
        {title}
      </h2>
      {description ? (
        <p className="mt-[var(--spacing-md)] max-w-[680px] text-[length:var(--type-paragraph-md-size)] leading-[var(--type-paragraph-md-lh)] text-[color:var(--color-text-body-secondary)]">
          {description}
        </p>
      ) : null}
      {children ? <div className="mt-[var(--spacing-xl)]">{children}</div> : null}
    </section>
  );
}

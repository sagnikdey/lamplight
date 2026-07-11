import * as React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@lamplight/ui';

export interface ComponentCardProps {
  title: string;
  description: string;
  href: string;
  category: string;
}

export function ComponentCard({ title, description, href, category }: ComponentCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        'group flex flex-col rounded-[var(--border-radius-lg)] border border-[color:var(--color-border-default)]',
        'bg-[var(--color-surface-raised)] p-[var(--spacing-xl)] shadow-raised no-underline',
        'transition-colors duration-150 hover:border-[color:var(--color-border-action)]'
      )}
    >
      <span className="text-[length:var(--type-paragraph-xsm-size)] font-semibold uppercase tracking-wide text-[color:var(--color-text-action)]">
        {category}
      </span>
      <h3 className="mt-[var(--spacing-sm)] font-[family-name:var(--font-heading)] text-[length:var(--type-paragraph-lg-size)] leading-[var(--type-paragraph-lg-lh)] text-[color:var(--color-text-headings)] group-hover:text-[color:var(--color-text-action)]">
        {title}
      </h3>
      <p className="mt-[var(--spacing-md)] flex-1 text-[length:var(--type-paragraph-sm-size)] leading-[var(--type-paragraph-sm-lh)] text-[color:var(--color-text-body-secondary)]">
        {description}
      </p>
      <span className="mt-[var(--spacing-lg)] inline-flex items-center gap-[var(--spacing-sm)] text-[length:var(--type-paragraph-sm-size)] font-medium text-[color:var(--color-text-action)]">
        View docs
        <ArrowRight size={16} aria-hidden className="transition-transform duration-150 group-hover:translate-x-[2px]" />
      </span>
    </Link>
  );
}

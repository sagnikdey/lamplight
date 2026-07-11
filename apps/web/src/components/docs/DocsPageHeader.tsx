import * as React from 'react';

export interface DocsPageHeaderProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

export function DocsPageHeader({ title, description, children }: DocsPageHeaderProps) {
  return (
    <header className="mb-[var(--spacing-3xl)] border-b border-[color:var(--color-border-default)] pb-[var(--spacing-2xl)]">
      <h1 className="font-[family-name:var(--font-heading)] text-[length:var(--type-h2-size)] leading-[var(--type-h2-lh)] text-[color:var(--color-text-headings)]">
        {title}
      </h1>
      <p className="mt-[var(--spacing-lg)] max-w-[680px] text-[length:var(--type-paragraph-lg-size)] leading-[var(--type-paragraph-lg-lh)] text-[color:var(--color-text-body-secondary)]">
        {description}
      </p>
      {children ? <div className="mt-[var(--spacing-xl)]">{children}</div> : null}
    </header>
  );
}

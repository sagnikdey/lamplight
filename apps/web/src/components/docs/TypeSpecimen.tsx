import * as React from 'react';
import type { CSSProperties } from 'react';
import { cn } from '@lamplight/ui';
import type { TypeScaleEntry } from '@/lib/tokens/typography-scale';

export interface TypeSpecimenProps {
  entry: TypeScaleEntry;
  sampleText?: string;
}

export function TypeSpecimen({ entry, sampleText }: TypeSpecimenProps) {
  const isHeading = entry.font === 'heading';
  const displayText = sampleText ?? (isHeading ? entry.name.toUpperCase() : 'The quick brown fox jumps over the lazy dog.');

  const specimenStyle = {
    fontSize: `var(${entry.sizeVar})`,
    lineHeight: `var(${entry.lhVar})`,
  } as CSSProperties;

  return (
    <div className="rounded-[var(--border-radius-lg)] border border-[color:var(--color-border-default)] bg-[var(--color-surface-raised)] p-[var(--spacing-xl)] shadow-raised">
      <div className="mb-[var(--spacing-lg)] flex flex-wrap items-baseline justify-between gap-[var(--spacing-md)]">
        <h3 className="font-[family-name:var(--font-heading)] text-[length:var(--type-paragraph-md-size)] text-[color:var(--color-text-headings)]">
          {entry.name}
        </h3>
        <code className="font-[family-name:var(--font-mono)] text-[length:var(--type-paragraph-xsm-size)] text-[color:var(--color-text-body-secondary)]">
          {entry.sizeVar} / {entry.lhVar}
        </code>
      </div>

      <p
        className={cn(
          isHeading
            ? 'font-[family-name:var(--font-heading)] text-[color:var(--color-text-headings)]'
            : 'font-[family-name:var(--font-body)] text-[color:var(--color-text-body)]',
          entry.font === 'mono' && 'font-[family-name:var(--font-mono)]'
        )}
        style={specimenStyle}
      >
        {displayText}
      </p>

      <dl className="mt-[var(--spacing-lg)] grid grid-cols-3 gap-[var(--spacing-md)] border-t border-[color:var(--color-border-default)] pt-[var(--spacing-lg)]">
        {(['desktop', 'tablet', 'mobile'] as const).map((bp) => (
          <div key={bp}>
            <dt className="text-[length:var(--type-paragraph-xsm-size)] font-semibold uppercase tracking-wide text-[color:var(--color-text-body-secondary)]">
              {bp}
            </dt>
            <dd className="mt-[var(--spacing-xs)] font-[family-name:var(--font-mono)] text-[length:var(--type-paragraph-xsm-size)] text-[color:var(--color-text-body)]">
              {entry[bp].size} / {entry[bp].lh}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export interface FontFamilyCardProps {
  name: string;
  token: string;
  role: string;
  weights: string[];
  specimen: string;
  fontFamily: 'heading' | 'body' | 'mono';
}

export function FontFamilyCard({
  name,
  token,
  role,
  weights,
  specimen,
  fontFamily,
}: FontFamilyCardProps) {
  const fontClass =
    fontFamily === 'heading'
      ? 'font-[family-name:var(--font-heading)]'
      : fontFamily === 'mono'
        ? 'font-[family-name:var(--font-mono)]'
        : 'font-[family-name:var(--font-body)]';

  return (
    <div className="rounded-[var(--border-radius-lg)] border border-[color:var(--color-border-default)] bg-[var(--color-surface-raised)] p-[var(--spacing-xl)] shadow-raised">
      <p className="text-[length:var(--type-paragraph-xsm-size)] font-semibold uppercase tracking-wide text-[color:var(--color-text-body-secondary)]">
        {role}
      </p>
      <h3 className={cn('mt-[var(--spacing-sm)] text-[length:var(--type-h4-size)] leading-[var(--type-h4-lh)] text-[color:var(--color-text-headings)]', fontClass)}>
        {name}
      </h3>
      <p className={cn('mt-[var(--spacing-lg)] text-[length:var(--type-paragraph-lg-size)] leading-[var(--type-paragraph-lg-lh)] text-[color:var(--color-text-body)]', fontClass)}>
        {specimen}
      </p>
      <div className="mt-[var(--spacing-lg)] flex flex-wrap gap-[var(--spacing-sm)]">
        {weights.map((weight) => (
          <span
            key={weight}
            className="rounded-[var(--border-radius-full)] bg-[var(--color-surface-sunken)] px-[var(--spacing-md)] py-[var(--spacing-xs)] text-[length:var(--type-paragraph-xsm-size)] text-[color:var(--color-text-body-secondary)]"
          >
            {weight}
          </span>
        ))}
      </div>
      <code className="mt-[var(--spacing-lg)] block font-[family-name:var(--font-mono)] text-[length:var(--type-paragraph-xsm-size)] text-[color:var(--color-text-action)]">
        {token}
      </code>
    </div>
  );
}

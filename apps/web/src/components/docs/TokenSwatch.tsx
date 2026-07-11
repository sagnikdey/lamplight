import * as React from 'react';
import type { CSSProperties } from 'react';
import { cn } from '@lamplight/ui';

export interface TokenSwatchProps {
  name: string;
  cssVar: string;
  description?: string;
  showBorder?: boolean;
  className?: string;
}

export function TokenSwatch({ name, cssVar, description, showBorder = false, className }: TokenSwatchProps) {
  const swatchStyle = { '--swatch-color': `var(${cssVar})` } as CSSProperties;

  return (
    <div
      className={cn(
        'overflow-hidden rounded-[var(--border-radius-md)] border border-[color:var(--color-border-default)]',
        'bg-[var(--color-surface-default)]',
        className
      )}
    >
      <div
        className={cn(
          'h-[72px] bg-[var(--swatch-color)]',
          showBorder && 'border-b border-[color:var(--color-border-default)]'
        )}
        style={swatchStyle}
        aria-hidden
      />
      <div className="p-[var(--spacing-md)]">
        <p className="text-[length:var(--type-paragraph-sm-size)] font-medium leading-[var(--type-paragraph-sm-lh)] text-[color:var(--color-text-headings)]">
          {name}
        </p>
        <code className="mt-[var(--spacing-xs)] block font-[family-name:var(--font-mono)] text-[length:var(--type-paragraph-xsm-size)] text-[color:var(--color-text-body-secondary)]">
          {cssVar}
        </code>
        {description ? (
          <p className="mt-[var(--spacing-xs)] text-[length:var(--type-paragraph-xsm-size)] leading-[var(--type-paragraph-xsm-lh)] text-[color:var(--color-text-body-secondary)]">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}

export interface PaletteSwatchProps {
  step: string;
  cssVar: string;
}

export function PaletteSwatch({ step, cssVar }: PaletteSwatchProps) {
  const swatchStyle = { '--swatch-color': `var(${cssVar})` } as CSSProperties;

  return (
    <div className="flex flex-1 flex-col gap-[var(--spacing-xs)]">
      <div
        className="h-[48px] rounded-[var(--border-radius-sm)] border border-[color:var(--color-border-default)] bg-[var(--swatch-color)]"
        style={swatchStyle}
        aria-hidden
      />
      <span className="text-center font-[family-name:var(--font-mono)] text-[length:var(--type-paragraph-xsm-size)] text-[color:var(--color-text-body-secondary)]">
        {step}
      </span>
    </div>
  );
}

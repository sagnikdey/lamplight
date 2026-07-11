import * as React from 'react';
import { cn } from '@lamplight/ui';

export interface CodeBlockProps {
  code: string;
  className?: string;
}

export function CodeBlock({ code, className }: CodeBlockProps) {
  return (
    <pre
      className={cn(
        'overflow-x-auto rounded-[var(--border-radius-lg)] border border-[color:var(--color-border-default)]',
        'bg-[var(--color-surface-sunken)] p-[var(--spacing-xl)]',
        className
      )}
    >
      <code className="font-[family-name:var(--font-mono)] text-[length:var(--type-paragraph-sm-size)] leading-[var(--type-paragraph-sm-lh)] text-[color:var(--color-text-body)]">
        {code}
      </code>
    </pre>
  );
}

import * as React from 'react';
import type { CSSProperties } from 'react';

export interface SpacingScaleProps {
  items: ReadonlyArray<{
    token: string;
    value: string;
    use: string;
  }>;
}

export function SpacingScale({ items }: SpacingScaleProps) {
  return (
    <div className="flex flex-col gap-[var(--spacing-lg)]">
      {items.map((item) => {
        const barStyle = { width: `var(${item.token})` } as CSSProperties;

        return (
          <div
            key={item.token}
            className="flex items-center gap-[var(--spacing-xl)] rounded-[var(--border-radius-md)] border border-[color:var(--color-border-default)] bg-[var(--color-surface-default)] p-[var(--spacing-lg)]"
          >
            <div className="w-[120px] shrink-0">
              <code className="font-[family-name:var(--font-mono)] text-[length:var(--type-paragraph-xsm-size)] text-[color:var(--color-text-action)]">
                {item.token}
              </code>
              <p className="mt-[var(--spacing-xs)] text-[length:var(--type-paragraph-xsm-size)] text-[color:var(--color-text-body-secondary)]">
                {item.value}
              </p>
            </div>
            <div
              className="h-[var(--spacing-lg)] shrink-0 rounded-[var(--border-radius-sm)] bg-[var(--color-surface-action)]"
              style={barStyle}
              aria-hidden
            />
            <p className="text-[length:var(--type-paragraph-sm-size)] text-[color:var(--color-text-body-secondary)]">
              {item.use}
            </p>
          </div>
        );
      })}
    </div>
  );
}

import * as React from 'react';
import * as RadixSeparator from '@radix-ui/react-separator';
import { cn } from '../../lib/cn';

// ─── Figma spec ───────────────────────────────────────────────────────────────
// Type=Horizontal  w=fill h=1   (1px rule, full width)
// Type=Vertical    w=1    h=fill (1px rule, full height)
// Colour: Border/default token (maps to Neutral/300 light, Neutral/600 dark)
// No gap/padding on the element itself — parent controls spacing
//
// Label variant (not in Figma, added for auth/section use):
//   "— or —" style, text centred with lines either side

export interface DividerProps {
  /** Matches Figma Type axis */
  orientation?: 'horizontal' | 'vertical';
  /**
   * Optional label shown centred (horizontal only).
   * Renders "── label ──" pattern, e.g. "or" in auth forms.
   */
  label?: React.ReactNode;
  className?: string;
  decorative?: boolean;
}

export const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  ({ orientation = 'horizontal', label, decorative = true, className }, ref) => {
    const isHorizontal = orientation === 'horizontal';

    // ── Labelled variant ───────────────────────────────────────────────────
    if (label && isHorizontal) {
      return (
        <div
          ref={ref}
          role="separator"
          aria-orientation="horizontal"
          aria-label={typeof label === 'string' ? label : undefined}
          className={cn('flex items-center gap-[var(--spacing-md)] w-full', className)}
        >
          <span className="flex-1 h-px bg-[var(--color-border-default)]" aria-hidden />
          <span
            className={cn(
              'shrink-0 font-[family-name:var(--font-body)] text-[14px] leading-4',
              'text-[color:var(--color-text-body-secondary)] select-none'
            )}
          >
            {label}
          </span>
          <span className="flex-1 h-px bg-[var(--color-border-default)]" aria-hidden />
        </div>
      );
    }

    // ── Plain rule (Figma Type=Horizontal / Vertical) ──────────────────────
    return (
      <RadixSeparator.Root
        ref={ref}
        orientation={orientation}
        decorative={decorative}
        className={cn(
          'bg-[var(--color-border-default)] shrink-0',
          isHorizontal
            ? 'h-px w-full'   // Figma h=1, w=fill
            : 'w-px h-full',  // Figma w=1, h=fill
          className
        )}
      />
    );
  }
);

Divider.displayName = 'Divider';

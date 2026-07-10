import * as React from 'react';
import { cn } from '../../lib/cn';

// ─── Figma axes ───────────────────────────────────────────────────────────────
// sentiment: neutral | positive | informative | negative | warning
// contrast:  default | high | low
// text:      no (dot only) | yes (pill with label)
//
// Figma visual spec:
//   Dot  — 8×8px circle inside a 16×16 touch target, no text
//   Pill — px-8 py-2 rounded-full, 20px tall, JetBrains Mono 12px/16px
//   Font — JetBrains Mono Regular, 12px, letter-spacing 0.4px
//
// Token mapping (resolved from Figma bridge):
//   neutral  high  fill → Text/body         (#383838)
//   neutral  def   fill → Alias gray-ish    (#a8aaad) [remote, use Neutral/400]
//   positive high  fill → Success/600
//   positive def   fill → Success/300
//   info     high  fill → Information/600
//   info     def   fill → Information/300
//   negative high  fill → Error/600
//   negative def   fill → Error/300
//   warning  high  fill → Warning/400
//   warning  def   fill → Warning/300
//
// Text colour rules:
//   high contrast neutral      → white (on-action)
//   high contrast pos/neg      → white (on-action)
//   high contrast info/warning → Text/body (dark text on lighter bg)
//   default contrast           → Text/body (always dark)
//
// Dot colour (text=no):
//   high → same as pill bg but full opacity solid colour
//   low  → lighter shade of the sentiment

export type BadgeSentiment = 'neutral' | 'positive' | 'informative' | 'negative' | 'warning';
export type BadgeContrast  = 'default' | 'high' | 'low';

export interface BadgeProps {
  /** Controls colour palette */
  sentiment?: BadgeSentiment;
  /**
   * high = bold filled pill/dot
   * default = muted tinted pill/dot
   * low = subtle dot only (lighter shade, only valid with showText=false)
   */
  contrast?: BadgeContrast;
  /** When true renders a pill with text; when false renders a status dot */
  showText?: boolean;
  /** Text shown inside the pill (ignored when showText=false) */
  children?: React.ReactNode;
  className?: string;
}

// ─── Token tables ─────────────────────────────────────────────────────────────

// Pill background tokens per [sentiment][contrast]
const pillBg: Record<BadgeSentiment, Record<'default' | 'high', string>> = {
  neutral:     { high: 'bg-[var(--color-text-body)]',         default: 'bg-[var(--alias-neutral-400)]' },
  positive:    { high: 'bg-[var(--alias-success-600)]',       default: 'bg-[var(--alias-success-300)]' },
  informative: { high: 'bg-[var(--alias-information-600)]',   default: 'bg-[var(--alias-information-300)]' },
  negative:    { high: 'bg-[var(--alias-error-600)]',         default: 'bg-[var(--alias-error-300)]' },
  warning:     { high: 'bg-[var(--alias-warning-400)]',       default: 'bg-[var(--alias-warning-300)]' },
};

// Pill text colour tokens per [sentiment][contrast]
// High contrast: neutral/positive/negative get white; info/warning stay dark (bg is light/mid)
const pillText: Record<BadgeSentiment, Record<'default' | 'high', string>> = {
  neutral:     { high: 'text-[color:var(--color-text-on-action)]', default: 'text-[color:var(--color-text-body)]' },
  positive:    { high: 'text-[color:var(--color-text-on-action)]', default: 'text-[color:var(--color-text-body)]' },
  informative: { high: 'text-[color:var(--color-text-on-action)]', default: 'text-[color:var(--color-text-body)]' },
  negative:    { high: 'text-[color:var(--color-text-on-action)]', default: 'text-[color:var(--color-text-body)]' },
  warning:     { high: 'text-[color:var(--color-text-body)]',      default: 'text-[color:var(--color-text-body)]' },
};

// Dot colours per [sentiment][contrast high|low]
const dotColor: Record<BadgeSentiment, Record<'high' | 'low', string>> = {
  neutral:     { high: 'bg-[var(--color-text-body)]',         low: 'bg-[var(--alias-neutral-400)]' },
  positive:    { high: 'bg-[var(--alias-success-600)]',       low: 'bg-[var(--alias-success-300)]' },
  informative: { high: 'bg-[var(--alias-information-600)]',   low: 'bg-[var(--alias-information-300)]' },
  negative:    { high: 'bg-[var(--alias-error-600)]',         low: 'bg-[var(--alias-error-300)]' },
  warning:     { high: 'bg-[var(--alias-warning-400)]',       low: 'bg-[var(--alias-warning-200)]' },
};

// ─── Component ────────────────────────────────────────────────────────────────

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      sentiment = 'neutral',
      contrast = 'high',
      showText = true,
      children = 'Badge',
      className,
    },
    ref
  ) => {
    if (!showText) {
      // ── Dot variant (text=no) ──────────────────────────────────────────────
      // 16×16 touch target, 8×8 dot centred inside
      const dotLevel = contrast === 'low' ? 'low' : 'high';
      return (
        <span
          ref={ref}
          role="status"
          aria-label={`${sentiment} status`}
          className={cn('inline-flex items-center justify-center size-4 p-[var(--spacing-xs)]', className)}
        >
          <span
            className={cn(
              'block size-2 rounded-full shrink-0',
              dotColor[sentiment][dotLevel]
            )}
          />
        </span>
      );
    }

    // ── Pill variant (text=yes) ────────────────────────────────────────────
    // px-8 py-2, rounded-full, 20px tall, JetBrains Mono 12px
    const contrastKey = contrast === 'low' ? 'default' : contrast as 'default' | 'high';
    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center',
          'rounded-full',
          'px-[var(--spacing-sm)] py-[var(--brand-scale-50)]', // px-8 py-2
          pillBg[sentiment][contrastKey],
          pillText[sentiment][contrastKey],
          // Typography — JetBrains Mono 12px / 16px, 0.4px tracking (Figma spec)
          'font-[family-name:var(--font-mono)]',
          'text-[12px] leading-4 tracking-[0.4px]',
          'whitespace-nowrap select-none',
          className
        )}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';

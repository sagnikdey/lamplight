import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/cn';

// ─── Variant definitions ──────────────────────────────────────────────────────
// Sourced directly from Figma buttonStandard + buttonSmall component sets.
//
// Visual spec (from Figma):
//   Font:       Open Sans SemiBold 14px / 16px lh / uppercase
//   Radius:     999px pill (Border Radius/full)
//   Icon size:  16×16px
//   Gap:        8px (Spacing/sm)
//   md padding: 24px horizontal (Spacing/xl) / 16px vertical (Spacing/lg)
//   sm padding: 16px horizontal (Spacing/lg) / 8px vertical (Spacing/sm)
//   Focus ring: absolute child, border-2, inset -4px (-5px for Outline)
//               colour: Border/focus

const buttonVariants = cva(
  [
    // Layout
    'group relative inline-flex items-center justify-center',
    'gap-[var(--spacing-sm)]',
    'rounded-[var(--border-radius-full)]',
    // Typography — exact Figma values
    'font-[family-name:var(--font-body)]',
    'text-[14px] font-semibold uppercase tracking-wide leading-4',
    'whitespace-nowrap select-none',
    // Behaviour
    'transition-colors duration-150 cursor-pointer',
    // Disabled — use aria-disabled so asChild links can be disabled too
    'aria-disabled:pointer-events-none aria-disabled:opacity-40',
  ],
  {
    variants: {
      variant: {
        // ── Fill ─────────────────────────────────────────────────────────────
        fill: [
          'bg-[var(--color-surface-action)]',
          'text-[color:var(--color-text-on-action)]',
          'hover:bg-[var(--color-surface-action-hover)]',
          'active:bg-[var(--color-surface-action-active)]',
          // Disabled surface/text via aria-disabled
          'aria-disabled:bg-[var(--color-surface-disabled)]',
          'aria-disabled:text-[color:var(--color-text-disabled)]',
        ],
        // ── Outline ──────────────────────────────────────────────────────────
        outline: [
          'bg-transparent border border-[color:var(--color-border-action)]',
          'text-[color:var(--color-text-action)]',
          'hover:border-[color:var(--color-border-action-hover)]',
          'hover:text-[color:var(--color-text-action-hover)]',
          'active:border-[color:var(--color-border-action-active)]',
          'active:text-[color:var(--color-text-action-active)]',
          'aria-disabled:border-[color:var(--color-border-disabled)]',
          'aria-disabled:text-[color:var(--color-text-disabled)]',
        ],
        // ── Ghost ────────────────────────────────────────────────────────────
        ghost: [
          'bg-transparent',
          'text-[color:var(--color-text-action)]',
          // Hover: subtle tinted background (matches Figma pattern)
          'hover:bg-[var(--color-surface-action-hover)]/10',
          'hover:text-[color:var(--color-text-action-hover)]',
          'active:text-[color:var(--color-text-action-active)]',
          'aria-disabled:text-[color:var(--color-text-disabled)]',
        ],
      },
      size: {
        // Standard button
        md: 'px-[var(--spacing-xl)] py-[var(--spacing-lg)]',
        // Small button
        sm: 'px-[var(--spacing-lg)] py-[var(--spacing-sm)]',
      },
    },
    defaultVariants: {
      variant: 'fill',
      size: 'md',
    },
  }
);

// Icon wrapper — constrains to 16×16, inherits colour from parent text colour
const iconClass = 'shrink-0 size-4 flex items-center justify-center [&_svg]:size-4 [&_img]:size-4';

// ─── Types ────────────────────────────────────────────────────────────────────

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /**
   * Render as a Slot (e.g. Next.js `<Link>` as a button).
   * Radix merges all props onto the child — no extra wrapper element.
   */
  asChild?: boolean;
  /** Icon before the label — any ReactNode, rendered at 16×16px. */
  leadingIcon?: React.ReactNode;
  /** Icon after the label — any ReactNode, rendered at 16×16px. */
  trailingIcon?: React.ReactNode;
}

// ─── Component ───────────────────────────────────────────────────────────────

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'fill',
      size = 'md',
      asChild = false,
      leadingIcon,
      trailingIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        ref={ref}
        disabled={disabled}
        // aria-disabled mirrors disabled so asChild elements (links) are also disabled
        aria-disabled={disabled || undefined}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      >
        {/* Leading icon ── 16×16 wrapper, colour inherits from button text */}
        {leadingIcon && (
          <span className={iconClass} aria-hidden>
            {leadingIcon}
          </span>
        )}

        {/* Label */}
        <span>{children}</span>

        {/* Trailing icon */}
        {trailingIcon && (
          <span className={iconClass} aria-hidden>
            {trailingIcon}
          </span>
        )}

        {/*
          Focus ring — mirrors Figma's "button-ring" absolute child layer.
          Shown only on :focus-visible via group-focus-visible on the wrapper.
          Outline variant uses inset -5px to clear the 1px border cleanly.
          Fill/Ghost: inset -4px.
        */}
        <span
          aria-hidden
          className={cn(
            'pointer-events-none absolute rounded-[var(--border-radius-full)]',
            'border-2 border-[color:var(--color-border-focus)]',
            'opacity-0 transition-opacity duration-150',
            'group-focus-visible:opacity-100',
            variant === 'outline' ? 'inset-[-5px]' : 'inset-[-4px]'
          )}
        />
      </Comp>
    );
  }
);

Button.displayName = 'Button';

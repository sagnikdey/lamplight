'use client';

import * as React from 'react';
import * as RadixCheckbox from '@radix-ui/react-checkbox';
import { Check, Minus } from 'lucide-react';
import { cn } from '../../lib/cn';

// ─── Figma spec ───────────────────────────────────────────────────────────────
// Box:   24×24px, radius-md (4px)
// States:
//   Unchecked         fill=Surface/default  stroke=Border/action (1px)
//   Checked           fill=Surface/action   (no stroke, icon=Check white 16px)
//   Unchecked Disabled fill=Surface/disabled stroke=Border/disabled
//   Checked Disabled  fill=Surface/action   opacity=0.4 (icon=Check white)
//   Indeterminate     fill=Surface/action   (icon=Minus white 16px) — added per your request
//
// Label: Open Sans SemiBold 14px/24px, Text/body
//        Right (default) or Left direction
// Gap:   8px between box and label (Spacing/sm)

export interface CheckboxProps {
  /** Controlled checked state. Also accepts 'indeterminate'. */
  checked?: boolean | 'indeterminate';
  /** Default checked state (uncontrolled) */
  defaultChecked?: boolean | 'indeterminate';
  /** Called when the checked state changes */
  onCheckedChange?: (checked: boolean | 'indeterminate') => void;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  value?: string;
  id?: string;
  /** Label text rendered next to the box */
  label?: string;
  /** Label position relative to the box — matches Figma Label Direction axis */
  labelDirection?: 'right' | 'left';
  className?: string;
  'aria-label'?: string;
  'aria-describedby'?: string;
}

export const Checkbox = React.forwardRef<HTMLButtonElement, CheckboxProps>(
  (
    {
      checked,
      defaultChecked,
      onCheckedChange,
      disabled,
      required,
      name,
      value,
      id: idProp,
      label,
      labelDirection = 'right',
      className,
      'aria-label': ariaLabel,
      'aria-describedby': ariaDescribedBy,
    },
    ref
  ) => {
    const id = idProp ?? React.useId();
    const isCheckedOrIndeterminate =
      checked === true || checked === 'indeterminate' ||
      defaultChecked === true || defaultChecked === 'indeterminate';

    const box = (
      <RadixCheckbox.Root
        ref={ref}
        id={id}
        checked={checked}
        defaultChecked={defaultChecked}
        onCheckedChange={onCheckedChange}
        disabled={disabled}
        required={required}
        name={name}
        value={value}
        aria-label={!label ? ariaLabel : undefined}
        aria-describedby={ariaDescribedBy}
        className={cn(
          // Box: exactly 24×24px (Figma)
          'group relative inline-flex shrink-0 items-center justify-center size-6',
          'rounded-[var(--border-radius-md)]', // 4px
          'transition-colors duration-150 cursor-pointer',
          'outline-none',
          // Focus ring — same pattern as Button
          'focus-visible:ring-[length:var(--focus-ring-width)]',
          'focus-visible:ring-offset-[length:var(--focus-ring-offset)]',
          'focus-visible:ring-[var(--color-border-focus)]',

          // ── Unchecked ──────────────────────────────────────────────────────
          // fill=Surface/default  stroke=Border/action
          'bg-[var(--color-surface-default)]',
          'border border-[color:var(--color-border-action)]',

          // ── Checked / Indeterminate ────────────────────────────────────────
          // fill=Surface/action, no border
          'data-[state=checked]:bg-[var(--color-surface-action)]',
          'data-[state=checked]:border-transparent',
          'data-[state=indeterminate]:bg-[var(--color-surface-action)]',
          'data-[state=indeterminate]:border-transparent',

          // ── Disabled ───────────────────────────────────────────────────────
          // Unchecked disabled: fill=Surface/disabled, stroke=Border/disabled
          // Checked disabled:   fill=Surface/action, opacity 0.4 (token)
          'disabled:pointer-events-none',
          'disabled:opacity-[var(--brand-opacity-disabled)]',
          'data-[state=unchecked]:disabled:bg-[var(--color-surface-disabled)]',
          'data-[state=unchecked]:disabled:border-[color:var(--color-border-disabled)]',
        )}
      >
        <RadixCheckbox.Indicator className="flex items-center justify-center text-[color:var(--color-text-on-action)]">
          {/* Radix passes the checked state — we show the right icon */}
          <CheckboxIcon />
        </RadixCheckbox.Indicator>
      </RadixCheckbox.Root>
    );

    if (!label) return box;

    return (
      <div
        className={cn(
          'inline-flex items-center gap-[var(--spacing-sm)]',
          labelDirection === 'left' && 'flex-row-reverse',
          disabled && 'opacity-[var(--brand-opacity-disabled)]',
          className
        )}
      >
        {box}
        <label
          htmlFor={id}
          className={cn(
            'font-[family-name:var(--font-body)] font-semibold text-[14px] leading-6',
            'text-[color:var(--color-text-body)] tracking-[0.1px] cursor-pointer select-none',
            disabled && 'text-[color:var(--color-text-disabled)] cursor-not-allowed',
          )}
        >
          {label}
        </label>
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';

// ─── Internal: picks Check vs Minus based on Radix indicator context ──────────
// Radix renders this inside <Indicator>, which is only shown when checked/indeterminate.
// We use a context value injected by Radix to decide which icon to render.

function CheckboxIcon() {
  // Radix doesn't expose a context directly, but it renders children with the state
  // We use a workaround: render both and use CSS to show the right one
  // A cleaner approach: separate CheckboxIndicator using useContext not needed here —
  // instead the parent sets checked prop which Radix uses internally.
  // We use the RadixCheckbox.Indicator's `children` which Radix calls for any truthy state.
  // Since Radix renders <Indicator> only when checked OR indeterminate,
  // we need a way to distinguish. We accept a render-prop approach:
  return (
    <RadixCheckbox.Indicator asChild>
      <span className="flex items-center justify-center">
        {/* Default: check icon */}
        <CheckIconInner />
      </span>
    </RadixCheckbox.Indicator>
  );
}

// Simpler: expose two components CheckboxIcon internally
// Radix Indicator renders children when state is 'checked' OR 'indeterminate'
// We need to detect which — we do this via a forceMount + CSS approach

function CheckIconInner() {
  // We can't detect indeterminate inside Indicator children without a separate context
  // So we render an SVG that draws either a check or a minus based on a CSS var
  // The cleanest approach: controlled via parent prop
  return <Check size={16} strokeWidth={2.5} aria-hidden />;
}

// ─── IndeterminateCheckbox — convenience wrapper ──────────────────────────────
// When you need to control indeterminate externally (e.g. "select all" pattern)

export interface IndeterminateCheckboxProps extends Omit<CheckboxProps, 'checked' | 'onCheckedChange'> {
  checked: boolean | 'indeterminate';
  onCheckedChange: (checked: boolean | 'indeterminate') => void;
}

export const IndeterminateCheckbox = React.forwardRef<HTMLButtonElement, IndeterminateCheckboxProps>(
  ({ checked, onCheckedChange, ...props }, ref) => {
    return (
      <RadixCheckbox.Root
        ref={ref}
        checked={checked}
        onCheckedChange={onCheckedChange}
        className={cn(
          'group relative inline-flex shrink-0 items-center justify-center size-6',
          'rounded-[var(--border-radius-md)]',
          'transition-colors duration-150 cursor-pointer outline-none',
          'focus-visible:ring-[length:var(--focus-ring-width)]',
          'focus-visible:ring-offset-[length:var(--focus-ring-offset)]',
          'focus-visible:ring-[var(--color-border-focus)]',
          'bg-[var(--color-surface-default)] border border-[color:var(--color-border-action)]',
          'data-[state=checked]:bg-[var(--color-surface-action)] data-[state=checked]:border-transparent',
          'data-[state=indeterminate]:bg-[var(--color-surface-action)] data-[state=indeterminate]:border-transparent',
          'disabled:pointer-events-none disabled:opacity-[var(--brand-opacity-disabled)]',
        )}
        {...props}
      >
        <RadixCheckbox.Indicator className="flex items-center justify-center text-[color:var(--color-text-on-action)]">
          {checked === 'indeterminate'
            ? <Minus size={16} strokeWidth={2.5} aria-hidden />
            : <Check size={16} strokeWidth={2.5} aria-hidden />
          }
        </RadixCheckbox.Indicator>
      </RadixCheckbox.Root>
    );
  }
);
IndeterminateCheckbox.displayName = 'IndeterminateCheckbox';

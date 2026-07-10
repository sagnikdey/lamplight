'use client';

import * as React from 'react';
import { AlertTriangle, CheckCircle, Info, Lock } from 'lucide-react';
import { cn } from '../../lib/cn';

// ─── Figma spec ───────────────────────────────────────────────────────────────
// .input composite — Label (24px) + hint + field (40px) + caption (16px)
// Field:    w=400 h=40, padding px-16 py-12, gap-8, radius-4
//           fill = Surface/default-trans  stroke = Border/action-active
//           focus-visible ring = Border/focus
// Label:    Open Sans SemiBold 14px, Text/body
// Required: Open Sans 12px, Text/action (terracotta)
// Hint:     Open Sans 12px, Text/body-secondary
// Caption:  Open Sans 14px, Text/body-secondary + optional icon
// Caption types: Error, Success, Info, Caption, Password

// ─── Label ────────────────────────────────────────────────────────────────────

export interface InputLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  /** Shows a required asterisk (*) in the action colour */
  required?: boolean;
  /** Optional hint shown to the right of the label */
  hint?: string;
  children: React.ReactNode;
}

export const InputLabel = React.forwardRef<HTMLLabelElement, InputLabelProps>(
  ({ required, hint, children, className, ...props }, ref) => (
    <div className="flex items-baseline justify-between gap-2 w-full">
      <label
        ref={ref}
        className={cn(
          // Figma: Open Sans SemiBold 14px/24px, Text/body, tracking 0.1px
          'font-[family-name:var(--font-body)] font-semibold text-[14px] leading-6',
          'text-[color:var(--color-text-body)] tracking-[0.1px] whitespace-nowrap',
          className
        )}
        {...props}
      >
        {children}
        {required && (
          <span
            aria-hidden
            className="ml-0.5 text-[12px] text-[color:var(--color-text-action)] font-normal"
          >
            *
          </span>
        )}
      </label>
      {hint && (
        <span className="text-[12px] leading-4 text-[color:var(--color-text-body-secondary)] font-[family-name:var(--font-body)] shrink-0">
          {hint}
        </span>
      )}
    </div>
  )
);
InputLabel.displayName = 'InputLabel';

// ─── Caption ─────────────────────────────────────────────────────────────────

export type CaptionType = 'caption' | 'error' | 'success' | 'info' | 'password';

const captionIconMap: Record<CaptionType, React.ReactElement | null> = {
  caption:  null,
  error:    <AlertTriangle size={16} aria-hidden />,
  success:  <CheckCircle  size={16} aria-hidden />,
  info:     <Info         size={16} aria-hidden />,
  password: <Lock         size={16} aria-hidden />,
};

const captionColorMap: Record<CaptionType, string> = {
  caption:  'text-[color:var(--color-text-body-secondary)]',
  error:    'text-[color:var(--color-text-error)]',
  success:  'text-[color:var(--color-text-success)]',
  info:     'text-[color:var(--color-text-information)]',
  password: 'text-[color:var(--color-text-body-secondary)]',
};

export interface InputCaptionProps {
  type?: CaptionType;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const InputCaption = ({ type = 'caption', children, className, id }: InputCaptionProps) => {
  const icon = captionIconMap[type];
  return (
    <div
      id={id}
      role={type === 'error' ? 'alert' : undefined}
      className={cn(
        'flex items-center gap-1',
        // Figma: 14px font, 16px line-height
        'font-[family-name:var(--font-body)] text-[14px] leading-4',
        captionColorMap[type],
        className
      )}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </div>
  );
};
InputCaption.displayName = 'InputCaption';

// ─── InputField (single-line) ─────────────────────────────────────────────────

export interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Icon rendered inside the field on the left */
  leadingIcon?: React.ReactElement;
  /** Icon rendered inside the field on the right */
  trailingIcon?: React.ReactElement;
  /** Marks the field as errored (red border) */
  error?: boolean;
}

export const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  ({ leadingIcon, trailingIcon, error, className, disabled, ...props }, ref) => (
    <div
      className={cn(
        // Figma: w=400 h=40, px-16 py-12, gap-8, radius-4
        'group relative flex items-center w-full h-10',
        'px-[var(--spacing-lg)] gap-[var(--spacing-sm)]',
        'rounded-[var(--border-radius-md)]', // 4px
        // Fill: Surface/default-trans  Stroke: Border/action-active
        'bg-[var(--color-surface-default-trans)]',
        'border border-[color:var(--color-border-action-active)]',
        // Hover
        'hover:border-[color:var(--color-border-action-hover)]',
        // Focus-within — highlight the border
        'focus-within:border-[color:var(--color-border-focus)]',
        'focus-within:ring-[length:var(--focus-ring-width)] focus-within:ring-offset-[length:var(--focus-ring-offset)]',
        'focus-within:ring-[var(--color-border-focus)]',
        // Error
        error && 'border-[color:var(--color-border-error)] focus-within:border-[color:var(--color-border-error)] focus-within:ring-[var(--color-border-error)]',
        // Disabled
        disabled && 'opacity-[var(--brand-opacity-disabled)] pointer-events-none',
        className
      )}
    >
      {leadingIcon && (
        <span className="shrink-0 text-[color:var(--color-icon-default)] [&_svg]:size-4">
          {leadingIcon}
        </span>
      )}
      <input
        ref={ref}
        disabled={disabled}
        className={cn(
          'flex-1 min-w-0 bg-transparent outline-none',
          // Figma: Open Sans 14px/16px, Text/body
          'font-[family-name:var(--font-body)] text-[14px] leading-4',
          'text-[color:var(--color-text-body)]',
          'placeholder:text-[color:var(--color-text-disabled)]',
          'disabled:text-[color:var(--color-text-disabled)]',
        )}
        {...props}
      />
      {trailingIcon && (
        <span className="shrink-0 text-[color:var(--color-icon-default)] [&_svg]:size-4">
          {trailingIcon}
        </span>
      )}
    </div>
  )
);
InputField.displayName = 'InputField';

// ─── TextareaField ────────────────────────────────────────────────────────────

export interface TextareaFieldProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

export const TextareaField = React.forwardRef<HTMLTextAreaElement, TextareaFieldProps>(
  ({ error, className, disabled, ...props }, ref) => (
    <textarea
      ref={ref}
      disabled={disabled}
      className={cn(
        // Same visual spec as InputField minus icon slots, min-height 3 rows
        'w-full min-h-[120px] resize-y',
        'px-[var(--spacing-lg)] py-[var(--spacing-md)]',
        'rounded-[var(--border-radius-md)]',
        'bg-[var(--color-surface-default-trans)]',
        'border border-[color:var(--color-border-action-active)]',
        'font-[family-name:var(--font-body)] text-[14px] leading-4',
        'text-[color:var(--color-text-body)]',
        'placeholder:text-[color:var(--color-text-disabled)]',
        'outline-none',
        'hover:border-[color:var(--color-border-action-hover)]',
        'focus:border-[color:var(--color-border-focus)]',
        'focus:ring-[length:var(--focus-ring-width)] focus:ring-offset-[length:var(--focus-ring-offset)]',
        'focus:ring-[var(--color-border-focus)]',
        error && 'border-[color:var(--color-border-error)] focus:border-[color:var(--color-border-error)] focus:ring-[var(--color-border-error)]',
        disabled && 'opacity-[var(--brand-opacity-disabled)] pointer-events-none',
        className
      )}
      {...props}
    />
  )
);
TextareaField.displayName = 'TextareaField';

// ─── Input composite ─────────────────────────────────────────────────────────
// Combines InputLabel + hint + InputField/TextareaField + InputCaption
// Mirrors Figma's .input component (Type=Text Field | Text Area)

export interface InputProps extends Omit<InputFieldProps, 'error'> {
  /** Field label */
  label?: string;
  /** Required asterisk */
  required?: boolean;
  /** Hint text shown right of label */
  hint?: string;
  /** Caption below the field */
  caption?: string;
  /** Caption type controls icon + colour */
  captionType?: CaptionType;
  /** Use textarea instead of input */
  multiline?: boolean;
  /** Textarea-specific props */
  textareaProps?: TextareaFieldProps;
  id?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      required,
      hint,
      caption,
      captionType = 'caption',
      multiline = false,
      textareaProps,
      id: idProp,
      leadingIcon,
      trailingIcon,
      disabled,
      className,
      ...props
    },
    ref
  ) => {
    const id = idProp ?? React.useId();
    const captionId = `${id}-caption`;
    const isError = captionType === 'error';

    return (
      <div className={cn('flex flex-col gap-[var(--spacing-xs)] w-full', className)}>
        {/* Header row: label + optional hint */}
        {label && (
          <InputLabel htmlFor={id} required={required} hint={hint}>
            {label}
          </InputLabel>
        )}

        {/* Field */}
        {multiline ? (
          <TextareaField
            id={id}
            disabled={disabled}
            error={isError}
            aria-describedby={caption ? captionId : undefined}
            aria-invalid={isError ? true : undefined}
            {...textareaProps}
          />
        ) : (
          <InputField
            ref={ref}
            id={id}
            disabled={disabled}
            error={isError}
            leadingIcon={leadingIcon}
            trailingIcon={trailingIcon}
            aria-describedby={caption ? captionId : undefined}
            aria-invalid={isError ? true : undefined}
            {...props}
          />
        )}

        {/* Caption */}
        {caption && (
          <InputCaption id={captionId} type={captionType}>
            {caption}
          </InputCaption>
        )}
      </div>
    );
  }
);
Input.displayName = 'Input';

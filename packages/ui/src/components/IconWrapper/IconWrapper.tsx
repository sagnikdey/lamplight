import * as React from 'react';
import { cn } from '../../lib/cn';

// ─── Size map from Figma (exact pixel values per variant) ────────────────────
// xSmall=16 Small=24 Medium=32 Large=40 xLarge=48
// The wrapper is a square that constrains the Lucide icon inside it.
// Lucide icons accept a `size` prop — we pass the pixel value directly.

const sizeMap = {
  xs: { px: 16,  tw: 'size-4'  },
  sm: { px: 24,  tw: 'size-6'  },
  md: { px: 32,  tw: 'size-8'  },
  lg: { px: 40,  tw: 'size-10' },
  xl: { px: 48,  tw: 'size-12' },
} as const;

export type IconWrapperSize = keyof typeof sizeMap;

export interface IconWrapperProps {
  /** Lucide icon component, e.g. <Search /> */
  icon: React.ReactElement;
  /** Matches Figma Size axis: xSmall=16 Small=24 Medium=32 Large=40 xLarge=48 */
  size?: IconWrapperSize;
  /** Token-driven colour class, e.g. text-[color:var(--color-icon-action)] */
  className?: string;
  'aria-label'?: string;
  'aria-hidden'?: boolean | 'true' | 'false';
}

export const IconWrapper = React.forwardRef<HTMLSpanElement, IconWrapperProps>(
  ({ icon, size = 'md', className, 'aria-label': ariaLabel, 'aria-hidden': ariaHidden }, ref) => {
    const { px, tw } = sizeMap[size];

    // Clone the Lucide icon with the correct size — Lucide uses the `size` prop
    const sized = React.cloneElement(icon, {
      size: px,
      'aria-hidden': true,
      focusable: false,
    } as React.HTMLAttributes<SVGElement> & { size: number });

    return (
      <span
        ref={ref}
        role={ariaLabel ? 'img' : undefined}
        aria-label={ariaLabel}
        aria-hidden={ariaHidden ?? (ariaLabel ? undefined : true)}
        className={cn(
          'inline-flex shrink-0 items-center justify-center',
          tw,
          className
        )}
      >
        {sized}
      </span>
    );
  }
);

IconWrapper.displayName = 'IconWrapper';

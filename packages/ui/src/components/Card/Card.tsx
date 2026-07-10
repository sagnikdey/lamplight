import * as React from 'react';
import { ImageIcon, CircleStop } from 'lucide-react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/cn';
import { Button } from '../Button/Button';
import { IconWrapper } from '../IconWrapper/IconWrapper';

// ─── Figma axes (node 136:946) ───────────────────────────────────────────────
// Shadow:    Raised (default) | Overlay | None
// Booleans:  header | image | body | footer (Figma: "buttons")
// State:     disabled
//
// Visual spec:
//   Container: flex-col, gap/padding 16px (Spacing/lg), radius 8px (Radius/lg)
//   Surface:   Raised → Surface/raised + Elevation/Raised
//              Overlay → Surface/overlay + Elevation/Overlay
//              None    → Surface/default, no shadow
//   Media:     200px tall, radius 8px, object-cover
//   Header:    48px avatar + title stack + trailing icon action
//   Body:      Title (heading font 16px) + Subtitle (body 16px secondary)
//   Footer:    stacked full-width buttons (fill + outline)

const cardVariants = cva(
  [
    'flex flex-col items-start',
    'gap-[var(--spacing-lg)] p-[var(--spacing-lg)]',
    'rounded-[var(--border-radius-lg)]',
    'w-full max-w-[386px]',
    'transition-opacity duration-150',
  ],
  {
    variants: {
      shadow: {
        raised: [
          'bg-[var(--color-surface-raised)]',
          'shadow-raised',
        ],
        overlay: [
          'bg-[var(--color-surface-overlay)]',
          'shadow-overlay',
        ],
        none: 'bg-[var(--color-surface-default)]',
      },
    },
    defaultVariants: {
      shadow: 'raised',
    },
  }
);

// ─── Sub-component props ─────────────────────────────────────────────────────

export interface CardProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof cardVariants> {
  /** Mutes the card and blocks interaction — matches Figma disabled state */
  disabled?: boolean;
  /** Show the header slot with demo content (Figma boolean) */
  header?: boolean;
  /** Show the media/image slot with demo content (Figma boolean) */
  image?: boolean;
  /** Show the body slot with demo content (Figma boolean) */
  body?: boolean;
  /** Show the footer/actions slot with demo buttons (Figma boolean: "buttons") */
  footer?: boolean;
}

export interface CardHeaderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  avatar?: React.ReactNode;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  trailing?: React.ReactNode;
}

export interface CardMediaProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
}

export interface CardBodyProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  trailing?: React.ReactNode;
}

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: 'vertical' | 'horizontal';
}

// ─── Demo placeholders (used when Figma booleans are true) ───────────────────

const DEMO_AVATAR =
  'data:image/svg+xml,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><rect width="48" height="48" rx="24" fill="%23cdcdcd"/><circle cx="24" cy="20" r="8" fill="%23949494"/><ellipse cx="24" cy="40" rx="14" ry="10" fill="%23949494"/></svg>'
  );

function DemoAvatar() {
  return (
    <img
      src={DEMO_AVATAR}
      alt=""
      aria-hidden
      className="size-12 shrink-0 rounded-full object-cover"
    />
  );
}

function DemoTrailingIcon() {
  return (
    <span
      className={cn(
        'inline-flex shrink-0 items-center justify-center',
        'rounded-[var(--border-radius-full)]',
        'bg-[var(--color-surface-sunken)]',
        'p-[var(--spacing-md)]'
      )}
      aria-hidden
    >
      <IconWrapper
        icon={<CircleStop />}
        size="sm"
        className="text-[color:var(--color-icon-default)]"
      />
    </span>
  );
}

function CardDemoContent({
  header,
  image,
  body,
  footer,
}: Required<Pick<CardProps, 'header' | 'image' | 'body' | 'footer'>>) {
  return (
    <>
      {header && (
        <CardHeader
          avatar={<DemoAvatar />}
          title="Primary Text"
          subtitle="Secondary text"
          trailing={<DemoTrailingIcon />}
        />
      )}
      {image && <CardMedia />}
      {body && (
        <CardBody
          title="Title"
          subtitle="Subtitle"
          trailing={
            <div className="flex shrink-0 items-center gap-[var(--spacing-sm)]">
              <span
                className={cn(
                  'font-[family-name:var(--font-heading)] text-[12px] leading-4',
                  'text-[color:var(--color-text-body-secondary)] whitespace-nowrap'
                )}
              >
                00
              </span>
              <DemoTrailingIcon />
            </div>
          }
        />
      )}
      {footer && (
        <CardFooter>
          <Button className="w-full">Button</Button>
          <Button variant="outline" className="w-full">
            Button
          </Button>
        </CardFooter>
      )}
    </>
  );
}

// ─── Card root ───────────────────────────────────────────────────────────────

export const Card = React.forwardRef<HTMLElement, CardProps>(
  (
    {
      shadow = 'raised',
      disabled = false,
      header = false,
      image = false,
      body = false,
      footer = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const useDemo = !children && (header || image || body || footer);

    return (
      <article
        ref={ref}
        aria-disabled={disabled || undefined}
        className={cn(
          cardVariants({ shadow }),
          disabled && 'pointer-events-none opacity-40',
          className
        )}
        {...props}
      >
        {children ??
          (useDemo ? (
            <CardDemoContent header={header} image={image} body={body} footer={footer} />
          ) : null)}
      </article>
    );
  }
);
Card.displayName = 'Card';

// ─── Card.Header ─────────────────────────────────────────────────────────────

export const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ avatar, title, subtitle, trailing, className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'flex w-full items-center gap-[var(--spacing-lg)]',
        className
      )}
      {...props}
    >
      {children ?? (
        <>
          <div className="flex min-w-0 flex-1 items-start gap-[var(--spacing-sm)]">
            {avatar}
            {(title || subtitle) && (
              <div className="flex min-w-0 flex-1 flex-col gap-[var(--spacing-sm)]">
                {title && (
                  <p
                    className={cn(
                      'font-[family-name:var(--font-body)] font-bold',
                      'text-[length:var(--type-paragraph-md-size)] leading-6',
                      'tracking-[0.5px] text-[color:var(--color-text-body)]'
                    )}
                  >
                    {title}
                  </p>
                )}
                {subtitle && (
                  <p
                    className={cn(
                      'font-[family-name:var(--font-body)]',
                      'text-[length:var(--type-paragraph-sm-size)] leading-4',
                      'text-[color:var(--color-text-body-secondary)]'
                    )}
                  >
                    {subtitle}
                  </p>
                )}
              </div>
            )}
          </div>
          {trailing}
        </>
      )}
    </div>
  )
);
CardHeader.displayName = 'CardHeader';

// ─── Card.Media ──────────────────────────────────────────────────────────────

export const CardMedia = React.forwardRef<HTMLDivElement, CardMediaProps>(
  ({ src, alt = '', className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('h-[200px] w-full shrink-0', className)}
      {...props}
    >
      {children ?? (
        <div
          className={cn(
            'relative size-full overflow-hidden',
            'rounded-[var(--border-radius-lg)]',
            'bg-[var(--color-surface-sunken)]'
          )}
        >
          {src ? (
            <img
              src={src}
              alt={alt}
              className="size-full object-cover"
            />
          ) : (
            <div className="flex size-full items-center justify-center">
              <IconWrapper
                icon={<ImageIcon />}
                size="md"
                className="text-[color:var(--color-icon-disabled)]"
              />
            </div>
          )}
        </div>
      )}
    </div>
  )
);
CardMedia.displayName = 'CardMedia';

// ─── Card.Body ───────────────────────────────────────────────────────────────

export const CardBody = React.forwardRef<HTMLDivElement, CardBodyProps>(
  ({ title, subtitle, trailing, className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'flex w-full items-start gap-[var(--spacing-sm)]',
        className
      )}
      {...props}
    >
      {children ?? (
        <>
          <div className="flex min-w-0 flex-1 flex-col gap-[var(--spacing-xs)]">
            {title && (
              <p
                className={cn(
                  'font-[family-name:var(--font-body)] font-bold',
                  'text-[length:var(--type-paragraph-md-size)] leading-6',
                  'tracking-[0.5px] text-[color:var(--color-text-body)]'
                )}
              >
                {title}
              </p>
            )}
            {subtitle && (
              <p
                className={cn(
                  'font-[family-name:var(--font-body)]',
                  'text-[length:var(--type-paragraph-md-size)] leading-6',
                  'text-[color:var(--color-text-body-secondary)]'
                )}
              >
                {subtitle}
              </p>
            )}
          </div>
          {trailing}
        </>
      )}
    </div>
  )
);
CardBody.displayName = 'CardBody';

// ─── Card.Footer ─────────────────────────────────────────────────────────────

export const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ direction = 'vertical', className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'flex w-full',
        direction === 'vertical'
          ? 'flex-col gap-[var(--spacing-lg)]'
          : 'flex-row flex-wrap items-center justify-end gap-[var(--spacing-lg)]',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
);
CardFooter.displayName = 'CardFooter';

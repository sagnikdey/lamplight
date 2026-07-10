import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

// Simple arrow icons inline — replace with your Icon component
const ArrowLeft = () => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const ArrowRight = () => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Default button with Fill, Outline, and Ghost variants in Standard (md) and Small (sm) sizes. All states (hover, active, focus, disabled) are driven by CSS pseudo-classes and Mapped design tokens — switching `data-theme` on `<html>` flips light/dark automatically.',
      },
    },
  },
  argTypes: {
    variant: { control: 'select', options: ['fill', 'outline', 'ghost'] },
    size:    { control: 'select', options: ['md', 'sm'] },
    disabled: { control: 'boolean' },
    children: { control: 'text' },
  },
  args: {
    children: 'Button',
    variant: 'fill',
    size: 'md',
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// ─── Playground ──────────────────────────────────────────────────────────────

export const Playground: Story = {};

// ─── All variants × sizes (mirrors the Figma canvas) ─────────────────────────

export const Matrix: Story = {
  name: 'All variants',
  render: () => (
    <div className="flex flex-col gap-8 p-8 bg-[var(--color-surface-page)] min-w-[480px]">
      {(['md', 'sm'] as const).map((size) => (
        <div key={size}>
          <p className="text-[var(--color-text-body-secondary)] text-xs uppercase tracking-widest mb-4">
            {size === 'md' ? 'Button Standard' : 'Button Small'}
          </p>
          <div className="grid grid-cols-3 gap-4">
            {/* Headers */}
            {(['fill', 'outline', 'ghost'] as const).map((v) => (
              <p key={v} className="text-[var(--color-text-body-secondary)] text-xs text-center capitalize mb-2">{v}</p>
            ))}
            {/* Rows: Default, Hover (shown via :focus so visible in Storybook), Active, Disabled */}
            {(['fill', 'outline', 'ghost'] as const).map((variant) => (
              <Button key={variant} variant={variant} size={size} leadingIcon={<ArrowLeft />} trailingIcon={<ArrowRight />}>Button</Button>
            ))}
            {(['fill', 'outline', 'ghost'] as const).map((variant) => (
              <Button key={variant} variant={variant} size={size} disabled leadingIcon={<ArrowLeft />} trailingIcon={<ArrowRight />}>Button</Button>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};

// ─── With icons ───────────────────────────────────────────────────────────────

export const WithIcons: Story = {
  name: 'With icons',
  render: () => (
    <div className="flex items-center gap-4 flex-wrap p-8 bg-[var(--color-surface-page)]">
      <Button leadingIcon={<ArrowLeft />}>Leading icon</Button>
      <Button trailingIcon={<ArrowRight />}>Trailing icon</Button>
      <Button leadingIcon={<ArrowLeft />} trailingIcon={<ArrowRight />}>Both icons</Button>
      <Button variant="outline" leadingIcon={<ArrowLeft />} trailingIcon={<ArrowRight />}>Outline</Button>
      <Button variant="ghost" leadingIcon={<ArrowLeft />} trailingIcon={<ArrowRight />}>Ghost</Button>
    </div>
  ),
};

// ─── asChild — renders as Next.js Link ───────────────────────────────────────

export const AsLink: Story = {
  name: 'As link (asChild)',
  render: () => (
    <div className="flex gap-4 p-8 bg-[var(--color-surface-page)]">
      {/* In your Next.js app: <Button asChild><Link href="/somewhere">Go</Link></Button> */}
      <Button asChild>
        <a href="#" onClick={(e) => e.preventDefault()}>Fill link</a>
      </Button>
      <Button asChild variant="outline">
        <a href="#" onClick={(e) => e.preventDefault()}>Outline link</a>
      </Button>
      <Button asChild variant="ghost">
        <a href="#" onClick={(e) => e.preventDefault()}>Ghost link</a>
      </Button>
    </div>
  ),
};

// ─── Dark mode ────────────────────────────────────────────────────────────────

export const DarkMode: Story = {
  name: 'Dark mode',
  render: () => (
    <div data-theme="dark" className="bg-[var(--color-surface-page)] p-8 rounded-xl flex gap-4 flex-wrap">
      <Button leadingIcon={<ArrowLeft />} trailingIcon={<ArrowRight />}>Fill</Button>
      <Button variant="outline" leadingIcon={<ArrowLeft />} trailingIcon={<ArrowRight />}>Outline</Button>
      <Button variant="ghost" leadingIcon={<ArrowLeft />} trailingIcon={<ArrowRight />}>Ghost</Button>
      <Button disabled leadingIcon={<ArrowLeft />}>Disabled</Button>
    </div>
  ),
};

// ─── Focus ring demo (tab to see it) ─────────────────────────────────────────

export const FocusRing: Story = {
  name: 'Focus ring (tab to see)',
  render: () => (
    <div className="flex flex-col gap-4 p-8 bg-[var(--color-surface-page)]">
      <p className="text-[var(--color-text-body-secondary)] text-xs mb-2">Tab through the buttons to see the focus ring</p>
      <div className="flex gap-4 flex-wrap">
        <Button>Fill</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button size="sm">Small</Button>
      </div>
    </div>
  ),
};

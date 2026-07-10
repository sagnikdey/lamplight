import type { Meta, StoryObj } from '@storybook/react';
import { Badge, type BadgeSentiment, type BadgeContrast } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Atoms/Badge',
  component: Badge,
  parameters: { layout: 'centered' },
  args: { sentiment: 'neutral', contrast: 'high', showText: true, children: 'Badge' },
  argTypes: {
    sentiment: { control: 'select', options: ['neutral','positive','informative','negative','warning'] },
    contrast:  { control: 'select', options: ['default','high','low'] },
    showText:  { control: 'boolean' },
    children:  { control: 'text' },
  },
};
export default meta;
type Story = StoryObj<typeof Badge>;

export const Playground: Story = {};

const sentiments: BadgeSentiment[] = ['neutral','positive','informative','negative','warning'];

// Full matrix mirrors the Figma canvas (text=yes + text=no)
export const Matrix: Story = {
  name: 'Full matrix (Figma)',
  render: () => (
    <div className="flex flex-col gap-8 p-8 bg-[var(--color-surface-page)]">
      {/* Pill badges */}
      <div>
        <p className="text-xs uppercase tracking-widest text-[color:var(--color-text-body-secondary)] mb-4">Pill (text=yes)</p>
        <div className="flex flex-col gap-3">
          {sentiments.map(s => (
            <div key={s} className="flex items-center gap-4">
              <span className="w-24 text-xs text-[color:var(--color-text-body-secondary)] capitalize">{s}</span>
              <Badge sentiment={s} contrast="high">Badge</Badge>
              <Badge sentiment={s} contrast="default">Badge</Badge>
            </div>
          ))}
        </div>
        <div className="flex gap-2 mt-2 ml-28">
          <span className="text-[11px] text-[color:var(--color-text-body-secondary)] w-14 text-center">high</span>
          <span className="text-[11px] text-[color:var(--color-text-body-secondary)] w-14 text-center">default</span>
        </div>
      </div>

      {/* Dot badges */}
      <div>
        <p className="text-xs uppercase tracking-widest text-[color:var(--color-text-body-secondary)] mb-4">Dot (text=no)</p>
        <div className="flex flex-col gap-3">
          {sentiments.map(s => (
            <div key={s} className="flex items-center gap-4">
              <span className="w-24 text-xs text-[color:var(--color-text-body-secondary)] capitalize">{s}</span>
              <Badge sentiment={s} contrast="high" showText={false} />
              <Badge sentiment={s} contrast="low"  showText={false} />
            </div>
          ))}
        </div>
        <div className="flex gap-2 mt-2 ml-28">
          <span className="text-[11px] text-[color:var(--color-text-body-secondary)] w-8 text-center">high</span>
          <span className="text-[11px] text-[color:var(--color-text-body-secondary)] w-8 text-center">low</span>
        </div>
      </div>
    </div>
  ),
};

export const Numeric: Story = {
  name: 'Numeric badges',
  render: () => (
    <div className="flex items-center gap-4 p-8 bg-[var(--color-surface-page)]">
      <Badge sentiment="negative" contrast="high">3</Badge>
      <Badge sentiment="negative" contrast="high">12</Badge>
      <Badge sentiment="negative" contrast="high">99+</Badge>
      <Badge sentiment="neutral" contrast="high">0</Badge>
      <Badge sentiment="informative" contrast="high">New</Badge>
    </div>
  ),
};

export const StatusDots: Story = {
  name: 'Status dots',
  render: () => (
    <div className="flex flex-col gap-3 p-8 bg-[var(--color-surface-page)]">
      {sentiments.map(s => (
        <div key={s} className="flex items-center gap-3">
          <Badge sentiment={s} showText={false} contrast="high" />
          <span className="text-sm text-[color:var(--color-text-body)] capitalize">{s}</span>
        </div>
      ))}
    </div>
  ),
};

export const DarkMode: Story = {
  name: 'Dark mode',
  render: () => (
    <div data-theme="dark" className="bg-[var(--color-surface-page)] p-8 rounded-xl flex flex-wrap gap-3">
      {sentiments.map(s => (
        <>
          <Badge key={s+'-h'} sentiment={s} contrast="high">Badge</Badge>
          <Badge key={s+'-d'} sentiment={s} contrast="default">Badge</Badge>
          <Badge key={s+'-dot'} sentiment={s} showText={false} />
        </>
      ))}
    </div>
  ),
};

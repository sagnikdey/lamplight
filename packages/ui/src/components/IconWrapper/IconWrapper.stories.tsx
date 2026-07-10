import type { Meta, StoryObj } from '@storybook/react';
import { Search, Bell, Star, Heart, Settings, ArrowRight, Check, X } from 'lucide-react';
import { IconWrapper } from './IconWrapper';

const meta: Meta<typeof IconWrapper> = {
  title: 'Atoms/IconWrapper',
  component: IconWrapper,
  parameters: { layout: 'centered' },
  args: { icon: <Search />, size: 'md' },
  argTypes: {
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
  },
};
export default meta;
type Story = StoryObj<typeof IconWrapper>;

export const Playground: Story = {};

export const AllSizes: Story = {
  name: 'All sizes (xs → xl)',
  render: () => (
    <div className="flex items-end gap-6 p-8 bg-[var(--color-surface-page)]">
      {(['xs','sm','md','lg','xl'] as const).map(size => (
        <div key={size} className="flex flex-col items-center gap-2">
          <IconWrapper icon={<Search />} size={size} className="text-[color:var(--color-icon-default)]" />
          <span className="text-[11px] font-mono text-[color:var(--color-text-body-secondary)]">{size}</span>
        </div>
      ))}
    </div>
  ),
};

export const WithTokenColours: Story = {
  name: 'Token colours',
  render: () => (
    <div className="flex gap-6 p-8 bg-[var(--color-surface-page)] flex-wrap">
      {[
        ['Default',     'text-[color:var(--color-icon-default)]',     <Search />],
        ['Action',      'text-[color:var(--color-icon-action)]',      <Bell />],
        ['Success',     'text-[color:var(--color-icon-success)]',     <Check />],
        ['Error',       'text-[color:var(--color-icon-error)]',       <X />],
        ['Warning',     'text-[color:var(--color-icon-warning)]',     <Star />],
        ['Info',        'text-[color:var(--color-icon-information)]', <ArrowRight />],
        ['Disabled',    'text-[color:var(--color-icon-disabled)]',    <Settings />],
      ].map(([label, cls, icon]) => (
        <div key={String(label)} className="flex flex-col items-center gap-2">
          <IconWrapper icon={icon as React.ReactElement} size="md" className={String(cls)} />
          <span className="text-[11px] text-[color:var(--color-text-body-secondary)]">{String(label)}</span>
        </div>
      ))}
    </div>
  ),
};

export const VariousIcons: Story = {
  name: 'Various Lucide icons',
  render: () => (
    <div className="flex gap-4 p-8 bg-[var(--color-surface-page)] flex-wrap">
      {[Search, Bell, Star, Heart, Settings, ArrowRight, Check, X].map((Icon, i) => (
        <IconWrapper key={i} icon={<Icon />} size="md" className="text-[color:var(--color-icon-action)]" />
      ))}
    </div>
  ),
};

export const DarkMode: Story = {
  name: 'Dark mode',
  render: () => (
    <div data-theme="dark" className="bg-[var(--color-surface-page)] p-8 rounded-xl flex gap-6">
      {(['xs','sm','md','lg','xl'] as const).map(size => (
        <IconWrapper key={size} icon={<Search />} size={size} className="text-[color:var(--color-icon-default)]" />
      ))}
    </div>
  ),
};

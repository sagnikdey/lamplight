import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from './Divider';

const meta: Meta<typeof Divider> = {
  title: 'Atoms/Divider',
  component: Divider,
  parameters: { layout: 'centered' },
  argTypes: {
    orientation: { control: 'select', options: ['horizontal', 'vertical'] },
    label: { control: 'text' },
  },
};
export default meta;
type Story = StoryObj<typeof Divider>;

export const Horizontal: Story = {
  name: 'Horizontal (Figma Type=Horizontal)',
  render: () => (
    <div className="w-[400px] p-8 bg-[var(--color-surface-page)]">
      <p className="text-sm text-[color:var(--color-text-body)] mb-4">Content above</p>
      <Divider orientation="horizontal" />
      <p className="text-sm text-[color:var(--color-text-body)] mt-4">Content below</p>
    </div>
  ),
};

export const Vertical: Story = {
  name: 'Vertical (Figma Type=Vertical)',
  render: () => (
    <div className="p-8 bg-[var(--color-surface-page)]">
      <div className="flex items-center gap-4 h-8">
        <span className="text-sm text-[color:var(--color-text-body)]">Left</span>
        <Divider orientation="vertical" />
        <span className="text-sm text-[color:var(--color-text-body)]">Middle</span>
        <Divider orientation="vertical" />
        <span className="text-sm text-[color:var(--color-text-body)]">Right</span>
      </div>
    </div>
  ),
};

export const WithLabel: Story = {
  name: 'Labelled (or / and pattern)',
  render: () => (
    <div className="w-[400px] flex flex-col gap-6 p-8 bg-[var(--color-surface-page)]">
      <Divider label="or" />
      <Divider label="and" />
      <Divider label="continue with" />
    </div>
  ),
};

export const InContext: Story = {
  name: 'In context — auth form',
  render: () => (
    <div className="w-[400px] flex flex-col gap-4 p-8 bg-[var(--color-surface-page)]">
      <div className="h-10 rounded-md bg-[var(--color-surface-action)] flex items-center justify-center">
        <span className="text-sm text-[color:var(--color-text-on-action)] font-semibold">Sign in with Google</span>
      </div>
      <Divider label="or" />
      <div className="h-10 rounded-md border border-[color:var(--color-border-default)] flex items-center justify-center">
        <span className="text-sm text-[color:var(--color-text-body)]">Sign in with email</span>
      </div>
    </div>
  ),
};

export const DarkMode: Story = {
  name: 'Dark mode',
  render: () => (
    <div data-theme="dark" className="bg-[var(--color-surface-page)] p-8 rounded-xl flex flex-col gap-6 w-[400px]">
      <Divider orientation="horizontal" />
      <Divider label="or" />
      <div className="flex items-center gap-4 h-8">
        <span className="text-sm text-[color:var(--color-text-body)]">Left</span>
        <Divider orientation="vertical" />
        <span className="text-sm text-[color:var(--color-text-body)]">Right</span>
      </div>
    </div>
  ),
};

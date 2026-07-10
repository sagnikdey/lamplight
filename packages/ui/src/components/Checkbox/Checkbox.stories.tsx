'use client';
import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Checkbox, IndeterminateCheckbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  parameters: { layout: 'centered' },
  args: { label: 'Accept terms and conditions', labelDirection: 'right' },
  argTypes: {
    labelDirection: { control: 'select', options: ['right', 'left'] },
    disabled: { control: 'boolean' },
  },
};
export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Playground: Story = {};

// ─── All Figma variants ───────────────────────────────────────────────────────

export const AllVariants: Story = {
  name: 'All Figma variants',
  render: () => (
    <div className="flex flex-col gap-6 p-8 bg-[var(--color-surface-page)]">
      {/* Label=Yes, Direction=Right (default) */}
      <div>
        <p className="text-xs uppercase tracking-widest text-[color:var(--color-text-body-secondary)] mb-3">Label right</p>
        <div className="flex flex-col gap-3">
          <Checkbox label="Unchecked" />
          <Checkbox label="Checked" defaultChecked />
          <Checkbox label="Unchecked Disabled" disabled />
          <Checkbox label="Checked Disabled" defaultChecked disabled />
        </div>
      </div>

      {/* Label=Yes, Direction=Left */}
      <div>
        <p className="text-xs uppercase tracking-widest text-[color:var(--color-text-body-secondary)] mb-3">Label left</p>
        <div className="flex flex-col gap-3">
          <Checkbox label="Unchecked" labelDirection="left" />
          <Checkbox label="Checked" labelDirection="left" defaultChecked />
          <Checkbox label="Disabled" labelDirection="left" disabled />
        </div>
      </div>

      {/* Label=No */}
      <div>
        <p className="text-xs uppercase tracking-widest text-[color:var(--color-text-body-secondary)] mb-3">No label</p>
        <div className="flex gap-4">
          <Checkbox aria-label="Unchecked" />
          <Checkbox aria-label="Checked" defaultChecked />
          <Checkbox aria-label="Disabled" disabled />
          <Checkbox aria-label="Checked disabled" defaultChecked disabled />
        </div>
      </div>
    </div>
  ),
};

// ─── Indeterminate state ──────────────────────────────────────────────────────

export const Indeterminate: Story = {
  name: 'Indeterminate (select-all pattern)',
  render: function IndeterminateDemo() {
    const items = ['Option A', 'Option B', 'Option C'];
    const [checked, setChecked] = useState<boolean[]>([true, false, false]);

    const allChecked = checked.every(Boolean);
    const noneChecked = checked.every(c => !c);
    const parent = allChecked ? true : noneChecked ? false : 'indeterminate';

    function handleParent(val: boolean | 'indeterminate') {
      setChecked(checked.map(() => val === true));
    }

    return (
      <div className="flex flex-col gap-3 p-8 bg-[var(--color-surface-page)]">
        <div className="flex items-center gap-2">
          <IndeterminateCheckbox checked={parent} onCheckedChange={handleParent} id="parent" />
          <label htmlFor="parent" className="text-sm font-semibold text-[color:var(--color-text-body)] cursor-pointer">
            Select all
          </label>
        </div>
        <div className="ml-8 flex flex-col gap-2">
          {items.map((item, i) => (
            <Checkbox
              key={item}
              label={item}
              checked={checked[i]}
              onCheckedChange={val =>
                setChecked(prev => prev.map((c, j) => j === i ? Boolean(val) : c))
              }
            />
          ))}
        </div>
      </div>
    );
  },
};

// ─── Controlled ───────────────────────────────────────────────────────────────

export const Controlled: Story = {
  name: 'Controlled',
  render: function Demo() {
    const [checked, setChecked] = useState(false);
    return (
      <div className="flex flex-col gap-4 p-8 bg-[var(--color-surface-page)]">
        <Checkbox
          label="I agree to the terms"
          checked={checked}
          onCheckedChange={v => setChecked(Boolean(v))}
        />
        <p className="text-sm text-[color:var(--color-text-body-secondary)]">
          State: <span className="font-mono">{String(checked)}</span>
        </p>
      </div>
    );
  },
};

// ─── Dark mode ────────────────────────────────────────────────────────────────

export const DarkMode: Story = {
  name: 'Dark mode',
  render: () => (
    <div data-theme="dark" className="bg-[var(--color-surface-page)] p-8 rounded-xl flex flex-col gap-3">
      <Checkbox label="Unchecked" />
      <Checkbox label="Checked" defaultChecked />
      <Checkbox label="Disabled" disabled />
      <Checkbox label="Checked Disabled" defaultChecked disabled />
    </div>
  ),
};

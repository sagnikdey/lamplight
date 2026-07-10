import type { Meta, StoryObj } from '@storybook/react';
import { Search, ArrowRight } from 'lucide-react';
import { Input, InputField, InputLabel, InputCaption, TextareaField } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Atoms/Input',
  component: Input,
  parameters: { layout: 'centered' },
  decorators: [(Story) => <div className="w-[400px] p-8 bg-[var(--color-surface-page)]"><Story /></div>],
  args: { label: 'Label', placeholder: 'Enter value…' },
  argTypes: {
    captionType: { control: 'select', options: ['caption','error','success','info','password'] },
    multiline: { control: 'boolean' },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
  },
};
export default meta;
type Story = StoryObj<typeof Input>;

export const Playground: Story = {};

// ─── All states ───────────────────────────────────────────────────────────────

export const AllStates: Story = {
  name: 'All field states',
  render: () => (
    <div className="flex flex-col gap-6 p-8 w-[440px] bg-[var(--color-surface-page)]">
      <Input label="Default" placeholder="giorgio@armani.com" hint="Optional Hint" />
      <Input label="With icons" placeholder="Search…" leadingIcon={<Search />} trailingIcon={<ArrowRight />} />
      <Input label="Required" placeholder="Enter email…" required />
      <Input label="Disabled" placeholder="Disabled input" disabled />
      <Input label="Error" placeholder="Invalid value" caption="This field is required." captionType="error" defaultValue="wrong" />
      <Input label="Success" placeholder="Valid value" caption="Looks good!" captionType="success" defaultValue="correct@email.com" />
      <Input label="Info" placeholder="Enter value" caption="We'll never share your email." captionType="info" />
      <Input label="Password" placeholder="••••••••" type="password" caption="At least 8 characters" captionType="password" />
    </div>
  ),
};

// ─── Caption types ────────────────────────────────────────────────────────────

export const CaptionTypes: Story = {
  name: 'Caption variants',
  render: () => (
    <div className="flex flex-col gap-4 p-8 w-[440px] bg-[var(--color-surface-page)]">
      <InputCaption type="caption">Helper text goes here</InputCaption>
      <InputCaption type="error">This field is required</InputCaption>
      <InputCaption type="success">Email verified successfully</InputCaption>
      <InputCaption type="info">We'll never share your info</InputCaption>
      <InputCaption type="password">At least 8 characters</InputCaption>
    </div>
  ),
};

// ─── Text Area ────────────────────────────────────────────────────────────────

export const TextArea: Story = {
  name: 'Text area',
  render: () => (
    <div className="flex flex-col gap-6 p-8 w-[440px] bg-[var(--color-surface-page)]">
      <Input label="Message" multiline placeholder="Write your message…" hint="Optional" />
      <Input label="Error" multiline placeholder="Write here…" caption="Required field." captionType="error" />
      <Input label="Disabled" multiline placeholder="Cannot edit" disabled />
    </div>
  ),
};

// ─── Composing primitives directly ───────────────────────────────────────────

export const Primitives: Story = {
  name: 'Primitive composition',
  render: () => (
    <div className="flex flex-col gap-4 p-8 w-[440px] bg-[var(--color-surface-page)]">
      <InputLabel htmlFor="ex1" required hint="Required">Email address</InputLabel>
      <InputField id="ex1" placeholder="you@example.com" leadingIcon={<Search />} />
      <InputCaption type="info">We'll send a confirmation link.</InputCaption>
    </div>
  ),
};

// ─── Dark mode ────────────────────────────────────────────────────────────────

export const DarkMode: Story = {
  name: 'Dark mode',
  render: () => (
    <div data-theme="dark" className="bg-[var(--color-surface-page)] p-8 rounded-xl flex flex-col gap-6 w-[440px]">
      <Input label="Default" placeholder="giorgio@armani.com" />
      <Input label="Error" placeholder="Invalid" caption="Required." captionType="error" />
      <Input label="Success" placeholder="correct@email.com" caption="Looks good!" captionType="success" />
    </div>
  ),
};

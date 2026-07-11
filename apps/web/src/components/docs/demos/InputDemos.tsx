import { Search, ArrowRight } from 'lucide-react';
import { Input } from '@lamplight/ui';
import { ComponentPreview } from '@/components/docs/ComponentPreview';

export function InputDemos() {
  return (
    <div className="mx-auto flex w-full max-w-[440px] flex-col gap-[var(--spacing-2xl)]">
      <ComponentPreview title="Default" padded={false}>
        <div className="p-[var(--spacing-xl)]">
          <Input label="Email" placeholder="you@example.com" hint="Optional" caption="We'll never share your email." />
        </div>
      </ComponentPreview>

      <ComponentPreview title="States" padded={false}>
        <div className="flex flex-col gap-[var(--spacing-lg)] p-[var(--spacing-xl)]">
          <Input label="With icons" placeholder="Search…" leadingIcon={<Search size={16} aria-hidden />} trailingIcon={<ArrowRight size={16} aria-hidden />} />
          <Input label="Required" placeholder="Enter email…" required />
          <Input label="Disabled" placeholder="Disabled input" disabled />
          <Input label="Error" placeholder="Invalid value" caption="This field is required." captionType="error" defaultValue="wrong@" />
          <Input label="Success" placeholder="Valid value" caption="Looks good!" captionType="success" defaultValue="correct@email.com" />
        </div>
      </ComponentPreview>

      <ComponentPreview title="Text area" padded={false}>
        <div className="p-[var(--spacing-xl)]">
          <Input label="Message" multiline placeholder="Write your message…" hint="Optional" />
        </div>
      </ComponentPreview>
    </div>
  );
}

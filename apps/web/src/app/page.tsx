import { Button, Badge, Input, Checkbox, Divider, IconWrapper } from '@lamplight/ui';
import { Search } from 'lucide-react';

export default function Home() {
  return (
    <main className="p-[var(--spacing-2xl)] flex flex-col gap-[var(--spacing-lg)]">
      <h1 className="font-[family-name:var(--font-heading)]">Lamplight</h1>
      <div className="flex gap-[var(--spacing-lg)] items-center">
        <Button variant="fill">Primary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost" leadingIcon={<Search size={16} />}>Ghost</Button>
        <Badge sentiment="positive">Active</Badge>
        <IconWrapper icon={<Search />} size="md" className="text-[color:var(--color-icon-action)]" />
      </div>
      <Divider label="or" />
      <Input label="Email" placeholder="you@example.com" caption="We'll never share this." captionType="info" />
      <Checkbox label="Accept terms" />
    </main>
  );
}

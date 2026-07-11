import { Divider } from '@lamplight/ui';
import { ComponentPreview } from '@/components/docs/ComponentPreview';

export function DividerDemos() {
  return (
    <div className="flex flex-col gap-[var(--spacing-2xl)]">
      <ComponentPreview title="Horizontal">
        <Divider orientation="horizontal" />
      </ComponentPreview>

      <ComponentPreview title="With label">
        <Divider label="or" />
      </ComponentPreview>

      <ComponentPreview title="Vertical">
        <div className="flex h-[48px] items-center gap-[var(--spacing-lg)]">
          <span className="text-[length:var(--type-paragraph-sm-size)] text-[color:var(--color-text-body)]">Left</span>
          <Divider orientation="vertical" />
          <span className="text-[length:var(--type-paragraph-sm-size)] text-[color:var(--color-text-body)]">Right</span>
        </div>
      </ComponentPreview>
    </div>
  );
}

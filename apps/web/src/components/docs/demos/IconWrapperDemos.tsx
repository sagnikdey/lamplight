import { Bell, Search, Settings } from 'lucide-react';
import { IconWrapper } from '@lamplight/ui';
import { ComponentPreview } from '@/components/docs/ComponentPreview';

export function IconWrapperDemos() {
  return (
    <ComponentPreview title="Sizes">
      <div className="flex flex-wrap items-end gap-[var(--spacing-xl)]">
        {(['sm', 'md', 'lg'] as const).map((size) => (
          <div key={size} className="flex flex-col items-center gap-[var(--spacing-sm)]">
            <IconWrapper
              icon={<Search aria-hidden />}
              size={size}
              className="text-[color:var(--color-icon-action)]"
            />
            <span className="font-[family-name:var(--font-mono)] text-[length:var(--type-paragraph-xsm-size)] text-[color:var(--color-text-body-secondary)]">
              {size}
            </span>
          </div>
        ))}
        <IconWrapper icon={<Bell aria-hidden />} size="md" className="text-[color:var(--color-icon-default)]" />
        <IconWrapper icon={<Settings aria-hidden />} size="md" className="text-[color:var(--color-icon-action)]" />
      </div>
    </ComponentPreview>
  );
}

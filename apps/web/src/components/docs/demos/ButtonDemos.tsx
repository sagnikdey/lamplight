import { Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@lamplight/ui';
import { ComponentPreview } from '@/components/docs/ComponentPreview';

export function ButtonDemos() {
  return (
    <div className="flex flex-col gap-[var(--spacing-2xl)]">
      <ComponentPreview title="Variants">
        <div className="flex flex-wrap items-center gap-[var(--spacing-md)]">
          <Button variant="fill">Primary action</Button>
          <Button variant="outline">Secondary</Button>
          <Button variant="ghost">Tertiary</Button>
          <Button variant="fill" disabled>
            Disabled
          </Button>
        </div>
      </ComponentPreview>

      <ComponentPreview title="Sizes">
        <div className="flex flex-wrap items-center gap-[var(--spacing-md)]">
          <Button size="md">Standard</Button>
          <Button size="sm">Small</Button>
        </div>
      </ComponentPreview>

      <ComponentPreview title="With icons">
        <div className="flex flex-wrap items-center gap-[var(--spacing-md)]">
          <Button leadingIcon={<ChevronLeft size={16} aria-hidden />}>Back</Button>
          <Button trailingIcon={<ChevronRight size={16} aria-hidden />}>Continue</Button>
          <Button variant="outline" leadingIcon={<Search size={16} aria-hidden />}>
            Search
          </Button>
        </div>
      </ComponentPreview>
    </div>
  );
}

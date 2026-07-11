import { ComponentDocLayout } from '@/components/docs/ComponentDocLayout';
import { IconWrapperDemos } from '@/components/docs/demos/IconWrapperDemos';
import { componentCatalog } from '@/lib/docs/components';

const meta = componentCatalog.find((c) => c.slug === 'icon-wrapper')!;

export default function IconWrapperPage() {
  return (
    <ComponentDocLayout
      meta={meta}
      whenToUse="Wrap Lucide icons in IconWrapper for consistent sizing across the system. Prefer the size prop over CSS width/height on SVGs."
      usageCode={`import { Search } from 'lucide-react';
import { IconWrapper } from '@lamplight/ui';

<IconWrapper
  icon={<Search aria-hidden />}
  size="sm"
  className="text-[color:var(--color-icon-action)]"
/>`}
      accessibility={
        <>
          Decorative icons should include <code className="font-[family-name:var(--font-mono)]">aria-hidden</code>.
          Interactive icon-only controls need a visible label or <code className="font-[family-name:var(--font-mono)]">aria-label</code> on the parent button or link.
        </>
      }
      props={[
        { name: 'icon', type: 'ReactNode', required: true, description: 'Lucide icon element' },
        { name: 'size', type: "'sm' | 'md' | 'lg'", defaultValue: "'md'", description: 'Constrained icon box size' },
        { name: 'className', type: 'string', description: 'Token-based colour classes for icon fill' },
      ]}
    >
      <IconWrapperDemos />
    </ComponentDocLayout>
  );
}

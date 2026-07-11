import { ComponentDocLayout } from '@/components/docs/ComponentDocLayout';
import { ButtonDemos } from '@/components/docs/demos/ButtonDemos';
import { componentCatalog } from '@/lib/docs/components';

const meta = componentCatalog.find((c) => c.slug === 'button')!;

export default function ButtonPage() {
  return (
    <ComponentDocLayout
      meta={meta}
      whenToUse="Use buttons to trigger actions — submitting forms, confirming dialogs, or navigating when styled as a call-to-action. Limit to one primary (Fill) button per view."
      anatomy="Label (uppercase Open Sans SemiBold), optional 16px leading/trailing icons, pill radius, and an absolute focus ring layer matching Figma's button-ring."
      usageCode={`<Button variant="fill" size="md">Save changes</Button>
<Button variant="outline" leadingIcon={<Search size={16} />}>Search</Button>
<Button variant="ghost" disabled>Cancel</Button>`}
      accessibility={
        <>
          Native <code className="font-[family-name:var(--font-mono)]">button</code> semantics with visible{' '}
          <code className="font-[family-name:var(--font-mono)]">:focus-visible</code> ring via an absolute span.
          Disabled state sets <code className="font-[family-name:var(--font-mono)]">aria-disabled</code> for asChild links.
          Icon-only buttons require an <code className="font-[family-name:var(--font-mono)]">aria-label</code>.
        </>
      }
      props={[
        { name: 'variant', type: "'fill' | 'outline' | 'ghost'", defaultValue: "'fill'", description: 'Visual style axis from Figma' },
        { name: 'size', type: "'md' | 'sm'", defaultValue: "'md'", description: 'Standard or small padding scale' },
        { name: 'leadingIcon', type: 'ReactNode', description: 'Icon before label, rendered at 16×16px' },
        { name: 'trailingIcon', type: 'ReactNode', description: 'Icon after label, rendered at 16×16px' },
        { name: 'disabled', type: 'boolean', defaultValue: 'false', description: 'Prevents interaction and applies disabled tokens' },
        { name: 'asChild', type: 'boolean', defaultValue: 'false', description: 'Merge props onto a single child element via Radix Slot' },
      ]}
    >
      <ButtonDemos />
    </ComponentDocLayout>
  );
}

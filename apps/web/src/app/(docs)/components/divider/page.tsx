import { ComponentDocLayout } from '@/components/docs/ComponentDocLayout';
import { DividerDemos } from '@/components/docs/demos/DividerDemos';
import { componentCatalog } from '@/lib/docs/components';

const meta = componentCatalog.find((c) => c.slug === 'divider')!;

export default function DividerPage() {
  return (
    <ComponentDocLayout
      meta={meta}
      whenToUse="Use dividers to separate related content groups — between form sections, list items, or toolbar clusters. Labelled dividers work well for auth flows ('or continue with')."
      usageCode={`<Divider orientation="horizontal" />
<Divider label="or" />
<Divider orientation="vertical" />`}
      accessibility={
        <>
          Horizontal dividers use <code className="font-[family-name:var(--font-mono)]">role="separator"</code> with{' '}
          <code className="font-[family-name:var(--font-mono)]">aria-orientation</code>. Labelled dividers expose the label as visible text — not a replacement for headings.
        </>
      }
      props={[
        { name: 'orientation', type: "'horizontal' | 'vertical'", defaultValue: "'horizontal'", description: 'Divider direction' },
        { name: 'label', type: 'string', description: 'Optional centred label text' },
      ]}
    >
      <DividerDemos />
    </ComponentDocLayout>
  );
}

import { ComponentDocLayout } from '@/components/docs/ComponentDocLayout';
import { BadgeDemos } from '@/components/docs/demos/BadgeDemos';
import { componentCatalog } from '@/lib/docs/components';

const meta = componentCatalog.find((c) => c.slug === 'badge')!;

export default function BadgePage() {
  return (
    <ComponentDocLayout
      meta={meta}
      whenToUse="Use badges for compact status labels, notification counts, and presence indicators. Choose sentiment to match semantic meaning — not decoration."
      anatomy="Pill container with JetBrains Mono label, or a dot-only variant when showText is false."
      usageCode={`<Badge sentiment="positive" contrast="high">Active</Badge>
<Badge sentiment="negative" contrast="high">3</Badge>
<Badge sentiment="warning" showText={false} />`}
      accessibility={
        <>
          When <code className="font-[family-name:var(--font-mono)]">showText</code> is false, pair the dot with visible text nearby or provide{' '}
          <code className="font-[family-name:var(--font-mono)]">aria-label</code> on a parent. Do not rely on color alone — include a text label or icon with meaning.
        </>
      }
      props={[
        { name: 'sentiment', type: "'neutral' | 'positive' | 'informative' | 'negative' | 'warning'", defaultValue: "'neutral'", description: 'Semantic color role' },
        { name: 'contrast', type: "'default' | 'high' | 'low'", defaultValue: "'high'", description: 'Emphasis level against the surface' },
        { name: 'showText', type: 'boolean', defaultValue: 'true', description: 'Render label text or dot-only indicator' },
        { name: 'children', type: 'ReactNode', description: 'Badge label content' },
      ]}
    >
      <BadgeDemos />
    </ComponentDocLayout>
  );
}

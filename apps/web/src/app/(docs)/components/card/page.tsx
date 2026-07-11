import { ComponentDocLayout } from '@/components/docs/ComponentDocLayout';
import { CardDemos } from '@/components/docs/demos/CardDemos';
import { componentCatalog } from '@/lib/docs/components';

const meta = componentCatalog.find((c) => c.slug === 'card')!;

export default function CardPage() {
  return (
    <ComponentDocLayout
      meta={meta}
      whenToUse="Use cards to group related content — articles, settings panels, or dashboard widgets. Compose with sub-components for production layouts; use boolean props for quick Figma-parity demos."
      anatomy="Card container with optional CardHeader, CardMedia, CardBody, and CardFooter slots. Shadow axis: raised, overlay, or none."
      usageCode={`<Card shadow="raised">
  <CardMedia src="/image.jpg" alt="Cover" />
  <CardBody title="Article title" subtitle="Summary text" />
  <CardFooter direction="horizontal">
    <Button variant="outline" size="sm">Read more</Button>
  </CardFooter>
</Card>`}
      accessibility={
        <>
          Cards are semantic <code className="font-[family-name:var(--font-mono)]">article</code> elements when used for self-contained content.
          Images require meaningful <code className="font-[family-name:var(--font-mono)]">alt</code> text via CardMedia.
          Disabled cards set <code className="font-[family-name:var(--font-mono)]">aria-disabled</code> and reduce opacity.
        </>
      }
      props={[
        { name: 'shadow', type: "'raised' | 'overlay' | 'none'", defaultValue: "'raised'", description: 'Elevation and surface token pairing' },
        { name: 'disabled', type: 'boolean', defaultValue: 'false', description: 'Muted, non-interactive card state' },
        { name: 'header', type: 'boolean', description: 'Render demo header slot' },
        { name: 'image', type: 'boolean', description: 'Render demo media slot' },
        { name: 'body', type: 'boolean', description: 'Render demo body slot' },
        { name: 'footer', type: 'boolean', description: 'Render demo footer actions' },
      ]}
    >
      <CardDemos />
    </ComponentDocLayout>
  );
}

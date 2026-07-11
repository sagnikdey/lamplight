import { Button, Card, CardBody, CardFooter, CardHeader, CardMedia } from '@lamplight/ui';
import { ComponentPreview } from '@/components/docs/ComponentPreview';

export function CardDemos() {
  return (
    <div className="flex flex-col gap-[var(--spacing-2xl)]">
      <ComponentPreview title="Default composition">
        <div className="flex flex-wrap gap-[var(--spacing-xl)]">
          <Card shadow="raised" header image body footer />
          <Card shadow="overlay" header image body footer />
          <Card shadow="none" header image body footer />
        </div>
      </ComponentPreview>

      <ComponentPreview title="Custom composition">
        <Card shadow="overlay" className="max-w-[386px] border border-[color:var(--color-border-default)]">
          <CardMedia
            src="https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=200&fit=crop"
            alt="Abstract art"
          />
          <CardBody
            title="Design systems that scale"
            subtitle="How token architecture keeps product teams aligned from Figma to production."
          />
          <CardFooter direction="horizontal">
            <CardHeader
              className="flex-1"
              avatar={
                <span className="flex size-12 items-center justify-center rounded-[var(--border-radius-full)] bg-[var(--color-surface-sunken)] text-[length:var(--type-paragraph-sm-size)] font-semibold text-[color:var(--color-text-headings)]">
                  SD
                </span>
              }
              title="Sagnik Dey"
              subtitle="Design engineer"
            />
            <Button variant="outline" size="sm">
              Read more
            </Button>
          </CardFooter>
        </Card>
      </ComponentPreview>
    </div>
  );
}

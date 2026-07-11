import { Badge } from '@lamplight/ui';
import { ComponentPreview } from '@/components/docs/ComponentPreview';

const sentiments = ['neutral', 'positive', 'informative', 'negative', 'warning'] as const;

export function BadgeDemos() {
  return (
    <div className="flex flex-col gap-[var(--spacing-2xl)]">
      <ComponentPreview title="Sentiment × contrast">
        <div className="flex flex-col gap-[var(--spacing-lg)]">
          {sentiments.map((sentiment) => (
            <div key={sentiment} className="flex flex-wrap items-center gap-[var(--spacing-md)]">
              <span className="w-[100px] text-[length:var(--type-paragraph-xsm-size)] capitalize text-[color:var(--color-text-body-secondary)]">
                {sentiment}
              </span>
              <Badge sentiment={sentiment} contrast="high">
                Badge
              </Badge>
              <Badge sentiment={sentiment} contrast="default">
                Badge
              </Badge>
              <Badge sentiment={sentiment} contrast="high" showText={false} />
            </div>
          ))}
        </div>
      </ComponentPreview>

      <ComponentPreview title="Numeric counts">
        <div className="flex flex-wrap items-center gap-[var(--spacing-md)]">
          <Badge sentiment="negative" contrast="high">
            3
          </Badge>
          <Badge sentiment="negative" contrast="high">
            12
          </Badge>
          <Badge sentiment="informative" contrast="high">
            New
          </Badge>
        </div>
      </ComponentPreview>
    </div>
  );
}

import Link from 'next/link';
import { DocsPageHeader } from '@/components/docs/DocsPageHeader';
import { FoundationCard } from '@/components/docs/FoundationCard';
import { Section } from '@/components/docs/Section';
import { foundationCards } from '@/lib/docs/navigation';

export default function FoundationsPage() {
  return (
    <div className="mx-auto max-w-[1280px] px-[var(--spacing-xl)] py-[var(--spacing-3xl)] lg:px-[var(--spacing-3xl)]">
      <DocsPageHeader
        title="Foundations"
        description="The building blocks of Lamplight — tokens, color, and typography that ensure every interface is consistent, accessible, and on-brand."
      />

      <Section
        title="Design with confidence"
        description="Foundations define the visual language every component inherits. Start here before building or extending UI."
      >
        <div className="grid gap-[var(--spacing-xl)] md:grid-cols-2 lg:grid-cols-3">
          {foundationCards.map((card) => (
            <FoundationCard key={card.href} {...card} />
          ))}
        </div>
      </Section>

      <Section
        title="Token-first workflow"
        description="Lamplight follows a three-layer token architecture. Components and pages consume only the Mapped layer."
      >
        <div className="rounded-[var(--border-radius-lg)] border border-[color:var(--color-border-default)] bg-[var(--color-surface-sunken)] p-[var(--spacing-xl)]">
          <pre className="overflow-x-auto font-[family-name:var(--font-mono)] text-[length:var(--type-paragraph-sm-size)] leading-[var(--type-paragraph-sm-lh)] text-[color:var(--color-text-body)]">
            <code>{`Brand (primitives)  →  Alias (semantic)  →  Mapped (component-facing)

--brand-brand-600      --alias-primary-600     --color-surface-action
--brand-scale-400      --alias-spacing-lg      --spacing-lg
--brand-font-family-*  --alias-border-radius-* --border-radius-md`}</code>
          </pre>
        </div>
        <p className="mt-[var(--spacing-lg)] text-[length:var(--type-paragraph-md-size)] leading-[var(--type-paragraph-md-lh)] text-[color:var(--color-text-body-secondary)]">
          Learn more in{' '}
          <Link href="/foundations/tokens" className="text-[color:var(--color-text-action)] no-underline hover:text-[color:var(--color-text-action-hover)]">
            Tokens
          </Link>
          .
        </p>
      </Section>
    </div>
  );
}

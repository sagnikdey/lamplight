import Link from 'next/link';
import { DocsPageHeader } from '@/components/docs/DocsPageHeader';
import { Section } from '@/components/docs/Section';
import { Callout } from '@/components/docs/Callout';
import { FontFamilyCard, TypeSpecimen } from '@/components/docs/TypeSpecimen';
import { TokenTable } from '@/components/docs/TokenTable';
import {
  fontFamilies,
  fontWeights,
  headingScale,
  paragraphScale,
} from '@/lib/tokens/typography-scale';

export default function TypographyPage() {
  return (
    <div className="mx-auto max-w-[1280px] px-[var(--spacing-xl)] py-[var(--spacing-3xl)] lg:px-[var(--spacing-3xl)]">
      <DocsPageHeader
        title="Typography"
        description="Typography establishes hierarchy and readability across Lamplight products. Three type families — Merriweather, Open Sans, and JetBrains Mono — scale responsively across breakpoints."
      />

      <Section
        id="families"
        title="Font families"
        description="Each family serves a distinct role. Load fonts via next/font in the root layout — never @import in CSS."
      >
        <div className="grid gap-[var(--spacing-xl)] lg:grid-cols-3">
          {fontFamilies.map((font) => (
            <FontFamilyCard
              key={font.name}
              name={font.name}
              token={font.token}
              role={font.role}
              weights={font.weights}
              specimen={font.specimen}
              fontFamily={
                font.token === '--font-heading'
                  ? 'heading'
                  : font.token === '--font-mono'
                    ? 'mono'
                    : 'body'
              }
            />
          ))}
        </div>
      </Section>

      <Section
        id="headings"
        title="Heading scale"
        description="Headings use Merriweather and scale down at 1024px and 640px breakpoints. Sizes are driven by --type-h* CSS variables."
      >
        <div className="flex flex-col gap-[var(--spacing-xl)]">
          {headingScale.map((entry) => (
            <TypeSpecimen key={entry.name} entry={entry} />
          ))}
        </div>
      </Section>

      <Section
        id="paragraphs"
        title="Paragraph scale"
        description="Body copy uses Open Sans. Four sizes cover UI labels, body text, and captions."
      >
        <div className="flex flex-col gap-[var(--spacing-xl)]">
          {paragraphScale.map((entry) => (
            <TypeSpecimen key={entry.name} entry={entry} />
          ))}
        </div>
      </Section>

      <Section
        id="weights"
        title="Font weights"
        description="Weight tokens map to loaded font files. Only use weights that are available for each family."
      >
        <TokenTable
          columns={['token', 'value', 'use']}
          rows={fontWeights.map((w) => ({
            token: w.token,
            value: w.value,
            use: w.name,
          }))}
        />
      </Section>

      <Section
        id="usage"
        title="Usage in code"
        description="Reference typography through token-based Tailwind utilities."
      >
        <div className="rounded-[var(--border-radius-lg)] border border-[color:var(--color-border-default)] bg-[var(--color-surface-sunken)] p-[var(--spacing-xl)]">
          <pre className="overflow-x-auto font-[family-name:var(--font-mono)] text-[length:var(--type-paragraph-sm-size)] leading-[var(--type-paragraph-sm-lh)] text-[color:var(--color-text-body)]">
            <code>{`// Heading
className="font-[family-name:var(--font-heading)]
  text-[length:var(--type-h2-size)]
  leading-[var(--type-h2-lh)]
  text-[color:var(--color-text-headings)]"

// Body
className="font-[family-name:var(--font-body)]
  text-[length:var(--type-paragraph-md-size)]
  leading-[var(--type-paragraph-md-lh)]
  text-[color:var(--color-text-body)]"

// Mono (badges, code)
className="font-[family-name:var(--font-mono)]
  text-[length:var(--type-paragraph-xsm-size)]"`}</code>
          </pre>
        </div>
        <div className="mt-[var(--spacing-lg)] grid gap-[var(--spacing-lg)] md:grid-cols-2">
          <Callout title="Do" variant="do">
            Use <code className="font-[family-name:var(--font-mono)]">text-[length:var(--type-paragraph-sm-size)]</code> for font sizes.
          </Callout>
          <Callout title="Don't" variant="dont">
            Use Tailwind&apos;s built-in <code className="font-[family-name:var(--font-mono)]">text-sm</code> or{' '}
            <code className="font-[family-name:var(--font-mono)]">font-sans</code> — they bypass the Lamplight scale.
          </Callout>
        </div>
      </Section>

      <Section id="related" title="Related">
        <ul className="flex flex-col gap-[var(--spacing-md)] text-[length:var(--type-paragraph-md-size)] leading-[var(--type-paragraph-md-lh)]">
          <li>
            <Link href="/foundations/tokens" className="text-[color:var(--color-text-action)] no-underline hover:text-[color:var(--color-text-action-hover)]">
              Tokens
            </Link>
            {' — '}spacing, radius, and the full token architecture.
          </li>
          <li>
            <Link href="/foundations/color" className="text-[color:var(--color-text-action)] no-underline hover:text-[color:var(--color-text-action-hover)]">
              Color
            </Link>
            {' — '}semantic color tokens for text and surfaces.
          </li>
        </ul>
      </Section>
    </div>
  );
}

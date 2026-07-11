import Link from 'next/link';
import { DocsPageHeader } from '@/components/docs/DocsPageHeader';
import { Section } from '@/components/docs/Section';
import { Callout } from '@/components/docs/Callout';
import { TokenSwatch, PaletteSwatch } from '@/components/docs/TokenSwatch';
import { TokenTable } from '@/components/docs/TokenTable';
import { brandPalettes, colorRoles, mappedColorGroups } from '@/lib/tokens/color-groups';

export default function ColorPage() {
  return (
    <div className="mx-auto max-w-[1280px] px-[var(--spacing-xl)] py-[var(--spacing-3xl)] lg:px-[var(--spacing-3xl)]">
      <DocsPageHeader
        title="Color"
        description="Color distinguishes the Lamplight brand and reinforces consistent experiences across products. Apply color through mapped design tokens — not raw hex values."
      />

      <Section
        id="anatomy"
        title="Color anatomy"
        description="Lamplight organizes color into three categories that work together across light and dark themes."
      >
        <div className="grid gap-[var(--spacing-xl)] md:grid-cols-3">
          <div className="rounded-[var(--border-radius-lg)] border border-[color:var(--color-border-default)] bg-[var(--color-surface-raised)] p-[var(--spacing-xl)] shadow-raised">
            <h3 className="font-[family-name:var(--font-heading)] text-[length:var(--type-paragraph-lg-size)] text-[color:var(--color-text-headings)]">
              Brand colors
            </h3>
            <p className="mt-[var(--spacing-md)] text-[length:var(--type-paragraph-sm-size)] leading-[var(--type-paragraph-sm-lh)] text-[color:var(--color-text-body-secondary)]">
              Saturated ramps exported from Figma. Warm terracotta primary, neutral grays, and semantic palettes for error, warning, success, and information.
            </p>
          </div>
          <div className="rounded-[var(--border-radius-lg)] border border-[color:var(--color-border-default)] bg-[var(--color-surface-raised)] p-[var(--spacing-xl)] shadow-raised">
            <h3 className="font-[family-name:var(--font-heading)] text-[length:var(--type-paragraph-lg-size)] text-[color:var(--color-text-headings)]">
              Neutral colors
            </h3>
            <p className="mt-[var(--spacing-md)] text-[length:var(--type-paragraph-sm-size)] leading-[var(--type-paragraph-sm-lh)] text-[color:var(--color-text-body-secondary)]">
              Gray ramps for backgrounds, text, and borders. They carry no semantic meaning on their own but imply states like disabled when used with mapped tokens.
            </p>
          </div>
          <div className="rounded-[var(--border-radius-lg)] border border-[color:var(--color-border-default)] bg-[var(--color-surface-raised)] p-[var(--spacing-xl)] shadow-raised">
            <h3 className="font-[family-name:var(--font-heading)] text-[length:var(--type-paragraph-lg-size)] text-[color:var(--color-text-headings)]">
              Alpha colors
            </h3>
            <p className="mt-[var(--spacing-md)] text-[length:var(--type-paragraph-sm-size)] leading-[var(--type-paragraph-sm-lh)] text-[color:var(--color-text-body-secondary)]">
              White alpha tokens adapt UI to different background colors and elevations without hardcoding opacity values.
            </p>
          </div>
        </div>
      </Section>

      <Section
        id="applying-tokens"
        title="Applying color with design tokens"
        description="Rather than choosing a shade, select a mapped token. All component-facing color tokens use the --color- prefix and switch automatically between light and dark themes."
      >
        <Callout title="Token naming" variant="info">
          Tokens follow the pattern <code className="font-[family-name:var(--font-mono)]">--color-{'{property}'}-{'{role}'}</code> — for example{' '}
          <code className="font-[family-name:var(--font-mono)]">--color-text-body</code> or{' '}
          <code className="font-[family-name:var(--font-mono)]">--color-surface-action</code>.
        </Callout>
      </Section>

      <Section
        id="roles"
        title="Color roles"
        description="Alias palettes describe the intention behind a color. Mapped tokens inherit these roles for component states."
      >
        <TokenTable
          columns={['token', 'use']}
          rows={colorRoles.map((r) => ({
            token: `--alias-${r.alias}-*`,
            use: `${r.role} — ${r.description}`,
          }))}
        />
      </Section>

      {mappedColorGroups.map((group) => (
        <Section key={group.title} id={group.title.toLowerCase()} title={group.title} description={group.description}>
          <div className="grid gap-[var(--spacing-lg)] sm:grid-cols-2 lg:grid-cols-3">
            {group.tokens.map((token) => (
              <TokenSwatch
                key={token.cssVar}
                name={token.name}
                cssVar={token.cssVar}
                description={token.description}
                showBorder={group.title === 'Text' || group.title === 'Borders'}
              />
            ))}
          </div>
        </Section>
      ))}

      <Section
        id="brand-palettes"
        title="Brand palettes"
        description="Reference only — for design tooling and token authoring. Components must not reference Brand tokens directly."
      >
        <div className="flex flex-col gap-[var(--spacing-2xl)]">
          {brandPalettes.map((palette) => (
            <div key={palette.name}>
              <h3 className="mb-[var(--spacing-md)] font-[family-name:var(--font-heading)] text-[length:var(--type-paragraph-md-size)] text-[color:var(--color-text-headings)]">
                {palette.name}
              </h3>
              <div className="flex gap-[var(--spacing-xs)]">
                {palette.steps.map((step) => (
                  <PaletteSwatch
                    key={step}
                    step={step}
                    cssVar={`${palette.prefix}-${step}`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="dark-mode"
        title="Designing in dark mode"
        description="Mapped tokens support light and dark themes via the data-theme attribute. Never write dark: Tailwind variants for color — tokens handle the switch."
      >
        <div className="grid gap-[var(--spacing-lg)] md:grid-cols-2">
          <Callout title="Do" variant="do">
            Use <code className="font-[family-name:var(--font-mono)]">bg-[var(--color-surface-default)]</code> and let the token layer switch themes automatically.
          </Callout>
          <Callout title="Don't" variant="dont">
            Use <code className="font-[family-name:var(--font-mono)]">bg-white dark:bg-gray-900</code> — this bypasses the token system and breaks consistency.
          </Callout>
        </div>
      </Section>

      <Section id="related" title="Related">
        <ul className="flex flex-col gap-[var(--spacing-md)] text-[length:var(--type-paragraph-md-size)] leading-[var(--type-paragraph-md-lh)]">
          <li>
            <Link href="/foundations/tokens" className="text-[color:var(--color-text-action)] no-underline hover:text-[color:var(--color-text-action-hover)]">
              Tokens
            </Link>
            {' — '}the three-layer architecture and spacing reference.
          </li>
          <li>
            <Link href="/foundations/typography" className="text-[color:var(--color-text-action)] no-underline hover:text-[color:var(--color-text-action-hover)]">
              Typography
            </Link>
            {' — '}font families and responsive type scale.
          </li>
        </ul>
      </Section>
    </div>
  );
}

import Link from 'next/link';
import { DocsPageHeader } from '@/components/docs/DocsPageHeader';
import { Section } from '@/components/docs/Section';
import { Callout } from '@/components/docs/Callout';
import { TokenLayerDiagram } from '@/components/docs/TokenLayerDiagram';
import { SpacingScale } from '@/components/docs/SpacingScale';
import { TokenTable } from '@/components/docs/TokenTable';
import {
  elevationTokens,
  radiusTokens,
  spacingTokens,
  zIndexTokens,
} from '@/lib/tokens/token-layers';

export default function TokensPage() {
  return (
    <div className="mx-auto max-w-[1280px] px-[var(--spacing-xl)] py-[var(--spacing-3xl)] lg:px-[var(--spacing-3xl)]">
      <DocsPageHeader
        title="Tokens"
        description="Design tokens are the single source of truth for every visual property in Lamplight. They are emitted from Figma via Style Dictionary and consumed as CSS custom properties."
      />

      <Section
        id="architecture"
        title="Three-layer architecture"
        description="Each layer adds semantic meaning. Only the bottom layer is consumed by components and application code."
      >
        <TokenLayerDiagram />
        <div className="mt-[var(--spacing-xl)] grid gap-[var(--spacing-lg)] md:grid-cols-2">
          <Callout title="Do" variant="do">
            Reference <code className="font-[family-name:var(--font-mono)]">--color-*</code>,{' '}
            <code className="font-[family-name:var(--font-mono)]">--spacing-*</code>, and{' '}
            <code className="font-[family-name:var(--font-mono)]">--border-radius-*</code> in component code.
          </Callout>
          <Callout title="Don't" variant="dont">
            Reference Brand tokens like <code className="font-[family-name:var(--font-mono)]">--brand-brand-600</code> directly in components, or hardcode hex values.
          </Callout>
        </div>
      </Section>

      <Section
        id="spacing"
        title="Spacing"
        description="Spacing tokens follow a 4px base grid. Use Alias spacing tokens in all padding, margin, and gap values."
      >
        <SpacingScale items={spacingTokens} />
      </Section>

      <Section
        id="radius"
        title="Border radius"
        description="Radius tokens define corner rounding for inputs, cards, modals, and pill-shaped elements."
      >
        <TokenTable
          columns={['token', 'value', 'use']}
          rows={radiusTokens.map((r) => ({ token: r.token, value: r.value, use: r.use }))}
        />
      </Section>

      <Section
        id="elevation"
        title="Elevation"
        description="Four shadow utilities map to Figma effect styles. Pair raised surfaces with shadow-raised, overlays with shadow-overlay."
      >
        <TokenTable
          columns={['token', 'use']}
          rows={elevationTokens.map((e) => ({ token: e.utility, use: `${e.name} — ${e.use}` }))}
        />
      </Section>

      <Section
        id="z-index"
        title="Z-index"
        description="Layering tokens keep overlays, modals, and toasts in predictable stacking order."
      >
        <TokenTable
          columns={['token', 'value', 'use']}
          rows={zIndexTokens.map((z) => ({ token: z.token, value: z.value, use: z.use }))}
        />
      </Section>

      <Section
        id="related"
        title="Related"
        description="Dive deeper into how tokens are applied."
      >
        <ul className="flex flex-col gap-[var(--spacing-md)] text-[length:var(--type-paragraph-md-size)] leading-[var(--type-paragraph-md-lh)]">
          <li>
            <Link href="/foundations/color" className="text-[color:var(--color-text-action)] no-underline hover:text-[color:var(--color-text-action-hover)]">
              Color
            </Link>
            {' — '}semantic color roles and mapped token reference.
          </li>
          <li>
            <Link href="/foundations/typography" className="text-[color:var(--color-text-action)] no-underline hover:text-[color:var(--color-text-action-hover)]">
              Typography
            </Link>
            {' — '}font families, type scale, and responsive sizes.
          </li>
        </ul>
      </Section>
    </div>
  );
}

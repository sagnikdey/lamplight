import * as React from 'react';
import { DocsPageHeader } from '@/components/docs/DocsPageHeader';
import { Section } from '@/components/docs/Section';
import { Callout } from '@/components/docs/Callout';
import { CodeBlock } from '@/components/docs/CodeBlock';
import { PropsTable, type PropDefinition } from '@/components/docs/PropsTable';
import type { ComponentMeta } from '@/lib/docs/components';

export interface ComponentDocLayoutProps {
  meta: ComponentMeta;
  whenToUse: string;
  anatomy?: string;
  usageCode: string;
  accessibility: React.ReactNode;
  props: PropDefinition[];
  children: React.ReactNode;
}

export function ComponentDocLayout({
  meta,
  whenToUse,
  anatomy,
  usageCode,
  accessibility,
  props,
  children,
}: ComponentDocLayoutProps) {
  return (
    <div className="mx-auto max-w-[1280px] px-[var(--spacing-xl)] py-[var(--spacing-3xl)] lg:px-[var(--spacing-3xl)]">
      <DocsPageHeader
        title={meta.name}
        description={meta.description}
      >
        <div className="flex flex-wrap items-center gap-[var(--spacing-md)]">
          <span className="rounded-[var(--border-radius-full)] bg-[var(--color-surface-sunken)] px-[var(--spacing-md)] py-[var(--spacing-xs)] text-[length:var(--type-paragraph-xsm-size)] font-semibold uppercase tracking-wide text-[color:var(--color-text-action)]">
            {meta.category}
          </span>
          {meta.figmaNode ? (
            <span className="text-[length:var(--type-paragraph-xsm-size)] text-[color:var(--color-text-body-secondary)]">
              Figma: {meta.figmaNode}
            </span>
          ) : null}
        </div>
      </DocsPageHeader>

      <Section title="Import">
        <CodeBlock code={meta.importPath} />
      </Section>

      <Section title="When to use" description={whenToUse} />

      {anatomy ? (
        <Section title="Anatomy" description={anatomy} />
      ) : null}

      <Section title="Examples">{children}</Section>

      <Section title="Usage">
        <CodeBlock code={usageCode} />
      </Section>

      <Section title="Props">
        <PropsTable props={props} />
      </Section>

      <Section title="Accessibility">
        <Callout title="Accessibility notes" variant="info">
          {accessibility}
        </Callout>
      </Section>
    </div>
  );
}

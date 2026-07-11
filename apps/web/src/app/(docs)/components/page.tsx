import { ComponentCard } from '@/components/docs/ComponentCard';
import { DocsPageHeader } from '@/components/docs/DocsPageHeader';
import { Section } from '@/components/docs/Section';
import { CodeBlock } from '@/components/docs/CodeBlock';
import { componentCatalog } from '@/lib/docs/components';
import { siteConfig } from '@/lib/docs/site';

export default function ComponentsPage() {
  return (
    <div className="mx-auto max-w-[1280px] px-[var(--spacing-xl)] py-[var(--spacing-3xl)] lg:px-[var(--spacing-3xl)]">
      <DocsPageHeader
        title="Components"
        description="Reusable, token-driven UI building blocks exported from @lamplight/ui. Every component maps to Figma variants and supports light and dark themes automatically."
      />

      <Section
        title="Install and import"
        description="Lamplight is a monorepo package. Import components directly — tokens and styles are wired through the app layout."
      >
        <CodeBlock
          code={`import { Button, Badge, Input } from '@lamplight/ui';

// Tokens are loaded in globals.css
// Theme switching via next-themes + data-theme`}
        />
      </Section>

      <Section
        title="Built with"
        description="This design system demonstrates end-to-end design engineering — from Figma variables to production React components."
      >
        <div className="flex flex-wrap gap-[var(--spacing-sm)]">
          {siteConfig.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-[var(--border-radius-full)] border border-[color:var(--color-border-default)] bg-[var(--color-surface-raised)] px-[var(--spacing-md)] py-[var(--spacing-xs)] text-[length:var(--type-paragraph-sm-size)] text-[color:var(--color-text-body)] shadow-raised"
            >
              {tech}
            </span>
          ))}
        </div>
      </Section>

      <Section title="Component library">
        <div className="grid gap-[var(--spacing-xl)] md:grid-cols-2 xl:grid-cols-3">
          {componentCatalog.map((component) => (
            <ComponentCard
              key={component.slug}
              title={component.name}
              description={component.description}
              href={component.href}
              category={component.category}
            />
          ))}
        </div>
      </Section>
    </div>
  );
}

import Link from 'next/link';
import { FoundationCard } from '@/components/docs/FoundationCard';
import { ComponentCard } from '@/components/docs/ComponentCard';
import { ExternalLinks } from '@/components/docs/ExternalLinks';
import { ThemeToggle } from '@/components/docs/ThemeToggle';
import { foundationCards } from '@/lib/docs/navigation';
import { componentCatalog } from '@/lib/docs/components';
import { siteConfig } from '@/lib/docs/site';

const primaryLinkClass =
  'inline-flex items-center justify-center rounded-[var(--border-radius-full)] bg-[var(--color-surface-action)] px-[var(--spacing-xl)] py-[var(--spacing-lg)] font-[family-name:var(--font-body)] text-[14px] font-semibold uppercase tracking-wide leading-4 text-[color:var(--color-text-on-action)] no-underline transition-colors duration-150 hover:bg-[var(--color-surface-action-hover)]';

const outlineLinkClass =
  'inline-flex items-center justify-center rounded-[var(--border-radius-full)] border border-[color:var(--color-border-action)] bg-transparent px-[var(--spacing-xl)] py-[var(--spacing-lg)] font-[family-name:var(--font-body)] text-[14px] font-semibold uppercase tracking-wide leading-4 text-[color:var(--color-text-action)] no-underline transition-colors duration-150 hover:border-[color:var(--color-border-action-hover)] hover:text-[color:var(--color-text-action-hover)]';

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-surface-page)]">
      <header className="border-b border-[color:var(--color-border-default)] bg-[var(--color-surface-default)]">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-[var(--spacing-xl)] py-[var(--spacing-lg)] lg:px-[var(--spacing-3xl)]">
          <div>
            <p className="font-[family-name:var(--font-heading)] text-[length:var(--type-paragraph-lg-size)] text-[color:var(--color-text-headings)]">
              {siteConfig.name}
            </p>
            <p className="text-[length:var(--type-paragraph-xsm-size)] text-[color:var(--color-text-body-secondary)]">
              {siteConfig.tagline}
            </p>
          </div>
          <div className="flex items-center gap-[var(--spacing-md)]">
            <nav className="hidden items-center gap-[var(--spacing-lg)] sm:flex" aria-label="Primary">
              <Link href="/foundations" className="text-[length:var(--type-paragraph-sm-size)] text-[color:var(--color-text-action)] no-underline hover:text-[color:var(--color-text-action-hover)]">
                Foundations
              </Link>
              <Link href="/components" className="text-[length:var(--type-paragraph-sm-size)] text-[color:var(--color-text-action)] no-underline hover:text-[color:var(--color-text-action-hover)]">
                Components
              </Link>
            </nav>
            <ExternalLinks />
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main>
        <section className="border-b border-[color:var(--color-border-default)] bg-[var(--color-surface-default)]">
          <div className="mx-auto max-w-[1280px] px-[var(--spacing-xl)] py-[var(--spacing-3xl)] lg:px-[var(--spacing-3xl)] lg:py-[calc(var(--spacing-3xl)*2)]">
            <p className="text-[length:var(--type-paragraph-sm-size)] font-semibold uppercase tracking-wide text-[color:var(--color-text-action)]">
              Portfolio project
            </p>
            <h1 className="mt-[var(--spacing-lg)] max-w-[800px] font-[family-name:var(--font-heading)] text-[length:var(--type-h1-size)] leading-[var(--type-h1-lh)] text-[color:var(--color-text-headings)]">
              Explore our design system
            </h1>
            <p className="mt-[var(--spacing-xl)] max-w-[680px] text-[length:var(--type-paragraph-lg-size)] leading-[var(--type-paragraph-lg-lh)] text-[color:var(--color-text-body-secondary)]">
              {siteConfig.description}
            </p>
            <div className="mt-[var(--spacing-lg)] flex flex-wrap gap-[var(--spacing-sm)]">
              {siteConfig.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-[var(--border-radius-full)] border border-[color:var(--color-border-default)] bg-[var(--color-surface-sunken)] px-[var(--spacing-md)] py-[var(--spacing-xs)] text-[length:var(--type-paragraph-xsm-size)] text-[color:var(--color-text-body-secondary)]"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-[var(--spacing-2xl)] flex flex-wrap gap-[var(--spacing-md)]">
              <Link href="/components" className={primaryLinkClass}>
                Browse components
              </Link>
              <Link href="/foundations" className={outlineLinkClass}>
                View foundations
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1280px] px-[var(--spacing-xl)] py-[var(--spacing-3xl)] lg:px-[var(--spacing-3xl)]">
          <h2 className="font-[family-name:var(--font-heading)] text-[length:var(--type-h3-size)] leading-[var(--type-h3-lh)] text-[color:var(--color-text-headings)]">
            Foundations
          </h2>
          <p className="mt-[var(--spacing-md)] max-w-[680px] text-[length:var(--type-paragraph-md-size)] leading-[var(--type-paragraph-md-lh)] text-[color:var(--color-text-body-secondary)]">
            Tokens, color, and typography — the semantic layer every component inherits.
          </p>
          <div className="mt-[var(--spacing-2xl)] grid gap-[var(--spacing-xl)] md:grid-cols-2 lg:grid-cols-3">
            {foundationCards.map((card) => (
              <FoundationCard key={card.href} {...card} />
            ))}
          </div>
        </section>

        <section className="border-t border-[color:var(--color-border-default)] bg-[var(--color-surface-default)]">
          <div className="mx-auto max-w-[1280px] px-[var(--spacing-xl)] py-[var(--spacing-3xl)] lg:px-[var(--spacing-3xl)]">
            <h2 className="font-[family-name:var(--font-heading)] text-[length:var(--type-h3-size)] leading-[var(--type-h3-lh)] text-[color:var(--color-text-headings)]">
              Components
            </h2>
            <p className="mt-[var(--spacing-md)] max-w-[680px] text-[length:var(--type-paragraph-md-size)] leading-[var(--type-paragraph-md-lh)] text-[color:var(--color-text-body-secondary)]">
              Seven production-ready components with live examples, props tables, and accessibility guidance.
            </p>
            <div className="mt-[var(--spacing-2xl)] grid gap-[var(--spacing-xl)] md:grid-cols-2 xl:grid-cols-3">
              {componentCatalog.slice(0, 6).map((component) => (
                <ComponentCard
                  key={component.slug}
                  title={component.name}
                  description={component.description}
                  href={component.href}
                  category={component.category}
                />
              ))}
            </div>
            <Link
              href="/components"
              className="mt-[var(--spacing-xl)] inline-block text-[length:var(--type-paragraph-sm-size)] font-medium text-[color:var(--color-text-action)] no-underline hover:text-[color:var(--color-text-action-hover)]"
            >
              View all components →
            </Link>
          </div>
        </section>

        <section className="border-t border-[color:var(--color-border-default)]">
          <div className="mx-auto max-w-[1280px] px-[var(--spacing-xl)] py-[var(--spacing-3xl)] lg:px-[var(--spacing-3xl)]">
            <div className="grid gap-[var(--spacing-2xl)] lg:grid-cols-2">
              <div>
                <h2 className="font-[family-name:var(--font-heading)] text-[length:var(--type-h4-size)] leading-[var(--type-h4-lh)] text-[color:var(--color-text-headings)]">
                  Figma → code pipeline
                </h2>
                <p className="mt-[var(--spacing-md)] text-[length:var(--type-paragraph-md-size)] leading-[var(--type-paragraph-md-lh)] text-[color:var(--color-text-body-secondary)]">
                  Variables export from Figma, transform through Style Dictionary into CSS custom properties, and flow into Tailwind v4 and React components — with light/dark themes built in.
                </p>
                <a
                  href={siteConfig.figma}
                  className="mt-[var(--spacing-lg)] inline-block text-[length:var(--type-paragraph-sm-size)] font-medium text-[color:var(--color-text-action)] no-underline hover:text-[color:var(--color-text-action-hover)]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Figma token export →
                </a>
              </div>
              <div>
                <h2 className="font-[family-name:var(--font-heading)] text-[length:var(--type-h4-size)] leading-[var(--type-h4-lh)] text-[color:var(--color-text-headings)]">
                  Open source
                </h2>
                <p className="mt-[var(--spacing-md)] text-[length:var(--type-paragraph-md-size)] leading-[var(--type-paragraph-md-lh)] text-[color:var(--color-text-body-secondary)]">
                  Monorepo with npm workspaces, CI that validates token sync, Storybook for component QA, and this documentation site deployed on Vercel.
                </p>
                <a
                  href={siteConfig.github}
                  className="mt-[var(--spacing-lg)] inline-block text-[length:var(--type-paragraph-sm-size)] font-medium text-[color:var(--color-text-action)] no-underline hover:text-[color:var(--color-text-action-hover)]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub →
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[color:var(--color-border-default)]">
        <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-[var(--spacing-md)] px-[var(--spacing-xl)] py-[var(--spacing-xl)] lg:px-[var(--spacing-3xl)]">
          <p className="text-[length:var(--type-paragraph-xsm-size)] text-[color:var(--color-text-body-secondary)]">
            {siteConfig.name} Design System — built by Sagnik Dey
          </p>
          <ExternalLinks />
        </div>
      </footer>
    </div>
  );
}

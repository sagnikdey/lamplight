import { siteConfig } from '@/lib/docs/site';

export function ExternalLinks() {
  return (
    <div className="flex items-center gap-[var(--spacing-sm)]">
      <a
        href={siteConfig.github}
        className="rounded-[var(--border-radius-md)] px-[var(--spacing-sm)] py-[var(--spacing-xs)] text-[length:var(--type-paragraph-sm-size)] text-[color:var(--color-text-action)] no-underline transition-colors duration-150 hover:bg-[var(--color-surface-sunken)] hover:text-[color:var(--color-text-action-hover)]"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
      <a
        href={siteConfig.figma}
        className="rounded-[var(--border-radius-md)] px-[var(--spacing-sm)] py-[var(--spacing-xs)] text-[length:var(--type-paragraph-sm-size)] text-[color:var(--color-text-action)] no-underline transition-colors duration-150 hover:bg-[var(--color-surface-sunken)] hover:text-[color:var(--color-text-action-hover)]"
        target="_blank"
        rel="noopener noreferrer"
      >
        Figma
      </a>
    </div>
  );
}

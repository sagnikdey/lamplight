import * as React from 'react';
import { tokenLayers } from '@/lib/tokens/token-layers';

export function TokenLayerDiagram() {
  return (
    <div className="flex flex-col gap-[var(--spacing-md)] lg:flex-row lg:items-stretch">
      {tokenLayers.map((layer, index) => (
        <React.Fragment key={layer.name}>
          <div className="flex flex-1 flex-col rounded-[var(--border-radius-lg)] border border-[color:var(--color-border-default)] bg-[var(--color-surface-raised)] p-[var(--spacing-xl)] shadow-raised">
            <span className="text-[length:var(--type-paragraph-xsm-size)] font-semibold uppercase tracking-wide text-[color:var(--color-text-action)]">
              Layer {index + 1}
            </span>
            <h3 className="mt-[var(--spacing-sm)] font-[family-name:var(--font-heading)] text-[length:var(--type-paragraph-lg-size)] text-[color:var(--color-text-headings)]">
              {layer.name}
            </h3>
            <p className="mt-[var(--spacing-md)] flex-1 text-[length:var(--type-paragraph-sm-size)] leading-[var(--type-paragraph-sm-lh)] text-[color:var(--color-text-body-secondary)]">
              {layer.description}
            </p>
            <p className="mt-[var(--spacing-lg)] text-[length:var(--type-paragraph-xsm-size)] text-[color:var(--color-text-body-secondary)]">
              {layer.audience}
            </p>
            <ul className="mt-[var(--spacing-md)] flex flex-col gap-[var(--spacing-xs)]">
              {layer.examples.map((example) => (
                <li key={example}>
                  <code className="font-[family-name:var(--font-mono)] text-[length:var(--type-paragraph-xsm-size)] text-[color:var(--color-text-action)]">
                    {example}
                  </code>
                </li>
              ))}
            </ul>
          </div>
          {index < tokenLayers.length - 1 ? (
            <div
              className="hidden items-center text-[color:var(--color-text-body-secondary)] lg:flex"
              aria-hidden
            >
              →
            </div>
          ) : null}
        </React.Fragment>
      ))}
    </div>
  );
}

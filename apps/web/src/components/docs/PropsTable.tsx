import * as React from 'react';
import { cn } from '@lamplight/ui';

export interface PropDefinition {
  name: string;
  type: string;
  defaultValue?: string;
  required?: boolean;
  description: string;
}

export interface PropsTableProps {
  props: PropDefinition[];
  className?: string;
}

export function PropsTable({ props, className }: PropsTableProps) {
  return (
    <div
      className={cn(
        'overflow-x-auto rounded-[var(--border-radius-lg)] border border-[color:var(--color-border-default)]',
        className
      )}
    >
      <table className="w-full min-w-[640px] border-collapse text-left">
        <thead>
          <tr className="border-b border-[color:var(--color-border-bold)] bg-[var(--color-surface-sunken)]">
            {['Prop', 'Type', 'Default', 'Description'].map((col) => (
              <th
                key={col}
                scope="col"
                className="px-[var(--spacing-lg)] py-[var(--spacing-md)] text-[length:var(--type-paragraph-xsm-size)] font-semibold uppercase tracking-wide text-[color:var(--color-text-body-secondary)]"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.map((prop) => (
            <tr key={prop.name} className="border-b border-[color:var(--color-border-default)] last:border-b-0">
              <td className="px-[var(--spacing-lg)] py-[var(--spacing-md)]">
                <code className="font-[family-name:var(--font-mono)] text-[length:var(--type-paragraph-xsm-size)] text-[color:var(--color-text-action)]">
                  {prop.name}
                  {prop.required ? '*' : ''}
                </code>
              </td>
              <td className="px-[var(--spacing-lg)] py-[var(--spacing-md)] font-[family-name:var(--font-mono)] text-[length:var(--type-paragraph-xsm-size)] text-[color:var(--color-text-body-secondary)]">
                {prop.type}
              </td>
              <td className="px-[var(--spacing-lg)] py-[var(--spacing-md)] font-[family-name:var(--font-mono)] text-[length:var(--type-paragraph-xsm-size)] text-[color:var(--color-text-body-secondary)]">
                {prop.defaultValue ?? '—'}
              </td>
              <td className="px-[var(--spacing-lg)] py-[var(--spacing-md)] text-[length:var(--type-paragraph-sm-size)] leading-[var(--type-paragraph-sm-lh)] text-[color:var(--color-text-body)]">
                {prop.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

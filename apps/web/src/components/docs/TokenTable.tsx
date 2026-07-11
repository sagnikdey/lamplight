import * as React from 'react';
import { cn } from '@lamplight/ui';

export interface TokenTableRow {
  token: string;
  value?: string;
  alias?: string;
  use?: string;
}

export interface TokenTableProps {
  columns: Array<'token' | 'value' | 'alias' | 'use'>;
  rows: TokenTableRow[];
  className?: string;
}

const columnLabels = {
  token: 'Token',
  value: 'Value',
  alias: 'Alias',
  use: 'Use',
} as const;

export function TokenTable({ columns, rows, className }: TokenTableProps) {
  return (
    <div
      className={cn(
        'overflow-x-auto rounded-[var(--border-radius-lg)] border border-[color:var(--color-border-default)]',
        className
      )}
    >
      <table className="w-full min-w-[480px] border-collapse text-left">
        <thead>
          <tr className="border-b border-[color:var(--color-border-bold)] bg-[var(--color-surface-sunken)]">
            {columns.map((col) => (
              <th
                key={col}
                scope="col"
                className="px-[var(--spacing-lg)] py-[var(--spacing-md)] text-[length:var(--type-paragraph-xsm-size)] font-semibold uppercase tracking-wide text-[color:var(--color-text-body-secondary)]"
              >
                {columnLabels[col]}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr
              key={row.token}
              className="border-b border-[color:var(--color-border-default)] last:border-b-0"
            >
              {columns.map((col) => (
                <td
                  key={col}
                  className="px-[var(--spacing-lg)] py-[var(--spacing-md)] text-[length:var(--type-paragraph-sm-size)] leading-[var(--type-paragraph-sm-lh)] text-[color:var(--color-text-body)]"
                >
                  {col === 'token' ? (
                    <code className="font-[family-name:var(--font-mono)] text-[length:var(--type-paragraph-xsm-size)] text-[color:var(--color-text-action)]">
                      {row.token}
                    </code>
                  ) : (
                    row[col] ?? '—'
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

'use client';

import * as React from 'react';
import { DocsSidebar } from './DocsSidebar';
import { DocsHeader } from './DocsHeader';

export function DocsShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-[var(--color-surface-page)]">
      <DocsSidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <DocsHeader />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}

import type { NextConfig } from 'next';
import path from 'node:path';

const nextConfig: NextConfig = {
  // Static export — all docs pages are pre-rendered; works with Vercel monorepo
  // root deploys without requiring Root Directory = apps/web in dashboard.
  output: 'export',
  // Tells Next.js to bundle these workspace packages through its compiler
  // instead of treating them as external node_modules. Required for CSS
  // imports from @lamplight/tokens and @lamplight/ui to resolve correctly.
  transpilePackages: ['@lamplight/tokens', '@lamplight/ui'],
  // Required for monorepo deployments — trace files from the workspace root.
  outputFileTracingRoot: path.join(__dirname, '../..'),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

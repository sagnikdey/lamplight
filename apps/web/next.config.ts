import type { NextConfig } from 'next';
import path from 'node:path';

const nextConfig: NextConfig = {
  // Tells Next.js to bundle these workspace packages through its compiler
  // instead of treating them as external node_modules. Required for CSS
  // imports from @lamplight/tokens and @lamplight/ui to resolve correctly.
  transpilePackages: ['@lamplight/tokens', '@lamplight/ui'],
  // Required for monorepo deployments — trace files from the workspace root.
  outputFileTracingRoot: path.join(__dirname, '../..'),
};

export default nextConfig;

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Tells Next.js to bundle these workspace packages through its compiler
  // instead of treating them as external node_modules. Required for CSS
  // imports from @lamplight/tokens and @lamplight/ui to resolve correctly.
  transpilePackages: ['@lamplight/tokens', '@lamplight/ui'],
};

export default nextConfig;

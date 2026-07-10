import type { StorybookConfig } from '@storybook/react-vite';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import { fileURLToPath } from 'url';

// Storybook 10 loads config as an ES module — __dirname isn't defined.
// Derive it from import.meta.url.
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
  // Glob is relative to this file (packages/ui/.storybook/)
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  viteFinal: (config) => {
    config.plugins = [...(config.plugins ?? []), tailwindcss()];
    config.resolve = config.resolve ?? {};
    config.resolve.alias = {
      ...config.resolve.alias,
      // Resolve workspace package to local src so Vite doesn't need to build it first
      '@lamplight/ui': path.resolve(__dirname, '../src'),
      // Resolve token CSS by package name (mirrors next.config.ts transpilePackages)
      '@lamplight/tokens': path.resolve(__dirname, '../../../tokens'),
    };
    return config;
  },
};

export default config;

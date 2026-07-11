export interface TokenLayer {
  name: string;
  cssPrefix: string;
  description: string;
  audience: string;
  examples: string[];
}

export const tokenLayers: TokenLayer[] = [
  {
    name: 'Brand',
    cssPrefix: '--brand-',
    description:
      'Raw primitives exported from Figma — color ramps, spacing scales, font families, and z-index values.',
    audience: 'Token authors and design tooling only. Never reference directly in components.',
    examples: ['--brand-brand-600', '--brand-scale-400', '--brand-font-family-body'],
  },
  {
    name: 'Alias',
    cssPrefix: '--alias-',
    description:
      'Semantic names that map brand primitives to intent — primary, neutral, error, spacing, and radius.',
    audience: 'Spacing, radius, and elevation in components. Color aliases inform mapped tokens.',
    examples: ['--alias-primary-600', '--alias-spacing-lg', '--alias-border-radius-md'],
  },
  {
    name: 'Mapped',
    cssPrefix: '--color-',
    description:
      'Component-facing tokens with light and dark values. This is the layer every UI surface consumes.',
    audience: 'All component and app code. Use --color-*, --spacing-*, --border-radius-* only.',
    examples: ['--color-surface-action', '--color-text-body', '--spacing-xl'],
  },
];

export const spacingTokens = [
  { token: '--spacing-xs', alias: '--alias-spacing-xs', value: '4px', use: 'Tight internal padding' },
  { token: '--spacing-sm', alias: '--alias-spacing-sm', value: '8px', use: 'Compact padding, icon gaps' },
  { token: '--spacing-md', alias: '--alias-spacing-md', value: '12px', use: 'Default component padding' },
  { token: '--spacing-lg', alias: '--alias-spacing-lg', value: '16px', use: 'Gaps between elements' },
  { token: '--spacing-xl', alias: '--alias-spacing-xl', value: '24px', use: 'Section-internal spacing' },
  { token: '--spacing-2xl', alias: '--alias-spacing-2xl', value: '32px', use: 'Between sections' },
  { token: '--spacing-3xl', alias: '--alias-spacing-3xl', value: '48px', use: 'Page-level spacing' },
] as const;

export const radiusTokens = [
  { token: '--border-radius-none', value: '0', use: 'Square corners' },
  { token: '--border-radius-sm', value: '2px', use: 'Subtle rounding' },
  { token: '--border-radius-md', value: '4px', use: 'Inputs, cards' },
  { token: '--border-radius-lg', value: '8px', use: 'Modals, larger panels' },
  { token: '--border-radius-xl', value: '16px', use: 'Feature cards' },
  { token: '--border-radius-full', value: '999px', use: 'Pills, badges, buttons' },
] as const;

export const elevationTokens = [
  { name: 'Raised', utility: 'shadow-raised', use: 'Cards lifted above the default surface' },
  { name: 'Overlay', utility: 'shadow-overlay', use: 'Dropdowns and popovers' },
  { name: 'Modal', utility: 'shadow-modal', use: 'Dialogs and modals' },
  { name: 'Toast', utility: 'shadow-toast', use: 'Notifications and toasts' },
] as const;

export const zIndexTokens = [
  { token: '--brand-z-index-dropdown', value: '100', use: 'Dropdown menus' },
  { token: '--brand-z-index-sticky', value: '200', use: 'Sticky headers and sidebars' },
  { token: '--brand-z-index-overlay', value: '300', use: 'Modal backdrops' },
  { token: '--brand-z-index-modal', value: '400', use: 'Modal content' },
  { token: '--brand-z-index-popover', value: '500', use: 'Popovers and tooltips' },
  { token: '--brand-z-index-toast', value: '600', use: 'Toast notifications' },
] as const;

export interface ColorToken {
  name: string;
  cssVar: string;
  description: string;
}

export interface ColorGroup {
  title: string;
  description: string;
  tokens: ColorToken[];
}

export const mappedColorGroups: ColorGroup[] = [
  {
    title: 'Text',
    description: 'Foreground copy for headings, body, actions, and semantic states.',
    tokens: [
      { name: 'Headings', cssVar: '--color-text-headings', description: 'Heading text' },
      { name: 'Body', cssVar: '--color-text-body', description: 'Primary body copy' },
      { name: 'Body secondary', cssVar: '--color-text-body-secondary', description: 'Helper and secondary text' },
      { name: 'Action', cssVar: '--color-text-action', description: 'Links and interactive text' },
      { name: 'Action hover', cssVar: '--color-text-action-hover', description: 'Hovered links' },
      { name: 'Action active', cssVar: '--color-text-action-active', description: 'Pressed links' },
      { name: 'On action', cssVar: '--color-text-on-action', description: 'Text on filled action surfaces' },
      { name: 'Inverse', cssVar: '--color-text-inverse', description: 'Text on inverted surfaces' },
      { name: 'Disabled', cssVar: '--color-text-disabled', description: 'Disabled labels' },
      { name: 'Error', cssVar: '--color-text-error', description: 'Error messages' },
      { name: 'Success', cssVar: '--color-text-success', description: 'Success messages' },
      { name: 'Warning', cssVar: '--color-text-warning', description: 'Warning messages' },
      { name: 'Information', cssVar: '--color-text-information', description: 'Info messages' },
    ],
  },
  {
    title: 'Icons',
    description: 'Fill colors for Lucide icons and inline SVGs.',
    tokens: [
      { name: 'Default', cssVar: '--color-icon-default', description: 'Default icon fill' },
      { name: 'Action', cssVar: '--color-icon-action', description: 'Interactive icon' },
      { name: 'Action hover', cssVar: '--color-icon-action-hover', description: 'Hovered interactive icon' },
      { name: 'Action active', cssVar: '--color-icon-action-active', description: 'Pressed interactive icon' },
      { name: 'On action', cssVar: '--color-icon-on-action', description: 'Icon on filled button' },
      { name: 'Disabled', cssVar: '--color-icon-disabled', description: 'Disabled icon' },
      { name: 'Error', cssVar: '--color-icon-error', description: 'Error icon' },
      { name: 'Success', cssVar: '--color-icon-success', description: 'Success icon' },
      { name: 'Warning', cssVar: '--color-icon-warning', description: 'Warning icon' },
      { name: 'Information', cssVar: '--color-icon-information', description: 'Info icon' },
    ],
  },
  {
    title: 'Surfaces',
    description: 'Background fills for pages, cards, overlays, and semantic states.',
    tokens: [
      { name: 'Page', cssVar: '--color-surface-page', description: 'Outermost page background' },
      { name: 'Default', cssVar: '--color-surface-default', description: 'Card and panel background' },
      { name: 'Raised', cssVar: '--color-surface-raised', description: 'Elevated cards — pair with shadow-raised' },
      { name: 'Overlay', cssVar: '--color-surface-overlay', description: 'Dropdowns, modals — pair with shadow-overlay' },
      { name: 'Sunken', cssVar: '--color-surface-sunken', description: 'Wells, input backgrounds, code blocks' },
      { name: 'Action', cssVar: '--color-surface-action', description: 'Primary button background' },
      { name: 'Action hover', cssVar: '--color-surface-action-hover', description: 'Hovered primary button' },
      { name: 'Action active', cssVar: '--color-surface-action-active', description: 'Pressed primary button' },
      { name: 'Disabled', cssVar: '--color-surface-disabled', description: 'Disabled element fill' },
      { name: 'Error', cssVar: '--color-surface-error', description: 'Error state fill' },
      { name: 'Success', cssVar: '--color-surface-success', description: 'Success state fill' },
      { name: 'Warning', cssVar: '--color-surface-warning', description: 'Warning state fill' },
      { name: 'Information', cssVar: '--color-surface-information', description: 'Info state fill' },
    ],
  },
  {
    title: 'Borders',
    description: 'Dividers, focus rings, and semantic outline colors.',
    tokens: [
      { name: 'Default', cssVar: '--color-border-default', description: 'Default dividers' },
      { name: 'Bold', cssVar: '--color-border-bold', description: 'High-emphasis borders' },
      { name: 'Action', cssVar: '--color-border-action', description: 'Interactive element border' },
      { name: 'Action hover', cssVar: '--color-border-action-hover', description: 'Hovered interactive border' },
      { name: 'Action active', cssVar: '--color-border-action-active', description: 'Pressed interactive border' },
      { name: 'Focus', cssVar: '--color-border-focus', description: 'Focus ring colour' },
      { name: 'Disabled', cssVar: '--color-border-disabled', description: 'Disabled border' },
      { name: 'Error', cssVar: '--color-border-error', description: 'Error border' },
      { name: 'Success', cssVar: '--color-border-success', description: 'Success border' },
      { name: 'Warning', cssVar: '--color-border-warning', description: 'Warning border' },
      { name: 'Information', cssVar: '--color-border-information', description: 'Info border' },
    ],
  },
];

export const colorRoles = [
  {
    role: 'Primary',
    alias: 'primary',
    description: 'Brand terracotta — primary actions, links, and focus states.',
  },
  {
    role: 'Neutral',
    alias: 'neutral',
    description: 'Default text, backgrounds, and borders. No semantic meaning attached.',
  },
  {
    role: 'Error',
    alias: 'error',
    description: 'Dangerous outcomes, validation failures, and destructive actions.',
  },
  {
    role: 'Warning',
    alias: 'warning',
    description: 'Caution states that prevent mistakes before they happen.',
  },
  {
    role: 'Success',
    alias: 'success',
    description: 'Favorable outcomes and confirmation feedback.',
  },
  {
    role: 'Information',
    alias: 'information',
    description: 'Informative UI and in-progress states.',
  },
] as const;

export const brandPalettes = [
  {
    name: 'Brand primary',
    prefix: '--brand-brand',
    steps: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '1000'],
  },
  {
    name: 'Neutral',
    prefix: '--brand-gray',
    steps: ['100', '200', '300', '400', '500', '600', '700', '800', '900', '1000'],
  },
  {
    name: 'Error',
    prefix: '--brand-red',
    steps: ['100', '200', '300', '400', '500', '600', '700', '800', '900', '1000'],
  },
  {
    name: 'Warning',
    prefix: '--brand-yellow',
    steps: ['100', '200', '300', '400', '500', '600', '700', '800', '900', '1000'],
  },
  {
    name: 'Success',
    prefix: '--brand-green',
    steps: ['100', '200', '300', '400', '500', '600', '700', '800', '900', '1000'],
  },
  {
    name: 'Information',
    prefix: '--brand-blue',
    steps: ['100', '200', '300', '400', '500', '600', '700', '800', '900', '1000'],
  },
] as const;

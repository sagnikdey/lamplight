export interface FontFamily {
  name: string;
  token: string;
  cssVar: string;
  role: string;
  weights: string[];
  specimen: string;
}

export const fontFamilies: FontFamily[] = [
  {
    name: 'Merriweather',
    token: '--font-heading',
    cssVar: '--brand-font-family-headings',
    role: 'Headings (h1–h6)',
    weights: ['400 Regular', '700 Bold'],
    specimen: 'Crafted for clarity',
  },
  {
    name: 'Open Sans',
    token: '--font-body',
    cssVar: '--brand-font-family-body',
    role: 'Body copy, UI labels, inputs',
    weights: ['400 Regular', '500 Medium', '600 Semi-bold', '700 Bold'],
    specimen: 'Readable at every size',
  },
  {
    name: 'JetBrains Mono',
    token: '--font-mono',
    cssVar: '--brand-font-family-mono',
    role: 'Code, badges, numeric data',
    weights: ['400 Regular', '700 Bold'],
    specimen: 'const token = "mapped";',
  },
];

export interface TypeScaleEntry {
  name: string;
  sizeVar: string;
  lhVar: string;
  desktop: { size: string; lh: string };
  tablet: { size: string; lh: string };
  mobile: { size: string; lh: string };
  font: 'heading' | 'body' | 'mono';
}

export const headingScale: TypeScaleEntry[] = [
  {
    name: 'h1',
    sizeVar: '--type-h1-size',
    lhVar: '--type-h1-lh',
    desktop: { size: '60px', lh: '72px' },
    tablet: { size: '54px', lh: '64px' },
    mobile: { size: '48px', lh: '56px' },
    font: 'heading',
  },
  {
    name: 'h2',
    sizeVar: '--type-h2-size',
    lhVar: '--type-h2-lh',
    desktop: { size: '48px', lh: '56px' },
    tablet: { size: '44px', lh: '52px' },
    mobile: { size: '40px', lh: '48px' },
    font: 'heading',
  },
  {
    name: 'h3',
    sizeVar: '--type-h3-size',
    lhVar: '--type-h3-lh',
    desktop: { size: '40px', lh: '48px' },
    tablet: { size: '36px', lh: '42px' },
    mobile: { size: '32px', lh: '36px' },
    font: 'heading',
  },
  {
    name: 'h4',
    sizeVar: '--type-h4-size',
    lhVar: '--type-h4-lh',
    desktop: { size: '32px', lh: '36px' },
    tablet: { size: '28px', lh: '32px' },
    mobile: { size: '24px', lh: '28px' },
    font: 'heading',
  },
  {
    name: 'h5',
    sizeVar: '--type-h5-size',
    lhVar: '--type-h5-lh',
    desktop: { size: '24px', lh: '28px' },
    tablet: { size: '22px', lh: '26px' },
    mobile: { size: '20px', lh: '24px' },
    font: 'heading',
  },
  {
    name: 'h6',
    sizeVar: '--type-h6-size',
    lhVar: '--type-h6-lh',
    desktop: { size: '20px', lh: '24px' },
    tablet: { size: '20px', lh: '24px' },
    mobile: { size: '20px', lh: '24px' },
    font: 'heading',
  },
];

export const paragraphScale: TypeScaleEntry[] = [
  {
    name: 'Paragraph large',
    sizeVar: '--type-paragraph-lg-size',
    lhVar: '--type-paragraph-lg-lh',
    desktop: { size: '20px', lh: '24px' },
    tablet: { size: '20px', lh: '24px' },
    mobile: { size: '20px', lh: '24px' },
    font: 'body',
  },
  {
    name: 'Paragraph medium',
    sizeVar: '--type-paragraph-md-size',
    lhVar: '--type-paragraph-md-lh',
    desktop: { size: '16px', lh: '20px' },
    tablet: { size: '16px', lh: '20px' },
    mobile: { size: '16px', lh: '20px' },
    font: 'body',
  },
  {
    name: 'Paragraph small',
    sizeVar: '--type-paragraph-sm-size',
    lhVar: '--type-paragraph-sm-lh',
    desktop: { size: '14px', lh: '20px' },
    tablet: { size: '14px', lh: '20px' },
    mobile: { size: '14px', lh: '20px' },
    font: 'body',
  },
  {
    name: 'Paragraph extra small',
    sizeVar: '--type-paragraph-xsm-size',
    lhVar: '--type-paragraph-xsm-lh',
    desktop: { size: '12px', lh: '16px' },
    tablet: { size: '12px', lh: '16px' },
    mobile: { size: '12px', lh: '16px' },
    font: 'body',
  },
];

export const fontWeights = [
  { name: 'Regular', value: '400', token: '--brand-font-weight-regular' },
  { name: 'Medium', value: '500', token: '--brand-font-weight-medium' },
  { name: 'Semi-bold', value: '600', token: '--brand-font-weight-semi-bold' },
  { name: 'Bold', value: '700', token: '--brand-font-weight-bold' },
] as const;

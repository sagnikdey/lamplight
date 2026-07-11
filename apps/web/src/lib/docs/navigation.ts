import { componentCatalog } from './components';

export interface NavItem {
  label: string;
  href: string;
  description?: string;
  children?: NavItem[];
  badge?: string;
}

export const docsNavigation: NavItem[] = [
  {
    label: 'Foundations',
    href: '/foundations',
    children: [
      { label: 'Overview', href: '/foundations' },
      { label: 'Tokens', href: '/foundations/tokens' },
      { label: 'Color', href: '/foundations/color' },
      { label: 'Typography', href: '/foundations/typography' },
    ],
  },
  {
    label: 'Components',
    href: '/components',
    children: [
      { label: 'Overview', href: '/components' },
      ...componentCatalog.map((c) => ({ label: c.name, href: c.href })),
    ],
  },
];

export const foundationCards = [
  {
    title: 'Tokens',
    description:
      'Understand the three-layer token architecture — Brand, Alias, and Mapped — that powers every visual decision.',
    href: '/foundations/tokens',
  },
  {
    title: 'Color',
    description:
      'Semantic color roles for text, icons, surfaces, and borders. Mapped tokens switch automatically between light and dark.',
    href: '/foundations/color',
  },
  {
    title: 'Typography',
    description:
      'Merriweather headings, Open Sans body copy, and JetBrains Mono for code — with a responsive type scale.',
    href: '/foundations/typography',
  },
] as const;

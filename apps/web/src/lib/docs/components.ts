export interface ComponentMeta {
  name: string;
  slug: string;
  href: string;
  category: 'Atoms' | 'Molecules';
  description: string;
  importPath: string;
  figmaNode?: string;
}

export const componentCatalog: ComponentMeta[] = [
  {
    name: 'Button',
    slug: 'button',
    href: '/components/button',
    category: 'Atoms',
    description: 'Primary actions in Fill, Outline, and Ghost variants with pill shape and focus rings.',
    importPath: "import { Button } from '@lamplight/ui';",
    figmaNode: 'buttonStandard',
  },
  {
    name: 'Badge',
    slug: 'badge',
    href: '/components/badge',
    category: 'Atoms',
    description: 'Status indicators with sentiment, contrast, and optional dot-only display.',
    importPath: "import { Badge } from '@lamplight/ui';",
  },
  {
    name: 'Input',
    slug: 'input',
    href: '/components/input',
    category: 'Atoms',
    description: 'Composite text field with label, hint, caption, icons, and validation states.',
    importPath: "import { Input } from '@lamplight/ui';",
  },
  {
    name: 'Checkbox',
    slug: 'checkbox',
    href: '/components/checkbox',
    category: 'Atoms',
    description: 'Single and indeterminate checkboxes with label positioning and disabled states.',
    importPath: "import { Checkbox, IndeterminateCheckbox } from '@lamplight/ui';",
  },
  {
    name: 'Divider',
    slug: 'divider',
    href: '/components/divider',
    category: 'Atoms',
    description: 'Horizontal, vertical, and labelled dividers for content separation.',
    importPath: "import { Divider } from '@lamplight/ui';",
  },
  {
    name: 'Icon wrapper',
    slug: 'icon-wrapper',
    href: '/components/icon-wrapper',
    category: 'Atoms',
    description: 'Consistent icon sizing and semantics for Lucide icons across the system.',
    importPath: "import { IconWrapper } from '@lamplight/ui';",
  },
  {
    name: 'Card',
    slug: 'card',
    href: '/components/card',
    category: 'Molecules',
    description: 'Composable card with shadow variants and header, media, body, and footer slots.',
    importPath: "import { Card, CardHeader, CardBody, CardFooter } from '@lamplight/ui';",
    figmaNode: '136:946',
  },
];

export const componentCards = componentCatalog.map(({ name, href, description, category }) => ({
  title: name,
  href,
  description,
  category,
}));

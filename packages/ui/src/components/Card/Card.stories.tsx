import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../Button/Button';
import {
  Card,
  CardHeader,
  CardMedia,
  CardBody,
  CardFooter,
} from './Card';

const meta: Meta<typeof Card> = {
  title: 'Molecules/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Composable card with Shadow variants (Raised, Overlay, None) and boolean section toggles matching the Figma Card component set (node 136:946). Use sub-components for custom content or booleans for the default demo layout.',
      },
    },
  },
  argTypes: {
    shadow: { control: 'select', options: ['raised', 'overlay', 'none'] },
    disabled: { control: 'boolean' },
    header: { control: 'boolean', description: 'Figma: header' },
    image: { control: 'boolean', description: 'Figma: image' },
    body: { control: 'boolean', description: 'Figma: body' },
    footer: { control: 'boolean', description: 'Figma: buttons' },
  },
  args: {
    shadow: 'raised',
    disabled: false,
    header: true,
    image: true,
    body: true,
    footer: true,
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Playground: Story = {};

// ─── Shadow × section matrix (mirrors Figma canvas 136:503) ─────────────────

const shadowVariants = ['raised', 'overlay', 'none'] as const;
const sectionCombos = [
  { label: 'All sections', header: true, image: true, body: true, footer: true },
  { label: 'No image', header: true, image: false, body: true, footer: true },
  { label: 'Body only', header: false, image: false, body: true, footer: false },
  { label: 'Image + body', header: false, image: true, body: true, footer: false },
] as const;

export const Matrix: Story = {
  name: 'Shadow × sections (Figma)',
  render: () => (
    <div className="flex flex-col gap-12 p-8 bg-[var(--color-surface-page)]">
      {shadowVariants.map((shadow) => (
        <div key={shadow}>
          <p className="mb-4 text-xs tracking-widest text-[color:var(--color-text-body-secondary)] capitalize">
            Shadow: {shadow}
          </p>
          <div className="flex flex-wrap gap-6">
            {sectionCombos.map((combo) => (
              <Card
                key={combo.label}
                shadow={shadow}
                header={combo.header}
                image={combo.image}
                body={combo.body}
                footer={combo.footer}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};

export const Disabled: Story = {
  name: 'Disabled state',
  render: () => (
    <div className="flex flex-wrap gap-6 p-8 bg-[var(--color-surface-page)]">
      <Card shadow="raised" header image body footer />
      <Card shadow="raised" header image body footer disabled />
      <Card shadow="overlay" header image body footer disabled />
      <Card shadow="none" header image body footer disabled />
    </div>
  ),
};

// ─── Composed examples (mirrors Figma l-examples) ────────────────────────────

export const ArticleCard: Story = {
  name: 'Example — Article',
  render: () => (
    <Card shadow="overlay" className="border border-[color:var(--color-border-default)]">
      <CardMedia src="https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=200&fit=crop" alt="Abstract art" />
      <CardBody
        title="10 Amazing Abstract Art pieces of New york"
        subtitle="New York's South Island brims with majestic landscapes and at..."
      />
      <CardFooter direction="horizontal">
        <CardHeader
          className="flex-1"
          avatar={
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48'%3E%3Crect width='48' height='48' rx='24' fill='%23cdcdcd'/%3E%3C/svg%3E"
              alt=""
              className="size-12 rounded-full"
            />
          }
          title="Jasper Doe"
          subtitle="@jasperdoe"
        />
        <Button variant="outline" size="sm">
          Read More
        </Button>
      </CardFooter>
    </Card>
  ),
};

export const TestimonialCard: Story = {
  name: 'Example — Testimonial',
  render: () => (
    <Card shadow="overlay" className="border border-[color:var(--color-border-default)]">
      <CardBody
        subtitle={
          <span className="font-[family-name:var(--font-heading)] italic leading-6 text-[color:var(--color-text-body)]">
            &ldquo;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.&rdquo;
          </span>
        }
      />
      <CardHeader
        avatar={
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48'%3E%3Crect width='48' height='48' rx='24' fill='%23cdcdcd'/%3E%3C/svg%3E"
            alt=""
            className="size-12 rounded-full"
          />
        }
        title="Guy Hawkins"
        subtitle="UK Ambassador"
      />
    </Card>
  ),
};

export const DarkMode: Story = {
  name: 'Dark mode',
  render: () => (
    <div
      data-theme="dark"
      className="rounded-[var(--border-radius-lg)] bg-[var(--color-surface-page)] p-8"
    >
      <Card shadow="raised" header image body footer />
    </div>
  ),
};

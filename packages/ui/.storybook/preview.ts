import type { Preview } from '@storybook/react';
import './globals.css';

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Colour mode',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [
          { value: 'light', icon: 'sun',  title: 'Light' },
          { value: 'dark',  icon: 'moon', title: 'Dark'  },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      // Set data-theme on <html> so the CSS variable layers switch correctly
      document.documentElement.setAttribute('data-theme', context.globals['theme']);
      document.documentElement.style.background = 'var(--color-surface-page)';
      return Story();
    },
  ],
  parameters: {
    backgrounds: { disable: true }, // we use CSS var backgrounds, not Storybook backgrounds
    controls:    { matchers: { color: /(background|color)$/i } },
    layout:      'centered',
  },
};

export default preview;

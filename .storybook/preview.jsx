/** @type { import('@storybook/react').Preview } */

import '../src/styles/response.css';
import '../src/styles/global.css';
import '../src/styles/heatmap.css';

import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import chakraTheme from '../src/styles/chakraTheme';

export const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

const withBrowserRouter = (Story) => (
  <BrowserRouter>
    <ChakraProvider theme={chakraTheme}>
      <Story />
    </ChakraProvider>
  </BrowserRouter>
);

export const decorators = [withBrowserRouter];

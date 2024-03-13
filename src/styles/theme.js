import { extendTheme } from '@chakra-ui/react';
import localFont from 'next/font/local';

const pretendard = localFont({
  src: '../assets/fonts/PretendardVariable.woff2',
});

const theme = extendTheme({
  fonts: {
    body: pretendard.style.fontFamily,
    heading: pretendard.style.fontFamily,
  },
  colors: {
    black: '#242529',
    white: '#ffffff',

    gray: {
      100: '#F1F5F9',
      200: '#E2E8F0',
      300: '#CBD5E1',
      400: '#94A3B8',
    },
  },
});

export default theme;

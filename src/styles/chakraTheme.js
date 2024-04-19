import { extendTheme } from '@chakra-ui/react';

const chakraTheme = extendTheme({
  colors: {
    black: '#000000',
    white: '#ffffff',
    primary: '#0A0A0D',
    secondary: '#334155',
    tertiary: '#64748B', //확인필요
    brand: '#10B981',
    brandBold: '#065F46',
    info: '#4F46E5',
    infoBold: '#3730A3',
    success: '#0D9488',
    successBold: '#065F46',
    warning: '#F59E0B',
    warningBold: '#B45309',
    background: '#36e7bd',
    gray: {
      100: '#F1F5F9',
      200: '#E2E8F0',
      300: '#CBD5E1',
      400: '#94A3B8',
      500: '#64748B',
      600: '#475569',
      700: '#334155',
      800: '#1E293B',
      900: '#0A0A0D',
    },
  },
  components: {
    Button: {
      variants: {
        greenGreen: { bg: '#F0FDFA', color: '#047857' },
        grayWhite: { bg: '#475569', color: '#FFFFFF' },
      },
    },
  },
  breakpoints: {
    sm: '360px',
    md: '768px',
    lg: '1024px',
    xl: '1440px',
  },
});

export default chakraTheme;

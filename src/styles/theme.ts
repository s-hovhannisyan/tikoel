import { CustomTheme } from '../types';

const theme: CustomTheme = {
  colors: {
    primary: '#ffffff', // rgb(255, 222, 89)',
    secondary: '#0A1929',
    white: '#FFFFFF',
    dark: '#333333',
    yellow: 'rgb(255, 222, 89)',
  },
  typography: {
    fontFamily: 'Montserrat, sans-serif',
    fontWeights: {
      regular: 400,
      medium: 500,
      bold: 700,
      black: 900,
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      xxl: '1.5rem',
    },
  },
  breakpoints: {
    mobile: '@media (max-width: 480px)',
    tablet: '@media (max-width: 768px)',
    desktop: '@media (min-width: 1024px)',
  },
};

export default theme;

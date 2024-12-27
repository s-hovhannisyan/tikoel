export interface CustomTheme {
  colors: {
    primary: string;
    secondary: string;
    white: string;
    dark: string;
    yellow: string;
  };
  typography: {
    fontFamily: string;
    fontWeights: {
      regular: number;
      medium: number;
      bold: number;
      black: number;
    };
    fontSize: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
  };
  breakpoints: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
}
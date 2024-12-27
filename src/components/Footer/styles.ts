import { createUseStyles } from 'react-jss';

import { CustomTheme } from 'types';

const useStyles = createUseStyles((theme: CustomTheme) => ({
  footer: {
    backgroundColor: theme.colors.secondary,
    color: theme.colors.white,
    padding: '2rem',
    textAlign: 'center',
  },
  socialLinks: {
    marginTop: '1rem',
    '& a': {
      color: theme.colors.white,
      margin: '0 1rem',
      textDecoration: 'none',
      fontSize: '1.2rem',
      transition: 'color 0.3s ease',
      '&:hover': {
        color: theme.colors.primary,
      },
    },
  },
}));

export default useStyles;

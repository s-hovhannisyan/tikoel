import { createUseStyles } from 'react-jss';
import { CustomTheme } from 'types';

type StyleProps = {
  theme: CustomTheme;
  withBackground: boolean;
};

const useStyles = createUseStyles({
  navbar: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    width: '100%',
    top: 0,
    zIndex: 1000,
    transition: 'background-color 0.3s ease',
    backgroundColor: ({ withBackground }: StyleProps) =>
      withBackground ? 'rgba(0, 0, 0, 0.5)' : 'transparent',
  },

  container: {
    padding: '1rem 4rem',
    maxWidth: '1200px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  logo: {
    '& img': {
      transition: 'height 0.1s ease',
      height: ({ withBackground }: StyleProps) => (withBackground ? 40 : 80),
    },
  },
  navLinks: {
    display: 'flex',
    gap: '2rem',
    '& a': {
      backgroundColor: 'transparent',
      color: ({ theme }: StyleProps) => theme.colors.primary,
      borderStyle: 'solid',
      borderWidth: '1px',
      borderColor: ({ theme }: StyleProps) => theme.colors.primary,
      padding: ({ withBackground }: StyleProps) => (withBackground ? '0.5rem 1rem' : '1rem'),
      textDecoration: 'none',
      fontWeight: 500,
      transition: 'background-color 0.3s ease, padding 0.1s ease',
      '&:hover': {
        backgroundColor: ({ theme }: StyleProps) => theme.colors.primary,
        color: ({ theme }: StyleProps) => theme.colors.dark,
      },
    },
  },
});

export default useStyles;

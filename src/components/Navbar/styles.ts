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
      withBackground ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.5)',
    
    '@media (max-width: 768px)': {
      position: 'absolute',
      backgroundColor: ({ withBackground }: StyleProps) =>
        withBackground ? 'rgba(0, 0, 0, 0)' : 'rgba(0, 0, 0, 0)',
    },
  },

  container: {
    padding: '1rem 4rem',
    maxWidth: '1200px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',

    '@media (max-width: 768px)': {
      padding: '1rem',
    },
  },
  logo: {
    '& img': {
      transition: 'height 0.1s ease',
      height: ({ withBackground }: StyleProps) => (withBackground ? 40 : 80),
      '@media (max-width: 768px)': {
        height: ({ withBackground }: StyleProps) => (withBackground ? 40 : 40),
      },
    },
  },

  menu: {},

  menuBurgerWrapper: {
    display: 'none',
    '@media (max-width: 768px)': {
      display: 'block',
    },
    backgroundColor: ({ theme }: StyleProps) => theme.colors.secondary,
    padding: '4px',
    borderRadius: '4px',
    
  },

  menuBurger: {
    display: 'none',
    maskImage: 'url(/images/burger.svg)',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    width: '1.5rem',
    height: '1.5rem',
    cursor: 'pointer',
    backgroundColor: ({ theme }: StyleProps) => theme.colors.primary,
    '@media (max-width: 768px)': {
      display: 'block',
    },
  },

  menuBackground: {
    '@media (max-width: 768px)': {
      position: 'fixed',
      zIndex: -1,
      width: 0,
      height: 0,
      background: 'transparent',
      '&.active': {
        display: 'block',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, .5)',
        transition: 'background-color 0.3s ease',
        zIndex: 1,
      }
    },
  },

  navLinks: {
    display: 'flex',
    gap: '2rem',

    '@media (max-width: 768px)': {
      backgroundColor: ({ theme, withBackground }: StyleProps) =>
        withBackground ? theme.colors.secondary : theme.colors.secondary,
      position: 'fixed',
      top: 0,
      left: 0,
      minWidth: '50%',
      height: '100%',
      zIndex: 1000,
      flexDirection: 'column',
      gap: '.5rem', 
      paddingTop: '30px',
      paddingLeft: '0',
      paddingRight: '0',
      paddingBottom: '0',
      transform: 'translateX(-100%)',
      transition: 'transform 0.3s ease',
      
      '&.active': {
        transform: 'translateX(0%)',
      },
    },
    '& a': {
      backgroundColor: 'transparent',
      color: ({ theme }: StyleProps) => theme.colors.primary,
      borderStyle: 'solid',
      borderWidth: '1px',
      borderColor: ({ theme }: StyleProps) => theme.colors.primary,
      padding: ({ withBackground }: StyleProps) => (withBackground ? '0.5rem 1rem' : '1rem'),
      textDecoration: 'none',
      fontWeight: 500,
      transition: 'background-color 0.3s ease, padding 0.1s ease, color 0.3s ease',
      '&:hover': {
        backgroundColor: ({ theme }: StyleProps) => theme.colors.primary,
        color: ({ theme }: StyleProps) => theme.colors.dark,
      },

      '@media (max-width: 768px)': {
        borderStyle: 'none',
        borderWidth: '0',
      },
    },
  },
});

export default useStyles;


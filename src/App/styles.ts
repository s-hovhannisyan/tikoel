import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  '@global': {
    ':root': {
      fontFamily: 'Lato, Helvetica, sans-serif',
      lineHeight: '1.5',
      fontWeight: '400',
      fontSynthesis: 'none',
      textRendering: 'optimizeLegibility',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
    },

    body: {
      margin: 0,
      display: 'flex',
      flex: 1,
      placeItems: 'center',
      minWidth: '320px',
      minHeight: '100vh',
      backgroundImage: 'url(/tikoel/images/background.jpeg)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center center',
      fontFamily: 'Lato, Helvetica, sans-serif',
    },

    button: {
      borderRadius: '8px',
      border: '1px solid transparent',
      padding: '0.6em 1.2em',
      fontSize: '1em',
      fontWeight: '500',
      fontFamily: 'inherit',
      cursor: 'pointer',
      transition: 'border-color 0.25s',
    },
    'button:hover': {
      borderColor: '#646cff',
    },
    'button:focus, button:focus-visible': {
      outline: '4px auto -webkit-focus-ring-color',
    },
    
    'h1:': {
      fontSize: '3.2em',
      lineHeight: '1.1',
    },

    '#root': {
      flexGrow: 1,
    },
  },
  app: {
  },
  sections: {
    display: 'flex',
    flexDirection: 'column',
    gap: '3rem',
    // backgroundColor: ({ theme }: StyleProps) => theme.colors.secondary,
  },
});

export default useStyles;


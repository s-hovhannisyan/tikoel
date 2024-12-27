import { createUseStyles } from 'react-jss';

import { CustomTheme } from 'types';

const useStyles = createUseStyles((theme: CustomTheme) => ({
  section: {
    backgroundColor: theme.colors.primary,
    padding: '1rem 2rem 4rem 2rem',
    textAlign: 'center',
  },
  heading: {
    color: theme.colors.dark,
    marginBottom: '1rem',
    marginTop: '1rem',
    fontSize: '1.5rem',
    fontWeight: 'normal',
    fontFamily: 'Phudu',
  },
  subheading: {
    color: theme.colors.dark,
    fontSize: '2.5rem',
    marginBottom: '3rem',
    marginTop: '1rem',
    lineHeight: '1',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
    maxWidth: 1200,
    margin: '0 auto',
    [theme.breakpoints.tablet]: {
      gridTemplateColumns: '1fr',
    },
  },
  card: {
    padding: '2rem',
    backgroundColor: theme.colors.white,
    borderRadius: 10,
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'translateY(-5px)',
    },
    '& img': {
      width: 64,
      marginBottom: '1rem',
    },
    '& h4': {
      color: theme.colors.dark,
      marginBottom: '1rem',
    },
  },
}));

export default useStyles;

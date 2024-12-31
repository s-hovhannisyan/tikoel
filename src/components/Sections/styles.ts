import { createUseStyles } from 'react-jss';

import { CustomTheme } from 'types';

const useStyles = createUseStyles((theme: CustomTheme) => ({
  section: {
    backgroundColor: theme.colors.primary,
    padding: '1rem 2rem 4rem 2rem',
    textAlign: 'center',
    minHeight: '50vh',
    borderBottomStyle: 'solid',
    borderBottomWidth: '1px',
    borderBottomColor: '#d6d6d6', // theme.colors.dark,
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
    boxShadow: '0 4px 20px 3px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
  icon: {
    width: 150,
    height: 150,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    borderRadius: 10,
  },
}));

export default useStyles;

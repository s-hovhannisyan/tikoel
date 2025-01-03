import { createUseStyles } from 'react-jss';

import { CustomTheme } from 'types';

const useStyles = createUseStyles((theme: CustomTheme) => ({
  section: {
    position: 'relative',
    // padding: '5rem 0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem',
    position: 'relative',
    width: 'calc(100% - 2rem)',
  },
  header: {
    textAlign: 'center',
    marginBottom: '3rem',
  },
  title: {
    fontFamily: 'Phudu',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: '0.5rem',
  },
  subtitle: {
    fontFamily: 'Jost',
    fontSize: '2.5rem',
    margin: 0,
    color: theme.colors.yellow,
    textAlign: 'left',
    '@media (max-width: 768px)': {
      fontSize: '1.5rem',
    },
    '& a': {
      color: 'inherit',
      textDecoration: 'inherit',
    },
  },
  contactInfo: {
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  formWrapper: {
    maxWidth: '56rem',
    margin: '0 auto',
  },
  formContainer: {
    backgroundColor: theme.colors.yellow,
    borderRadius: '0.5rem',
    padding: '2rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  inputGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '1.5rem',
    '@media (min-width: 768px)': {
      gridTemplateColumns: '1fr 1fr',
    },
  },
  input: {
    width: 'auto',
    padding: '0.75rem 1rem',
    borderRadius: '0.375rem',
    border: '1px solid #d1d5db',
    '&:focus': {
      outline: 'none',
      boxShadow: '0 0 0 2px rgba(253, 224, 71, 0.5)',
    },
  },
  textarea: {
    width: 'auto',
    padding: '0.75rem 1rem',
    borderRadius: '0.375rem',
    border: '1px solid #d1d5db',
    resize: 'none',
    minHeight: '8rem',
    '&:focus': {
      outline: 'none',
      boxShadow: '0 0 0 2px rgba(253, 224, 71, 0.5)',
    },
  },
  buttonContainer: {
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'transparent',
    color: theme.colors.dark,
    padding: '0.75rem 2rem',
    borderRadius: '0.375rem',
    textTransform: 'uppercase',
    fontWeight: 500,
    cursor: 'pointer',
    transition: 'background-color 0.3s, border-color 0.3s',
    border: `1px solid ${theme.colors.dark}`,
    '&:hover': {
      borderColor: theme.colors.primary,
      // backgroundColor: theme.colors.primary,
    },
  },
}));

export default useStyles;

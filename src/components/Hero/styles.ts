import { createUseStyles } from 'react-jss';
import { CustomTheme } from 'types';

type StyleProps = {
  theme: CustomTheme;
};

const useStyles = createUseStyles({
  hero: {
    maxWidth: 1200,
    height: '50vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    color: ({ theme }: StyleProps) => theme.colors.white,
    padding: '0 2rem',
    margin: '0 auto',
    '@media (max-width: 768px)': {
      height: '100vh',
    },
  },
  title: {
    fontFamily: 'Phudu',
    fontSize: '4rem',
    marginBottom: '1rem',
    letterSpacing: '2px',
  },
  subtitle: {
    fontFamily: 'Jost',
    fontSize: '1.2rem',
    maxWidth: 600,
  },
});

export default useStyles;

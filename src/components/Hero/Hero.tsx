import { forwardRef } from 'react';
import theme from 'styles/theme';

import useStyles from './styles';

const Hero = forwardRef((_, ref) => {
  const classes = useStyles({ theme });
  return (
    <section className={classes.hero} ref={ref as React.RefObject<HTMLDivElement>} id="hero">
      <h1 className={classes.title}>High Technologies</h1>
      <p className={classes.subtitle}>
        We offer the most qualified solutions and equipment
      </p>
    </section>
  );
});

export default Hero;

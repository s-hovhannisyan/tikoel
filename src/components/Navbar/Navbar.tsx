import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

import theme from 'styles/theme';

import useStyles from './styles';

const Navbar: React.FC = ({ withBackground = false }: { withBackground?: boolean }) => {
  const classes = useStyles({ theme, withBackground });

  const menuStyle = clsx({
    [classes.navbar]: true,
    withBackground: withBackground,
  });

  return (
    <nav className={menuStyle}>
      <div className={classes.container}>
        <div className={classes.logo}>
          <img src="/tikoel/images/logo.png" alt="Tikoel Logo" />
        </div>
        <div className={classes.navLinks}>
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/partners">Partners</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

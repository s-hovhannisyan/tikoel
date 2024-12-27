import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

import theme from 'styles/theme';

import useStyles from './styles';

const Navbar: React.FC = ({ withBackground = false }: { withBackground?: boolean }) => {
  const [isActive, setIsActive] = useState(false);
  const classes = useStyles({ theme, withBackground });

  const handleMenuBurgerClick = useCallback(() => {
    setIsActive(!isActive);
  }, [isActive]);

  const menuStyle = clsx({
    [classes.navbar]: true,
    withBackground: withBackground,
  });

  const menuBackgroundClasses = clsx({
    [classes.menuBackground]: true,
    active: isActive,
  });

  const navLinksClasses = clsx({
    [classes.navLinks]: true,
    active: isActive,
  });

  return (
    <nav className={menuStyle}>
      <div className={classes.container}>
        <div className={classes.logo}>
          <img src="/images/logo.png" alt="Tikoel Logo" />
        </div>
        
        <div className={classes.menu}>
          <div className={classes.menuBurgerWrapper} onClick={handleMenuBurgerClick}>
            <div className={classes.menuBurger} />
          </div>

          <div className={menuBackgroundClasses} onClick={handleMenuBurgerClick} />
          <div className={navLinksClasses}>
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/partners">Partners</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

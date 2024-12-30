import React, { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import clsx from 'clsx';

import theme from 'styles/theme';

import useStyles from './styles';

type NavbarProps = {
  withBackground?: boolean;
  sections: {
    id: string;
    heading: string;
    subheading: string;
    navigation: {
      title: string;
      link: string;
    };
  }[];
  activeNav: string | null;
};

const Navbar: React.FC<NavbarProps> = ({ withBackground = false, sections, activeNav }: NavbarProps) => {
  const [isActive, setIsActive] = useState(false);
  const classes = useStyles({ theme, withBackground });

  const { hash } = useLocation()

  useEffect(() => {
    jumpToSection(hash.replace('#', ''))
  }, []);

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

  const jumpToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId);
    setIsActive(false)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

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
            {sections.map((section) => (
              <a key={section.id} className={activeNav === section.id ? 'active' : ''} onClick={() => jumpToSection(section.id)}>{section.navigation.title}</a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

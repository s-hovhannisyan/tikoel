// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import React, { useEffect, useState, useRef } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'react-jss';

import Navbar from 'components/Navbar';
import Hero from 'components/Hero';
import Sections from 'components/Sections';
import Footer from 'components/Footer';
// import ContactUs from 'components/ContactUs';
import { useGlobalFonts } from 'styles/fonts';
import theme from 'styles/theme';

import useStyles from './styles';
import sections from './data';

const App: React.FC = () => {
  useGlobalFonts();
  const classes = useStyles({ theme });

  const heroRef = useRef<HTMLDivElement>(null);
  const [isOutOfViewport, setIsOutOfViewport] = useState(false);

  const checkVisibility = () => {
    if (heroRef.current) {
      const rect = heroRef.current.getBoundingClientRect();
      const out =
        (rect.top * -1) > rect.height - 80 ||
        rect.bottom >
          (window.innerHeight || document.documentElement.clientHeight) ||
        rect.right > (window.innerWidth || document.documentElement.clientWidth);

      setIsOutOfViewport(out);
    }
  };

  useEffect(() => {
    // Initial check
    checkVisibility();

    // Check on scroll and resize
    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);

    return () => {
      window.removeEventListener('scroll', checkVisibility);
      window.removeEventListener('resize', checkVisibility);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className={classes.app}>
          <Navbar withBackground={isOutOfViewport} />
          <Hero ref={heroRef} />
          <div className={classes.sections}>
            {sections.map((section) => {
              return (
                <Sections key={section.id} {...section} />
              )
            })}
          </div>
          {/* <ContactUs /> */}
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;

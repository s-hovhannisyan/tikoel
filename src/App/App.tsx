// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import React, { useEffect, useState, useRef, useCallback } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'react-jss';

import Navbar from 'components/Navbar';
import Hero from 'components/Hero';
import Sections from 'components/Sections';
import Footer from 'components/Footer';
import ContactUs from 'components/ContactUs';
import { useGlobalFonts } from 'styles/fonts';
import theme from 'styles/theme';

import useStyles from './styles';
import sections from './data';

const App: React.FC = () => {
  useGlobalFonts();
  const classes = useStyles({ theme });
  const [activeNav, setActiveNav] = useState<string | null>(null);
  const [, setSectionsElements] = useState<HTMLDivElement[] | null[] | null>(null);

  const heroRef = useRef<HTMLDivElement>(null);

  const [isOutOfViewport, setIsOutOfViewport] = useState(false);

  const checkVisibility = useCallback(() => {
    if (heroRef.current) {
      const rect = heroRef.current.getBoundingClientRect();
      const out =
        (rect.top * -1) > rect.height - 80 ||
        rect.bottom >
          (window.innerHeight || document.documentElement.clientHeight) ||
        rect.right > (window.innerWidth || document.documentElement.clientWidth);

      setIsOutOfViewport(out);
    }
  }, []);

  const setNewSectionsElements = useCallback((elements: HTMLDivElement | null) => {
    if (elements) {
      setSectionsElements((prevElements: HTMLDivElement[] | null[] | null) => [...(prevElements || []), elements]);
    }
  }, []);

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
  }, [checkVisibility]);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className={classes.app}>
          <Navbar withBackground={isOutOfViewport} sections={sections} activeNav={activeNav} />
          <Hero ref={heroRef} />
          <div className={classes.sections}>
            {sections.map((section) => {
              return (
                <Sections key={section.id} {...section} setActiveNav={setActiveNav} setSectionsElements={setNewSectionsElements} />
              )
            })}
          </div>
          <ContactUs setActiveNav={setActiveNav} setSectionsElements={setNewSectionsElements} />
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;

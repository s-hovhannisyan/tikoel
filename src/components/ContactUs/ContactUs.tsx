import { useRef, useEffect } from 'react';

import useInViewport from 'hooks/useInViewport';

import Form from './Form';
import useStyles from './styles';

const ContactUs = ({ withForm = false, setActiveNav, setSectionsElements }: { withForm?: boolean, setActiveNav: (nav: string | null) => void; setSectionsElements: (elements: HTMLDivElement | null) => void; }) => {
  const classes = useStyles();
  
  const ref = useRef<HTMLDivElement>(null);

  const { isInViewport } = useInViewport(ref);

  useEffect(() => {
    if (isInViewport) {
      setActiveNav('contact-us');
    } else {
      setActiveNav(null);
    }
  }, [isInViewport, setActiveNav]);

  useEffect(() => {
    if (ref.current) {
      setSectionsElements(ref.current);
    }
  }, [setSectionsElements]);

  return (
    <section className={classes.section} data-id="contact-us" id="contact-us" ref={ref}>
      
      <div className={classes.container}>
        <div className={classes.header}>
          <h2 className={classes.title}>Contact Us</h2>
          <p className={classes.subtitle}>Mobile: <a href='tel:+374 98 020304'>+374 98 02 03 04</a></p>
          <p className={classes.subtitle}>Email address: <a href='mailto:tikoel@tikoel.com'>tikoel@tikoel.com</a></p>
        </div>

        {withForm && <Form /> }
      </div>
    </section>
  );
};

export default ContactUs;

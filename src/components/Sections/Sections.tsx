import { useEffect, useRef } from 'react';
import useStyles from './styles';

import useInViewport from 'hooks/useInViewport';

type SectionsProps = {
  heading: string;
  subheading: string;
  id: string;
  cards: {
    icon: string;
    title: string;
    description: string;
  }[];
  setActiveNav: (nav: string) => void;
  setSectionsElements: (elements: HTMLDivElement | null) => void;
};

const Sections = ({
  heading,
  subheading,
  id,
  cards,
  setActiveNav,
  setSectionsElements,
}: SectionsProps) => {
  const classes = useStyles();

  const ref = useRef<HTMLDivElement>(null);

  const { isInViewport } = useInViewport(ref);

  useEffect(() => {
    if (isInViewport) {
      setActiveNav(id);
    }
  }, [isInViewport, setActiveNav, id]);

  useEffect(() => {
    if (ref.current) {
      setSectionsElements(ref.current);
    }
  }, [setSectionsElements]);

  return (
    <section className={classes.section} data-id={id} key={id} ref={ref} id={id}>
      <h2 className={classes.heading}>{heading}</h2>
      <h3 className={classes.subheading}>{subheading}</h3>
      
      <div className={classes.grid}>
        {cards.map((card) => (
          <div className={classes.card} key={card.title}>
            <div className={classes.icon} style={{ backgroundImage: `url(${card.icon})` }} />
            <h4>{card.title}</h4>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sections;

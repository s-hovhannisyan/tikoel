import React from 'react';

import useStyles from './styles';

type SectionsProps = {
  heading: string;
  subheading: string;
  id: string;
  cards: {
    icon: string;
    title: string;
    description: string;
  }[];
};

const Sections: React.FC<SectionsProps> = ({
  heading,
  subheading,
  cards,
  id,
}: SectionsProps) => {
  const classes = useStyles();

  return (
    <section className={classes.section} data-id={id} key={id}>
      <h2 className={classes.heading}>{heading}</h2>
      <h3 className={classes.subheading}>{subheading}</h3>
      
      <div className={classes.grid}>
        {cards.map((card) => (
          <div className={classes.card} key={card.title}>
            <img src={card.icon} alt={card.title} />
            <h4>{card.title}</h4>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sections;

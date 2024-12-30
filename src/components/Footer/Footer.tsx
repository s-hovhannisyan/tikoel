import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

import useStyles from './styles';

const Footer: React.FC = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <p></p>
      <p>© 2024. All Rights Reserved.</p>
      <div className={classes.socialLinks}>
        <a href="#facebook"><FontAwesomeIcon icon={faFacebookF} /></a>
        <a href="#instagram"><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="#twitter"><FontAwesomeIcon icon={faTwitter} /></a>
      </div>
    </footer>
  );
};

export default Footer;

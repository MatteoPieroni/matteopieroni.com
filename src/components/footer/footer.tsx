import * as React from 'react';

import { LinkedIn } from '../icons/LinkedIn';
import { Mail } from '../icons/Mail';

import styles from './footer.module.scss';

export const Footer: () => JSX.Element = () => {
  return (
    <footer className={styles.footer}>
      <h2 className={styles.title}>Where to find me?</h2>
      <div className={styles.social}>
        <a href="https://www.linkedin.com/in/pieronimatteo/" target="_blank" rel="noopener noreferrer" className={styles.link}>
          <LinkedIn />
        </a>
        <a href="mailto:matteopieroni6@gmail.com" className={styles.link}>
          <Mail />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

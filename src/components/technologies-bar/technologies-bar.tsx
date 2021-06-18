import * as React from 'react';

import { Css3 } from '../icons/Css3';
import { Angular } from '../icons/Angular';
import { Drupal } from '../icons/Drupal';
import { GraphQL } from '../icons/Graphql';
import { Html5 } from '../icons/Html5';
import { JS } from '../icons/Javascript';
import { JQuery } from '../icons/Jquery';
import { ReactLogo } from '../icons/React';
import { Redux } from '../icons/Redux';
import { Wordpress } from '../icons/Wordpress';

import styles from './technologies-bar.module.scss';

export const TechnologiesBar: () => JSX.Element = () => {
  return (
    <section className={styles.bar}>
      <h2>Technologies</h2>
      <div className={styles.iconContainer}>
        <ul>
          <li><Html5 /></li>
          <li><Css3 /></li>
          <li><JS /></li>
          <li><ReactLogo /></li>
          <li><Redux /></li>
          <li><Angular /></li>
          <li><GraphQL /></li>
          <li><Drupal /></li>
          <li><JQuery /></li>
          <li><Wordpress /></li>
        </ul>
      </div>
    </section>
  );
};

export default TechnologiesBar;

import * as React from 'react';

import { Workplaces } from '../../data/Workplaces';
import { WorkPlace } from '../workplace/workplace';

import styles from './work-timeline.module.scss';

export const WorkTimeline: () => JSX.Element = () => {
  return (
    <section className={styles.timeline}>
      <h2>Work experience</h2>
      {Workplaces.map(workplace => (
        <WorkPlace company={workplace} key={workplace.name} />
      ))}
    </section>
  );
};

export default WorkTimeline;

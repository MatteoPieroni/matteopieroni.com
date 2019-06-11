import * as React from 'react';

import { Workplaces } from '../data/Workplaces';
import WorkPlace from './WorkPlace';

export const WorkTimeline: React.FunctionComponent = () => {
  return (
    <section>
      <h2>Work experience</h2>
      {Workplaces.map(workplace => (
        <WorkPlace company={workplace} key={workplace.name} />
      ))}
    </section>
  );
};

export default WorkTimeline;

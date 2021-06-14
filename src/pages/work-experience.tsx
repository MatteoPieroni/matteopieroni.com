import * as React from 'react';

import { Workplaces } from '../data/Workplaces';
import { WorkPlace } from '../components/WorkPlace';

export const WorkTimeline: () => JSX.Element = () => {
  return (
    <main>
      <h1>Work experience</h1>
      {Workplaces.map(workplace => (
        <WorkPlace company={workplace} key={workplace.name} />
      ))}
    </main>
  );
};

export default WorkTimeline;

import * as React from 'react';

import { Workplaces } from '../data/Workplaces';
import WorkPlace from './WorkPlace';

export const WorkTimeline: React.FunctionComponent = () => {
  return (
    <>
      {Workplaces.map(workplace => (
        <WorkPlace company={workplace} key={workplace.name} />
      ))}
    </>
  );
};

export default WorkTimeline;

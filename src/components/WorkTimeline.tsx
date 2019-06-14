import * as React from 'react';
import styled from 'styled-components';

import { Workplaces } from '../data/Workplaces';
import WorkPlace from './WorkPlace';

const StyledSection = styled.section`
  margin-top: 1.5rem;
`;

export const WorkTimeline: React.FunctionComponent = () => {
  return (
    <StyledSection>
      <h2>Work experience</h2>
      {Workplaces.map(workplace => (
        <WorkPlace company={workplace} key={workplace.name} />
      ))}
    </StyledSection>
  );
};

export default WorkTimeline;

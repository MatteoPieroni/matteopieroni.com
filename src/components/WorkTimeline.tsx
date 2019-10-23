import * as React from 'react';
import styled from 'styled-components';

import { Workplaces } from '../data/Workplaces';
import { WorkPlace } from './WorkPlace';

const StyledSection = styled.section`
  margin-top: 2.5rem;
  h2 {
    text-align: center;
    text-decoration: underline;
  }
`;

export const WorkTimeline: () => JSX.Element = () => {
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

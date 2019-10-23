import * as React from 'react';
import styled from 'styled-components';

import { PersonalProject, IPersonalProject } from './PersonalProject';
import { projects } from '../data/PersonalProjects';
import { ResponsiveGrid } from './SharedStyles/ResponsiveGrid';

const StyledDiv = styled(ResponsiveGrid)`
  margin-top: 2.5rem;

  h2 {
    text-align: center;
    text-decoration: underline;

    @media (min-width: 768px) {
      grid-column: 1 / span 2;
    }

    @media (min-width: 1200px) {
      grid-column: 1 / span 4;
    }
  }
`;

export const PersonalProjects: () => JSX.Element = () => {
  return (
    <section>
      <StyledDiv>
        <h2>Personal Projects</h2>
        {projects.map(project => (
          <PersonalProject key={project.url} project={project} />
        ))}
      </StyledDiv>
    </section>
  );
};

export default PersonalProjects;

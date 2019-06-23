import * as React from 'react';
import styled from 'styled-components';

import { PersonalProject, IPersonalProject } from './PersonalProject';
import { projects } from '../data/PersonalProjects';

const StyledSection = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 2.5rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1rem;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 1rem;
  }

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

export const PersonalProjects: React.FunctionComponent = () => {
  return (
    <StyledSection>
      <h2>Personal Projects</h2>
      {projects.map(project => (
        <PersonalProject key={project.url} project={project} />
      ))}
    </StyledSection>
  );
};

export default PersonalProjects;

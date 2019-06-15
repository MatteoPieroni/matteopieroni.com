import * as React from 'react';
import styled from 'styled-components';

import { PersonalProject, IPersonalProject } from './PersonalProject';
import { projects } from '../data/PersonalProjects';

const StyledSection = styled.section`
  margin-top: 2.5rem;
  h2 {
    text-align: center;
    text-decoration: underline;
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

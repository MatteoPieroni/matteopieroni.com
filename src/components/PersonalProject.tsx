import * as React from 'react';
import styled from 'styled-components';

export interface IPersonalProject {
  name: string;
  description: string;
  url: string;
  noteOnUrl?: string;
  sourceUrl: string;
}

interface IPersonalProjectProps {
  project: IPersonalProject;
}

const StyledDiv = styled.div`
  a {
    display: block;
  }
`;

export const PersonalProject: React.FunctionComponent<
  IPersonalProjectProps
> = ({ project }) => {
  return (
    <StyledDiv>
      <a href={project.url} target="_blank">
        <h6>{project.name}</h6>
      </a>
      <p>{project.description}</p>
      <a href={project.url} target="_blank">
        See project {project.noteOnUrl && `(${project.noteOnUrl})`}
      </a>
      <a href={project.sourceUrl} target="_blank">
        Source on Github
      </a>
    </StyledDiv>
  );
};

export default PersonalProject;

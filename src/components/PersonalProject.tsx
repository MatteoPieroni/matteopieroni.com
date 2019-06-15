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
  margin-top: 1.5rem;
  h6 {
    margin-top: 0;
    margin-bottom: 0;
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
      <br />
      <a href={project.sourceUrl} target="_blank">
        Source on Github
      </a>
    </StyledDiv>
  );
};

export default PersonalProject;

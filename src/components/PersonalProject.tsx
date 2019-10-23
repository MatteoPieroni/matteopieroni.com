import * as React from 'react';
import styled from 'styled-components';
import { IStyledProps } from '../pages/App';

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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 1.5rem;
  border-top: 3.5px solid
    ${(props: IStyledProps) => props.theme.colors.secondary};
  border-radius: 5px;
  background: ${(props: IStyledProps) => props.theme.colors.card};
  .body,
  .footer {
    padding: 1rem;
  }
  .footer {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    background: ${(props: IStyledProps) =>
      props.theme.colors.backgroundLighter};
  }
  h6 {
    margin-top: 0;
    margin-bottom: 0;
  }
`;

export const PersonalProject: (props: IPersonalProjectProps) => JSX.Element = ({
  project,
}) => {
  return (
    <StyledDiv>
      <div className="body">
        <a href={project.url} target="_blank">
          <h6>{project.name}</h6>
        </a>
        <p>{project.description}</p>
      </div>
      <div className="footer">
        <a href={project.url} target="_blank">
          See project {project.noteOnUrl && `(${project.noteOnUrl})`}
        </a>
        <br />
        <a href={project.sourceUrl} target="_blank">
          Source on Github
        </a>
      </div>
    </StyledDiv>
  );
};

export default PersonalProject;

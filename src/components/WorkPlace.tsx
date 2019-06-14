import * as React from 'react';
import styled from 'styled-components';
import GliderComponent from 'react-glider-carousel';

import Project from './Project';

interface ICompany {
  name: string;
  dates: string;
  place: string;
  description: string;
  tech: string;
  projects?: IProject[];
  listOfLinks?: string[];
}

interface IProject {
  projectTitle: string;
  text: string;
  topics?: string[];
}

interface IWorkPlaceProps {
  company: ICompany;
}

const StyledDiv = styled.div`
  margin-top: 2.5rem;
  &:first-child {
    margin-top: 0;
  }
  h3 {
    margin: 1rem auto 0 auto;
  }
  .date-place {
    margin-top: 0;
  }
  p {
    white-space: pre-wrap;
  }
  h5 {
    margin-top: 1.5rem;
    margin-bottom: 0;
  }
`;

export const WorkPlace: React.FunctionComponent<IWorkPlaceProps> = ({
  company,
}) => {
  return (
    <StyledDiv>
      <h3>{company.name}</h3>
      <p className="date-place">
        {company.dates} - {company.place}
      </p>
      <p>{company.description}</p>
      <p>
        <strong>Tech used:</strong> {company.tech}
      </p>
      {company.projects && (
        <div>
          <h5>Most interesting projects</h5>
          <div className="full-width">
            <GliderComponent>
              {company.projects.map(project => (
                <Project
                  title={project.projectTitle}
                  text={project.text}
                  topics={project.topics}
                  key={project.projectTitle}
                />
              ))}
            </GliderComponent>
          </div>
        </div>
      )}
      {company.listOfLinks && (
        <div>
          <h5>Examples of realised websites</h5>
          <ul>
            {company.listOfLinks.map(link => (
              <li key={link}>
                <a href={link}>{link}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </StyledDiv>
  );
};

export default WorkPlace;

import * as React from 'react';
import styled from 'styled-components';

import { Project } from './Project';
import { Website } from './Website';
import { ResponsiveGrid } from './SharedStyles/ResponsiveGrid';

interface ICompany {
  name: string;
  dates: string;
  place: string;
  description: string;
  tech: string;
  projects?: IProject[];
  listOfLinks?: IWebsite[];
}

interface IProject {
  projectTitle: string;
  text: string;
  topics?: string[];
}

interface IWebsite {
  link: string;
  image: string;
}

interface IWorkPlaceProps {
  company: ICompany;
}

const StyledDiv = styled.div`
  margin-bottom: 2.5rem;
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

  h4 {
    margin-top: 2.5rem;
    margin-bottom: 0;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    margin: 0 auto;
    padding: 1rem;
    max-width: 1500px;
    list-style: none;

    @media (min-width: 600px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1200px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;

export const WorkPlace: (props: IWorkPlaceProps) => JSX.Element = ({
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
          <h4>Most interesting projects</h4>
          <div className="full-width">
            <ul>
              {company.projects.map(project => (
                <li key={project.projectTitle}>
                  <Project
                    title={project.projectTitle}
                    text={project.text}
                    topics={project.topics}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      {company.listOfLinks && (
        <div>
          <h4>Examples of realised websites</h4>
          <ResponsiveGrid>
            {company.listOfLinks.map(link => (
              <Website key={link.link} link={link.link} image={link.image} />
            ))}
          </ResponsiveGrid>
        </div>
      )}
    </StyledDiv>
  );
};

export default WorkPlace;

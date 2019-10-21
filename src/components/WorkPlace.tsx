import * as React from 'react';
import styled from 'styled-components';
import GliderComponent from 'react-glider-carousel';

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
    margin-top: 1.5rem;
    margin-bottom: 0;
  }
  .glider-track {
    padding: 0 calc((100vw - 1200px) / 2);
  }
`;

const responsiveGliderSettings = [
  {
    breakpoint: 767.5,
    settings: {
      slidesToShow: 2,
    },
  },
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
    },
  },
  {
    breakpoint: 1200,
    settings: {
      slidesToShow: 4,
    },
  },
];

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
          <h4>Most interesting projects</h4>
          <div className="full-width">
            <GliderComponent
              settings={{
                draggable: true,
                responsive: responsiveGliderSettings,
              }}
            >
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

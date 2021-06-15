import * as React from 'react';

import { Project } from '../project/project';
import { Website } from '../website/website';
import { ResponsiveGrid } from '../responsive-grid/responsive-grid';

import styles from './workplace.module.scss';

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
  image?: string;
}

interface IWorkPlaceProps {
  company: ICompany;
}

export const WorkPlace: (props: IWorkPlaceProps) => JSX.Element = ({
  company,
}) => {
  return (
    <div className={styles.workplace}>
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
    </div>
  );
};

export default WorkPlace;

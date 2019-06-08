import * as React from 'react';
import Project from './Project';

interface ICompany {
  name: string;
  dates: string;
  description: string;
  projects?: IProject[];
}

interface IProject {
  projectTitle: string;
  text: string;
  topics?: string[];
}

interface IWorkPlaceProps {
  company: ICompany;
}

export const WorkPlace: React.FunctionComponent<IWorkPlaceProps> = ({
  company,
}) => {
  return (
    <div>
      <h3>{company.name}</h3>
      <p>{company.dates}</p>
      <p>{company.description}</p>
      {company.projects &&
        company.projects.map(project => (
          <Project
            title={project.projectTitle}
            text={project.text}
            topics={project.topics}
            key={project.projectTitle}
          />
        ))}
    </div>
  );
};

export default WorkPlace;

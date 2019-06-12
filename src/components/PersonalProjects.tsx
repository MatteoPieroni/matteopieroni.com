import * as React from 'react';

import { PersonalProject, IPersonalProject } from './PersonalProject';
import { projects } from '../data/PersonalProjects';

export const PersonalProjects: React.FunctionComponent = () => {
  return (
    <section>
      {projects.map(project => (
        <PersonalProject key={project.url} project={project} />
      ))}
    </section>
  );
};

export default PersonalProjects;

import * as React from 'react';
import styled from 'styled-components';

import { PersonalProject, IPersonalProject } from '../personal-project/personal-project';
import { projects } from '../../data/PersonalProjects';
import { ResponsiveGrid } from '../SharedStyles/ResponsiveGrid';

import styles from './personal-projects.module.scss';

export const PersonalProjects: () => JSX.Element = () => {
  return (
    <section>
      <div className={styles.PersonalProjectsGrid}>
        <h2>Personal Projects</h2>
        {projects.map(project => (
          <PersonalProject key={project.url} project={project} />
        ))}
      </div>
    </section>
  );
};

export default PersonalProjects;

import { PersonalProject, IPersonalProject } from '../personal-project/personal-project';

import styles from './personal-projects.module.scss';

export const PersonalProjects: (props: { projects: IPersonalProject[] }) => JSX.Element = ({ projects }) => {
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

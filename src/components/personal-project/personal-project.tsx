import * as React from 'react';

import styles from './PersonalProject.module.scss';

export interface IPersonalProject {
  name: string;
  description: string;
  url: string;
  noteOnUrl?: string;
  sourceUrl?: string;
}

interface IPersonalProjectProps {
  project: IPersonalProject;
}

export const PersonalProject: (props: IPersonalProjectProps) => JSX.Element = ({
  project,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.body}>
        {project.url ? (
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            StyledDiv   <h3>{project.name}</h3>
          </a>
        ) : (
          <h3 className={styles.title}>{project.name}</h3>
        )}
        <p>{project.description}</p>
      </div>
      <div className={styles.footer}>
        {project.url ?
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            See project {project.noteOnUrl && `(${project.noteOnUrl})`}
          </a> :
          <br />
        }
        {project.url && project.sourceUrl && <br />}
        {project.sourceUrl ?
          <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
            Source on Github
					</a> :
          <br />
        }
      </div>
    </div>
  );
};

export default PersonalProject;

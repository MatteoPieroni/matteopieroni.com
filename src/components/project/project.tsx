import * as React from 'react';

import styles from './project.module.scss';

interface IProjectProps {
  title: string;
  text: string;
  topics?: string[];
}

export const Project: (props: IProjectProps) => JSX.Element = ({
  title,
  text,
  topics,
}) => {
  return (
    <div className={styles.project} tabIndex={0}>
      <h5>{title}</h5>
      <p>{text}</p>
      {topics && (
        <div>
          {topics.map(topic => (
            <span>{topic}</span>
          ))}
        </div>
      )}
    </div>
  );
};

export default Project;

import * as React from 'react';

interface IProjectProps {
  title: string;
  text: string;
  topics?: string[];
}

export const Project: React.FunctionComponent<IProjectProps> = ({
  title,
  text,
  topics,
}) => {
  return (
    <div>
      <h4>{title}</h4>
      <p>{text}</p>
      {topics && (
        <div>
          topics.map(topic => <span>{topic}</span>)
        </div>
      )}
    </div>
  );
};

export default Project;

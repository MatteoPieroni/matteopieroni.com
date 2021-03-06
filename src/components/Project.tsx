import * as React from 'react';
import styled from 'styled-components';
import { IStyledProps } from '../pages/App';

interface IProjectProps {
  title: string;
  text: string;
  topics?: string[];
}

const StyledProject = styled.div`
  margin: 1rem;
  border-top: 3.5px solid
    ${(props: IStyledProps) => props.theme.colors.secondary};
  border-radius: 5px;
  padding: 1rem;
  background: ${(props: IStyledProps) => props.theme.colors.card};
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19);
  h5 {
    margin-top: 0;
    margin-bottom: 0.5rem;
  }
  p {
    margin-top: 0;
    margin-bottom: 0;
  }
`;

export const Project: (props: IProjectProps) => JSX.Element = ({
  title,
  text,
  topics,
}) => {
  return (
    <StyledProject tabIndex={0}>
      <h5>{title}</h5>
      <p>{text}</p>
      {topics && (
        <div>
          {topics.map(topic => (
            <span>{topic}</span>
          ))}
        </div>
      )}
    </StyledProject>
  );
};

export default Project;

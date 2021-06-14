import * as React from 'react';
import styled from 'styled-components';
import { IStyledProps } from '../utils/theme';

interface IWebsiteProps {
  link: string;
  image: string;
}

const StyledWebsite = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
  border-top: 3.5px solid #a64942;

  .img-link {
    border-radius: 5px;
    padding: 0;
    background: none;
    &:before {
      content: none;
    }
  }
  img {
    display: block;
    margin: 0;
    max-width: 100%;
    height: auto;
  }
  .footer {
    margin: 0;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    padding: 1rem;
    background: #4a588c;
  }
`;

export const Website: (props: IWebsiteProps) => JSX.Element = ({
  link,
  image,
}) => {
  return (
    <StyledWebsite>
      {/* <a href={link} target="_blank" rel="noopener noreferrer" className="img-link">
        <picture>
          <img src={image} />
        </picture>
      </a> */}
      <p className="footer">
        <a href={link} target="_blank" rel="noopener noreferrer">
          {link}
        </a>
      </p>
    </StyledWebsite>
  );
};

export default Website;

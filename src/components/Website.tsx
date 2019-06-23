import * as React from 'react';
import styled from 'styled-components';

interface IWebsiteProps {
  link: string;
  image: string;
}

const StyledWebsite = styled.div`
  background: blue;
`;

export const Website: React.FunctionComponent<IWebsiteProps> = ({
  link,
  image,
}) => {
  const img = require(`../assets/${image}`);
  return (
    <StyledWebsite>
      <picture>
        <img src={img} />
        <p>
          <a href={link} target="_blank">
            {link}
          </a>
        </p>
      </picture>
    </StyledWebsite>
  );
};

export default Website;

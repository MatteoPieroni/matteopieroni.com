import * as React from 'react';
import styled from 'styled-components';

export interface IHeroProps {
  imageSrc: string
}

const StyledHero = styled.section`

`;

export const Hero: React.FC<IHeroProps> = ({imageSrc}) => {
  return (
      <StyledHero>
        <div className="text">
          <h1>I'm Matteo Pieroni,<br />Front End Developer</h1>
        </div>
      </StyledHero>
    );
}

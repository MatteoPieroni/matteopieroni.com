import * as React from 'react';
import styled from 'styled-components';

import mobileImage from '../assets/matteo-pieroni-front-end-developer-640.jpg';
import tabletImage from '../assets/matteo-pieroni-front-end-developer-960.jpg';
import desktopImage from '../assets/matteo-pieroni-front-end-developer-1920.jpg';
import { IStyledProps } from '../pages/App';

interface IHeroProps {
  isLightTheme: boolean;
  changeTheme: (e: boolean) => void;
}

const StyledHero = styled.section`
  .text {
    position: relative;
    &:before {
      content: '';
      background: ${(props: IStyledProps) => props.theme.photoGradient};
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
    }
  }
  h1 {
    position: absolute;
    top: 1%;
    left: 3%;
    width: 94%;
    font-size: 2.25rem;
  }
  img {
    display: block;
    width: 100%;
    object-position: center;
    object-fit: contain;
    filter: ${(props: IStyledProps) =>
      props.theme.grayscale ? 'brightness(0.5) grayscale(.5)' : 'none'};
  }
`;

export const Hero: React.FC<IHeroProps> = props => {
  return (
    <StyledHero className="full-width">
      <div className="text">
        <picture>
          <source media="(min-width: 960px)" srcSet={desktopImage} />
          <source media="(min-width: 640px)" srcSet={tabletImage} />
          <img src={mobileImage} alt="Development Desk Set-up" />
        </picture>
        <h1>
          I'm Matteo Pieroni,
          <br />
          Front End Developer
        </h1>
      </div>
      <label>
        Light Theme
        <input
          checked={props.isLightTheme}
          type="checkbox"
          onChange={e => props.changeTheme(e.target.checked)}
        />
      </label>
    </StyledHero>
  );
};

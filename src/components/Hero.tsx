import * as React from 'react';
import styled from 'styled-components';

import mobileImage from '../assets/matteo-pieroni-front-end-developer-640.jpg';
import tabletImage from '../assets/matteo-pieroni-front-end-developer-960.jpg';
import desktopImage from '../assets/matteo-pieroni-front-end-developer-1920.jpg';
import { IStyledProps } from '../pages/App';

const StyledHero = styled.section`
  .text {
    position: relative;
    display: flex;
    &:before {
      content: '';
      background: ${(props: IStyledProps) => props.theme.photoGradient};
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
    }

    @media (min-width: 768px) {
      max-height: 50vh;
    }
  }
  h1 {
    position: absolute;
    top: 1%;
    left: 3%;
    width: 94%;
    font-size: 2.25rem;

    @media (min-width: 768px) {
      left: 50%;
      display: block;
      max-width: 1200px;
      font-size: 2.75rem;
      transform: translateX(-50%);
    }
    font-size: 2.25rem;

    @media (min-width: 1024px) {
      font-size: 3.5rem;
    }
  }
  img {
    display: block;
    width: 100%;
    object-position: center;
    object-fit: contain;
    filter: ${(props: IStyledProps) =>
      props.theme.grayscale ? 'brightness(0.5) grayscale(.5)' : 'none'};

    @media (min-width: 768px) {
      height: 100%;
      object-fit: cover;
    }
  }
`;

export const Hero: React.FC = () => {
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
    </StyledHero>
  );
};

import * as React from 'react';
import styled from 'styled-components';
import GliderComponent from 'react-glider-carousel';

import { Css3 } from './Icons/Css3';
import { Angular } from './Icons/Angular';
import { Drupal } from './Icons/Drupal';
import { GraphQL } from './Icons/Graphql';
import { Html5 } from './Icons/Html5';
import { JS } from './Icons/Javascript';
import { JQuery } from './Icons/Jquery';
import { ReactLogo } from './Icons/React';
import { Redux } from './Icons/Redux';
import { Wordpress } from './Icons/Wordpress';
import { IStyledProps } from '../pages/App';

const StyledSection = styled.section`
  margin-top: 2.5rem;
  h2 {
    text-align: center;
    text-decoration: underline;
  }
`;

const StyledDiv = styled.div`
  height: 100px;
  background: ${(props: IStyledProps) => props.theme.colors.primary};
`;

const responsiveGliderSettings = [
  {
    breakpoint: 767.5,
    settings: {
      slidesToShow: 4.5,
    },
  },
  {
    breakpoint: 1200,
    settings: {
      slidesToShow: 6.5,
    },
  },
];

export const TechnologiesBar: () => JSX.Element = () => {
  return (
    <StyledSection className="full-width">
      <h2>Technologies</h2>
      <StyledDiv>
        <GliderComponent
          settings={{
            slidesToShow: 2,
            draggable: true,
            responsive: responsiveGliderSettings,
          }}
        >
          <Html5 />
          <Css3 />
          <JS />
          <ReactLogo />
          <Redux />
          <Angular />
          <GraphQL />
          <Drupal />
          <JQuery />
          <Wordpress />
        </GliderComponent>
      </StyledDiv>
    </StyledSection>
  );
};

export default TechnologiesBar;

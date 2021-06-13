import * as React from 'react';
import styled from 'styled-components';

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
import { IStyledProps } from '../utils/theme';

const StyledSection = styled.section`
  margin-top: 2.5rem;
  h2 {
    text-align: center;
    text-decoration: underline;
  }

  ul {
    list-style: none;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @media (min-width: 600px) {
      grid-template-columns: repeat(4, 1fr);
    }

    @media (min-width: 1200px) {
      grid-template-columns: repeat(6, 1fr);
    }
  }
`;

const StyledDiv = styled.div`
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
        <ul>
          <li><Html5 /></li>
          <li><Css3 /></li>
          <li><JS /></li>
          <li><ReactLogo /></li>
          <li><Redux /></li>
          <li><Angular /></li>
          <li><GraphQL /></li>
          <li><Drupal /></li>
          <li><JQuery /></li>
          <li><Wordpress /></li>
        </ul>
      </StyledDiv>
    </StyledSection>
  );
};

export default TechnologiesBar;

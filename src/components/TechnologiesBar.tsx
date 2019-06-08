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

const StyledSection = styled.section`
  h2 {
    text-align: center;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  height: 100px;
  background: #e0e0e0;
  overflow: auto;
`;

export const TechnologiesBar: React.FunctionComponent = () => {
  return (
    <StyledSection>
      <h2>Technologies</h2>
      <StyledDiv>
        <Css3 />
        <Angular />
        <Drupal />
        <GraphQL />
        <Html5 />
        <JS />
        <JQuery />
        <ReactLogo />
        <Redux />
        <Wordpress />
      </StyledDiv>
    </StyledSection>
  );
};

export default TechnologiesBar;

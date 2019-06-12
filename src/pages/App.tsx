import * as React from 'react';
import styled from 'styled-components';
import '../lib/glider.min.css';

import { Hero } from '../components/Hero';
import { TechnologiesBar } from '../components/TechnologiesBar';
import { WorkTimeline } from '../components/WorkTimeline';
import { PersonalProjects } from '../components/PersonalProjects';

const StyledApp = styled.main`
  margin: 0 0.5rem;

  .full-width {
    margin: 0 -0.5rem;
  }

  .sr-only {
    border: 0 !important;
    clip: rect(1px, 1px, 1px, 1px) !important; /* 1 */
    -webkit-clip-path: inset(50%) !important;
    clip-path: inset(50%) !important; /* 2 */
    height: 1px !important;
    margin: -1px !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: absolute !important;
    width: 1px !important;
    white-space: nowrap !important; /* 3 */
  }
`;

export const App: React.FunctionComponent = () => {
  return (
    <StyledApp>
      <Hero />
      <TechnologiesBar />
      <WorkTimeline />
      <PersonalProjects />
    </StyledApp>
  );
};

export default App;

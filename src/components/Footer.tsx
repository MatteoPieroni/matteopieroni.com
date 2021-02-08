import * as React from 'react';
import styled from 'styled-components';

import { IStyledProps } from '../utils/theme';
import { LinkedIn } from './Icons/LinkedIn';
import { Mail } from './Icons/Mail';

const StyledFooter = styled.footer`
  margin-top: 2.5rem;
  padding: 1.5rem;
  background: ${(props: IStyledProps) => props.theme.colors.secondary};
  font-size: 2rem;
  text-align: center;
  text-transform: uppercase;

  h2 {
    color: #fff;
  }

  .social {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  a {
    background: none !important;
    padding: 0;
    &:before {
      content: none;
    }
  }

  svg {
    margin-right: 1.5rem;
    width: 50px;
    fill: #fff;
    &:last-child {
      margin-right: 0;
    }
  }
`;

export const Footer: () => JSX.Element = () => {
  return (
    <StyledFooter className="full-width">
      <h2>Where to find me?</h2>
      <div className="social">
        <a href="https://www.linkedin.com/in/pieronimatteo/">
          <LinkedIn />
        </a>
        <a href="mailto:matteopieroni6@gmail.com">
          <Mail />
        </a>
      </div>
    </StyledFooter>
  );
};

export default Footer;

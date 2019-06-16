import * as React from 'react';
import styled from 'styled-components';

export interface IThemeChangerProps {
  isDarkTheme: boolean;
  changeTheme: (e: boolean) => void;
}

const StyledDiv = styled.div`
  position: absolute;
  z-index: 111;
  right: 5px;
  top: 5px;
  overflow: hidden;
  padding: 0 35px;

  .toggle {
    cursor: pointer;
    display: inline-block;
    position: relative;
    width: 60px;
    height: 33.33333px;
    background-color: #83d8ff;
    border-radius: 54px;
    transition: background-color 200ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
  }

  .toggle:before {
    content: 'AM';
    position: absolute;
    left: -33.33333px;
    top: 10px;
    font-size: 12px;
    color: #333;
  }

  .toggle:after {
    content: 'PM';
    position: absolute;
    right: -32px;
    top: 10px;
    font-size: 12px;
    color: #6873b7;
  }

  .toggle__handler {
    display: inline-block;
    position: relative;
    z-index: 1;
    top: 2px;
    left: 2px;
    width: 27.33333px;
    height: 27.33333px;
    background-color: #ffcf96;
    border-radius: 33.33333px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
    transition: all 400ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
    transform: rotate(-45deg);
  }

  .toggle__handler .crater {
    position: absolute;
    background-color: #e8cda5;
    opacity: 0;
    transition: opacity 200ms ease-in-out;
    border-radius: 100%;
  }

  .toggle__handler .crater--1 {
    top: 12px;
    left: 6.66667px;
    width: 2.66667px;
    height: 2.66667px;
  }

  .toggle__handler .crater--2 {
    top: 18.66667px;
    left: 14.66667px;
    width: 4px;
    height: 4px;
  }

  .toggle__handler .crater--3 {
    top: 6.66667px;
    left: 16.66667px;
    width: 5.33333px;
    height: 5.33333px;
  }

  .star {
    position: absolute;
    background-color: #ffffff;
    transition: all 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
    border-radius: 50%;
  }

  .star--1 {
    top: 6.66667px;
    left: 23.33333px;
    z-index: 0;
    width: 20px;
    height: 2px;
  }

  .star--2 {
    top: 12px;
    left: 18.66667px;
    z-index: 1;
    width: 20px;
    height: 2px;
  }

  .star--3 {
    top: 18px;
    left: 26.66667px;
    z-index: 0;
    width: 20px;
    height: 2px;
  }

  .star--4,
  .star--5,
  .star--6 {
    opacity: 0;
    transition: all 300ms 0 cubic-bezier(0.445, 0.05, 0.55, 0.95);
  }

  .star--4 {
    top: 10.66667px;
    left: 7.33333px;
    z-index: 0;
    width: 1.33333px;
    height: 1.33333px;
    transform: translate3d(2px, 0, 0);
  }

  .star--5 {
    top: 21.33333px;
    left: 11.33333px;
    z-index: 0;
    width: 2px;
    height: 2px;
    transform: translate3d(2px, 0, 0);
  }

  .star--6 {
    top: 24px;
    left: 18.66667px;
    z-index: 0;
    width: 1.33333px;
    height: 1.33333px;
    transform: translate3d(2px, 0, 0);
  }

  input {
    position: absolute;
    left: -99em;
  }

  input:checked + .toggle {
    background-color: #749dd6;
  }

  input:checked + .toggle:before {
    color: #fff;
  }

  input:checked + .toggle:after {
    color: #6873b7;
  }

  input:checked + .toggle .toggle__handler {
    background-color: #ffe5b5;
    transform: translate3d(26.66667px, 0, 0) rotate(0);
  }

  input:checked + .toggle .toggle__handler .crater {
    opacity: 1;
  }

  input:checked + .toggle .star--1 {
    width: 1.33333px;
    height: 1.33333px;
  }

  input:checked + .toggle .star--2 {
    width: 2.66667px;
    height: 2.66667px;
    transform: translate3d(-3.33333px, 0, 0);
  }

  input:checked + .toggle .star--3 {
    width: 1.33333px;
    height: 1.33333px;
    transform: translate3d(-4.66667px, 0, 0);
  }

  input:checked + .toggle .star--4,
  input:checked + .toggle .star--5,
  input:checked + .toggle .star--6 {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  input:checked + .toggle .star--4 {
    transition: all 300ms 200ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
  }

  input:checked + .toggle .star--5 {
    transition: all 300ms 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
  }

  input:checked + .toggle .star--6 {
    transition: all 300ms 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
  }
`;

export const ThemeChanger: React.FunctionComponent<
  IThemeChangerProps
> = props => {
  return (
    <StyledDiv className="toggleWrapper">
      <input
        checked={!props.isDarkTheme}
        aria-label="Light UI"
        aria-invalid="false"
        type="checkbox"
        id="dn"
        onChange={e => props.changeTheme(e.target.checked)}
      />
      <label htmlFor="dn" className="toggle">
        <span className="toggle__handler">
          <span className="crater crater--1"></span>
          <span className="crater crater--2"></span>
          <span className="crater crater--3"></span>
        </span>
        <span className="star star--1"></span>
        <span className="star star--2"></span>
        <span className="star star--3"></span>
        <span className="star star--4"></span>
        <span className="star star--5"></span>
        <span className="star star--6"></span>
      </label>
    </StyledDiv>
  );
};

export default ThemeChanger;

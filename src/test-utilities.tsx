import * as React from 'react';
import { mount, render, shallow } from 'enzyme';
import { ThemeProvider, DefaultTheme } from 'styled-components';

export const mockTheme: DefaultTheme = {
  photoGradient: 'linear-gradient(0.5turn, #000, transparent)',
  grayscale: true,
  colors: {
    primary: '#fff',
    primaryLighter: '#fe5f55',
    card: '#0e1325',
    background: '#293462',
    text: '#fff',
    secondary: '#a64942',
  },
};

export const mountWithTheme = (children: any, theme: DefaultTheme) =>
  mount(<ThemeProvider theme={theme}>{children}</ThemeProvider>);

export const renderWithTheme = (children: any, theme: DefaultTheme) =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);

export const shallowWithTheme = (children: any, theme: DefaultTheme) =>
  shallow(<ThemeProvider theme={theme}>{children}</ThemeProvider>);

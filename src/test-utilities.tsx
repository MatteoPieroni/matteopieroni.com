import * as React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';

export const mockTheme: DefaultTheme = {
  photoGradient: 'linear-gradient(0.5turn, #000, transparent)',
  grayscale: true,
  colors: {
    primary: '#fff',
    primaryLighter: '#fe5f55',
    card: '#0e1325',
    background: '#293462',
    backgroundLighter: '#eee',
    text: '#fff',
    secondary: '#a64942',
  },
};

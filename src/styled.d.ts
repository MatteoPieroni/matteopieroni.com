import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    boxShadow?: string;

    photoGradient: string;
    grayscale: boolean;

    colors: {
      primary: string;
      primaryLighter: string;
      background: string;
      backgroundLighter: string;
      text: string;
      secondary: string;
      card: string;
    };
  }
}

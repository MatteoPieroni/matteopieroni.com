export interface IStyledProps {
    theme: {
      boxShadow?: string;
      photoGradient: string;
      grayscale: boolean;
  
      colors: {
        primary: string;
        primaryLighter: string;
        card: string;
        background: string;
        backgroundLighter: string;
        text: string;
        secondary: string;
      };
    };
  }
import * as React from 'react';
import styled, {
  ThemeProvider,
  DefaultTheme,
  createGlobalStyle,
} from 'styled-components';
import '../lib/glider.min.css';

import { Hero } from '../components/Hero';
import { TechnologiesBar } from '../components/TechnologiesBar';
import { WorkTimeline } from '../components/WorkTimeline';
import { PersonalProjects } from '../components/PersonalProjects';
import ExternalLinkIcon from '../assets/external-link-icon.svg';
import { ThemeChanger } from '../components/ThemeChanger';
import { Footer } from '../components/Footer';

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

export const lightTheme: DefaultTheme = {
  photoGradient: 'linear-gradient(0.5turn, #fff, transparent)',
  grayscale: false,
  colors: {
    primary: '#a64942',
    primaryLighter: '#fe5f55',
    card: '#eee',
    background: '#fff',
    backgroundLighter: '#dcdcdc',
    text: '#333',
    secondary: '#293462',
  },
};

export const darkTheme: DefaultTheme = {
  photoGradient: 'linear-gradient(0.5turn, #000, transparent)',
  grayscale: true,
  colors: {
    primary: '#fff',
    primaryLighter: '#fe5f55',
    card: '#0e1325',
    background: '#293462',
    backgroundLighter: '#4a588c',
    text: '#fff',
    secondary: '#a64942',
  },
};

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background: ${(props: IStyledProps) => props.theme.colors.background};
    font-family: 'Source Sans Pro', Frutiger, 'Frutiger Linotype', Univers, Calibri, 'Gill Sans', 'Gill Sans MT', 'Myriad Pro', Myriad, 'DejaVu Sans Condensed', 'Liberation Sans',  'Nimbus Sans L', Tahoma, Geneva, 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 400;
  }
  h3,
  h4,
  h5,
  h6,
  strong {
    font-weight: 700;
    color: ${(props: IStyledProps) => props.theme.colors.text};
  }
  h1,
  h2 {
    font-family: 'Oswald', Frutiger, 'Frutiger Linotype', Univers, Calibri, 'Gill Sans', 'Gill Sans MT', 'Myriad Pro', Myriad, 'DejaVu Sans Condensed', 'Liberation Sans', 'Nimbus Sans L', Tahoma, Geneva, 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 300;
    color: ${(props: IStyledProps) => props.theme.colors.primary};
  }
  p {
    color: ${(props: IStyledProps) => props.theme.colors.text};
  }
  h2 {
    font-size: 1.7rem;

    @media (min-width: 768px) {
      font-size: 2.25rem;
    }

    @media (min-width: 1024px) {
      font-size: 3rem;
    }
  }
  h3 {
    font-size: 1.5rem;

    @media (min-width: 768px) {
      font-size: 2rem;
    }

    @media (min-width: 1024px) {
      font-size: 2.25rem;
    }
  }
  h4 {
    font-size: 1.4rem;

    @media (min-width: 768px) {
      font-size: 1.9rem;
    }

    @media (min-width: 1024px) {
      font-size: 2rem;
    }
  }
  h5 {
    font-size: 1.3rem;

    @media (min-width: 768px) {
      font-size: 1.8rem;
    }

    @media (min-width: 1024px) {
      font-size: 1.9rem;
    } 
  }
  h6 {
    font-size: 1.2rem;

    @media (min-width: 768px) {
      font-size: 1.7rem;
    }

    @media (min-width: 1024px) {
      font-size: 1.8rem;
    }
  }

  a {
    position: relative;
    display: inline-block;
    padding-right: 1.2rem;
    color: ${(props: IStyledProps) => props.theme.colors.text};
    text-decoration: none;
    &:before {
      content: '';
      position: absolute;
      bottom: 0;
      display: block;
      width: 100%;
      height: 2px;
      background: ${(props: IStyledProps) => props.theme.colors.primaryLighter};
      z-index: -1;
      transition: height 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    &:hover:before,
    &:focus:before {
      height: 0.25rem;
    }
  }
  a:not([href*='matteopieroni.com']):not([href^='#']):not([href^='/']) {
    background-image: url(${ExternalLinkIcon});
    background-origin: center;
    background-position: center right;
    background-repeat: no-repeat;
    background-size: 1rem;
  }

  *:focus {
    outline: 2px dashed ${(props: IStyledProps) => props.theme.colors.text};
  }

  .full-width {
    margin-left: -0.5rem;
    margin-right: -0.5rem;

    @media (min-width: 768px) {
      margin-left: -1.5rem;
      margin-right: -1.5rem;
    }

    @media (min-width: 1200px) {
      margin-left: calc((100vw - 1200px) / -2);
      margin-right: calc((100vw - 1200px) / -2);
    }
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

const StyledApp = styled.main`
  margin: 0 0.5rem;

  @media (min-width: 768px) {
    margin: 0 1.5rem;
  }

  @media (min-width: 1200px) {
    margin: 0 auto;
    max-width: 1200px;
  }
`;

export const App: () => JSX.Element = () => {
  const [theme, setTheme] = React.useState(darkTheme);
  const [readingTheme, setReadingTheme] = React.useState(true);

  React.useEffect(() => {
		const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'LIGHT') {
			setTheme(lightTheme);
		}

    setReadingTheme(false);
  }, [theme]);

  const changeTheme = (isChecked: boolean) => {
    const whichTheme = isChecked ? darkTheme : lightTheme;
		const themeToLS = isChecked ? 'DARK' : 'LIGHT';

		setTheme(whichTheme);

    localStorage.setItem('theme', themeToLS);
  };

  return (
    <ThemeProvider theme={theme}>
      {!readingTheme && (
        <>
          <GlobalStyle />
          <StyledApp>
            <ThemeChanger
              changeTheme={changeTheme}
              isDarkTheme={theme === lightTheme ? true : false}
            />
            <Hero />
            <TechnologiesBar />
            <WorkTimeline />
            <PersonalProjects />
            <Footer />
          </StyledApp>
        </>
      )}
    </ThemeProvider>
  );
};

export default App;

import * as React from 'react';
import styled, {
  DefaultTheme,
} from 'styled-components';
import Head from 'next/head';

import { Hero } from '../components/Hero';
import { TechnologiesBar } from '../components/TechnologiesBar';
import { WorkTimeline } from '../components/WorkTimeline';
// import ExternalLinkIcon from '../assets/external-link-icon.svg';
import { Footer } from '../components/Footer';

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

// export const darkTheme: DefaultTheme = {
//   photoGradient: 'linear-gradient(0.5turn, #000, transparent)',
//   grayscale: true,
//   filter: 5,
//   colors: {
//     primary: '#fff',
//     primaryLighter: '#',
//     card: '#0e1325',
//     background: '#',
//     backgroundLighter: '#4a588c',
//     secondary: '#a64942',
//   },
// };

export const App: () => JSX.Element = () => {
  return (
    <>
      <Head>
        <title>Matteo Pieroni, Front End Developer in London</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main>
        {/* <ThemeChanger
              changeTheme={changeTheme}
              isDarkTheme={theme === lightTheme ? true : false}
            /> */}
        <Hero />
        {/* <TechnologiesBar /> */}
        {/* <WorkTimeline /> */}
        {/* <Footer /> */}
      </main>
    </>
  );
};

export default App;

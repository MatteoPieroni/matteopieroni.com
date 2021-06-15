import * as React from 'react';
import Image from 'next/image';

// import mobileImage from '../assets/matteo-pieroni-front-end-developer-640.jpg';
// import tabletImage from '/matteo-pieroni-front-end-developer-960.jpg';
// import desktopImage from '';
import styles from './hero.module.scss';

export const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className="text">
        {/* <picture>
          <source media="(min-width: 960px)" srcSet={desktopImage} />
          <source media="(min-width: 640px)" srcSet={tabletImage} />
          <img src={mobileImage} alt="Development Desk Set-up" />
        </picture> */}
        {/* <Image src="/assets/matteo-pieroni-front-end-developer-1920.jpg" alt="" width={1920} height={1080} /> */}
        <h1>
          I'm Matteo Pieroni,
          <br />
          Front End Developer
        </h1>
      </div>
    </section>
  );
};

import * as React from 'react';

import styles from './website.module.scss';

interface IWebsiteProps {
  link: string;
  image: string;
}

export const Website: (props: IWebsiteProps) => JSX.Element = ({
  link,
  image,
}) => {
  return (
    <div className={styles.website}>
      {/* <a href={link} target="_blank" rel="noopener noreferrer" className="img-link">
        <picture>
          <img src={image} />
        </picture>
      </a> */}
      <p className="footer">
        <a href={link} target="_blank" rel="noopener noreferrer">
          {link}
        </a>
      </p>
    </div>
  );
};

export default Website;

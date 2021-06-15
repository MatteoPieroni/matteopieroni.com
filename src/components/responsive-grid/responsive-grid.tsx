import styles from './responsive-grid.module.scss';

export const ResponsiveGrid: React.FC = ({ children }) => <div className={styles.grid}>{children}</div>;

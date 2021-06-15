import { Link } from '../link/link';

import styles from './header.module.scss';

export const Header: React.FC = () => {

	return (
		<header className={styles.header}>
			<nav>
				<Link href="/">
					<a>Home</a>
				</Link>
				<Link href="/work-experience">
					<a>Work</a>
				</Link>
				<Link href="/personal-projects">
					<a>Personal Projects</a>
				</Link>
			</nav>
		</header>
	)
}
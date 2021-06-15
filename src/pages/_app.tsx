
import type { AppProps } from 'next/app'

import { Header } from '../components/header/header';

import './styles/general.scss';

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<Header />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
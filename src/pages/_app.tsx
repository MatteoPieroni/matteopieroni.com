import type { AppProps } from 'next/app'
import Head from 'next/head';

import { Header } from '../components/header/header';

import './styles/general.scss';

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<Head key="fonts">
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta http-equiv="X-UA-Compatible" content="ie=edge" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700&family=Vollkorn:wght@600&display=swap" rel="stylesheet" />
			</Head>
			<Header />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
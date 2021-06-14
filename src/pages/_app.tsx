import './styles/general.scss';

const MyApp = ({ Component, pageProps }) => {
	return (
		<>
			<header>
				<a href="/">Home</a>
				<a href="/work-experience">Work</a>
			</header>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
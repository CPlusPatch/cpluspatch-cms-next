import '../styles/globals.css';
import Head from 'next/head';
import { SessionProvider } from "next-auth/react";
import NextNProgress from "nextjs-progressbar";
import type { AppProps } from 'next/app';

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
	return (
		<SessionProvider session={session}>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1"/>
			</Head>
			<NextNProgress />
			<Component {...pageProps} />
		</SessionProvider>
	)
}

export default App

import Document, { Html, Head, Main, NextScript } from 'next/document';
import Cookies from 'cookies';

export default function MyDocument(/* { props } */) {
	return (
    <Html lang='en-us' /* className={props.isDarkTheme ? "dark" : ""} */>
		<Head>
			<link rel="preconnect" href="https://fonts.googleapis.com"/>
			<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
			<link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@500;900&family=Inter&family=Open+Sans:wght@500&display=swap" rel="stylesheet"/>
		</Head>

		<body>
			<Main />
			<NextScript />
		</body>
    </Html>
	)
}

/* MyDocument.getInitialProps = async (ctx) => {
	const initialProps = await Document.getInitialProps(ctx);
	const cookies = new Cookies(ctx.req, ctx.res);
	const isDarkTheme = cookies.get('theme') === 'dark';

	return { ...initialProps, props: {
		isDarkTheme,
	} };
} */
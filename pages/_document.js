import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
    <Html lang='en-us'>
		<Head>
			<link rel="preconnect" href="https://fonts.googleapis.com"/>
			<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
			<link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@500;900&family=Inter&family=Manrope:wght@800&display=swap" rel="stylesheet"/>
		</Head>

		<body>
			<Main />
			<NextScript />
		</body>
    </Html>
	)
}
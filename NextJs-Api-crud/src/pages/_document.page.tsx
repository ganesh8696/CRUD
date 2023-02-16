import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document'

export default class CustomDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx)
		return { ...initialProps }
	}

	render() {
		return (
			<Html>
				<Head>
					<link
						rel="stylesheet"
						href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
					/>
					<link
						rel="stylesheet"
						href="https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@300;400;700&display=swap"
					/>
					<link
						rel="stylesheet"
						href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&display=swap"
					/>

					<link
						href="https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined"
						rel="stylesheet"
					/>

					<link rel="icon" href="/static/assets/images/butler.svg" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

import '../styles/globals.css'
import { theme } from 'styles/theme'
import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import { NextPageWithLayout } from 'libs/next/type'

type CustomeAppProps = AppProps & {
	Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: CustomeAppProps) {
	const getLayout = Component.getLayout || ((page) => page)
	return (
		<ChakraProvider theme={theme}>
			<>{getLayout(<Component {...pageProps} />)}</>
		</ChakraProvider>
	)
}

export default MyApp

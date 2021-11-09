import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/navbar/navbar'
function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1.0"
			></meta>
			<Navbar />
			<Component {...pageProps} />
		</>
	)
}
export default MyApp

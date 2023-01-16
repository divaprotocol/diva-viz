import Layout from '../components/Layout'
import '../styles/globals.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ThemeProvider } from '@material-tailwind/react'

const queryClient = new QueryClient()

export default function MyApp({ Component, pageProps }) {
	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ThemeProvider>
		</QueryClientProvider>
	)
}

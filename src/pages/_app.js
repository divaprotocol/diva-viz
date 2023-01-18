import Layout from '../components/Layout'
import '../styles/globals.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ThemeProvider } from '@material-tailwind/react'
import { wagmiClient, chains } from '../utils/connector'
import { RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { WagmiConfig } from 'wagmi'

const queryClient = new QueryClient()

export default function MyApp({ Component, pageProps }) {
	return (
		<QueryClientProvider client={queryClient}>
			<WagmiConfig client={wagmiClient}>
				<RainbowKitProvider chains={chains}>
					<ThemeProvider>
						<Layout>
							<Component {...pageProps} />
						</Layout>
					</ThemeProvider>
				</RainbowKitProvider>
			</WagmiConfig>
		</QueryClientProvider>
	)
}

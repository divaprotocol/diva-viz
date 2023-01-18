// rainbow imports
import '@rainbow-me/rainbowkit/styles.css'
import {
    ConnectButton,
    getDefaultWallets,
    RainbowKitProvider,
} from '@rainbow-me/rainbowkit'
import { configureChains, createClient, WagmiConfig } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { mainnet, goerli, polygon, polygonMumbai } from 'wagmi/chains'
import { infuraProvider } from 'wagmi/providers/infura'

export const { chains, provider } = configureChains(
    [mainnet, goerli, polygonMumbai],
    [infuraProvider({
        apiKey: process.env.INFURA_API_KEY,
    })
        ,
    publicProvider(),
    ]
)

export const { connectors } = getDefaultWallets({
    appName: 'DIVA ViZ',
    chains,
})

export const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider,
})
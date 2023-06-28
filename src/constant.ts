const divaAddress = '0x659f8bF63Dce2548eB4D9b4BfF6883dddFde4848'

const TOKEN_WITH_ICONS = {
    ADA: "ADA",
    AVAX: "AVAX",
    BNB: "BNB",
    BTC: "BTC",
    DAI: "DAI",
    DIVA: "DIVA",
    DOGE: "DOGE",
    ETH: "ETH",
    EURO: "EURO",
    MATIC: "POLYGON",
    SOL: "SOLANA",
    UNI: "UNISWAP",
    USD: "USD",
    USDC: "USDC",
    USDT: "USDT",
    XRP: "XRP",
    WETH: "ETH",
    WBTC: "BTC",
}

export enum SupportedChainId {
    POLYGON = 137,
    POLYGON_MUMBAI = 80001,
}

type ChainInfo = {
    readonly name: string
    readonly chainID: number
    readonly offer: string
}


export const CHAIN_INFO: { [key: number]: ChainInfo } = {
    [SupportedChainId.POLYGON]: {
        name: 'Polygon',
        chainID: 137,
        offer: 'https://polygon.eip712api.xyz/diva/offer/v1/',
    },
    [SupportedChainId.POLYGON_MUMBAI]: {
        name: 'Mumbai',
        chainID: 80001,
        offer: 'https://mumbai.eip712api.xyz/diva/offer/v1/',
    }
}


export { divaAddress, TOKEN_WITH_ICONS }
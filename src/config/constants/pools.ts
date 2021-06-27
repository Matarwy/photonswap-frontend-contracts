import { PoolCategory, PoolConfig, QuoteToken } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    tokenName: 'BUSD',
    stakingTokenName: QuoteToken.BUSD,
    stakingTokenAddress: {
      97: '',
      56: '0x10a96eaecdf605a5e682bfcd2278ca7cc682eb84', // TOKEN
    },
    contractAddress: {
      97: '',
      56: '0xb9bc69d7F7521B41740B392D64c5F4FE4C6f745B', // TOKENHOUSE
    },
    rewardTokenAddress: {
      97: '',
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56', // BUSD
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'www.binance.com',
    harvest: true,
    tokenPerBlock: '0.01',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
    burnFee: 0,
  },
]

export default pools

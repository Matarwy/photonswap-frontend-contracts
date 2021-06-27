import poolsConfig from 'config/constants/pools'
import sousChefABI from 'config/abi/sousChef.json'
import cakeABI from 'config/abi/cake.json'
// import wbnbABI from 'config/abi/weth.json'
// import { QuoteToken } from 'config/constants/types'
import multicall from 'utils/multicall'
// import { getWbnbAddress } from 'utils/addressHelpers'
import BigNumber from 'bignumber.js'

const CHAIN_ID = process.env.REACT_APP_CHAIN_ID

export const fetchPoolsBlockLimits = async () => {
  const poolsWithEnd = poolsConfig.filter((p) => p.sousId !== 0)
  const callsStartBlock = poolsWithEnd.map((poolConfig) => {
    return {
      address: poolConfig.contractAddress[CHAIN_ID],
      name: 'startBlock',
    }
  })
  const callsEndBlock = poolsWithEnd.map((poolConfig) => {
    return {
      address: poolConfig.contractAddress[CHAIN_ID],
      name: 'bonusEndBlock',
    }
  })

  const starts = await multicall(sousChefABI, callsStartBlock)
  const ends = await multicall(sousChefABI, callsEndBlock)

  return poolsWithEnd.map((cakePoolConfig, index) => {
    const startBlock = starts[index]
    const endBlock = ends[index]
    return {
      sousId: cakePoolConfig.sousId,
      startBlock: new BigNumber(startBlock).toJSON(),
      endBlock: new BigNumber(endBlock).toJSON(),
    }
  })
}

export const fetchPoolsTotalStaking = async () => {
  const cakePools = poolsConfig
  const cakePoolsTotalStaked = await multicall(
    cakeABI,
    cakePools.map((cakePool) => ({
      address: cakePool.stakingTokenAddress[CHAIN_ID],
      name: 'balanceOf',
      params: [cakePool.contractAddress[CHAIN_ID]],
    })),
  )

  return [
    ...cakePools.map((p, index) => ({
      sousId: p.sousId,
      totalStaked: new BigNumber(cakePoolsTotalStaked[index]).toJSON(),
    })),
  ]
}

import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [





  {
    pid: 0,
    risk: 5,
    lpSymbol: 'PHOTON-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xfe4b89e5d0e27dee812b17f3848323716cb63d38',
    },
    tokenSymbol: 'PHOTON',
    tokenAddresses: {
      97: '',
      56: '0x10a96eaecdf605a5e682bfcd2278ca7cc682eb84',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'PHOTON-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xe8774c955c30bd869645e870ba82c0dcf89caa5e',
    },
    tokenSymbol: 'PHOTON',
    tokenAddresses: {
      97: '',
      56: '0x10a96eaecdf605a5e682bfcd2278ca7cc682eb84',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },




  {
    pid: 2,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'PHOTON',
    lpAddresses: {
      97: '',
      56: '0xfe4b89e5d0e27dee812b17f3848323716cb63d38', // PHOTON-BUSD LP
    },
    tokenSymbol: 'PHOTON',
    tokenAddresses: {
      97: '',
      56: '0x10a96eaecdf605a5e682bfcd2278ca7cc682eb84',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 3,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'BUSD',
    lpAddresses: {
      97: '',
      56: '0xfe4b89e5d0e27dee812b17f3848323716cb63d38', // PHOTON-BUSD LP (PHOTON-BUSD will ignore)
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '',
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 4,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'ADA',
    lpAddresses: {
      97: '',
      56: '0x1e249df2f58cbef7eac2b0ee35964ed8311d5623', // ADA-BUSD LP
    },
    tokenSymbol: 'ADA',
    tokenAddresses: {
      97: '',
      56: '0x3ee2200efb3400fabb9aacf31297cbdd1d435d47',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 5,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'NRV',
    lpAddresses: {
      97: '',
      56: '0x401479091d0f7b8ae437ee8b054575cd33ea72bd', // NRV-BUSD LP
    },
    tokenSymbol: 'NRV',
    tokenAddresses: {
      97: '',
      56: '0x42f6f551ae042cbe50c739158b4f0cac0edb9096',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 6,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'USDC',
    lpAddresses: {
      97: '',
      56: '0x2354ef4df11afacb85a5c7f98b624072eccddbb1', // USDC-BUSD LP
    },
    tokenSymbol: 'USDC',
    tokenAddresses: {
      97: '',
      56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 7,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'DAI',
    lpAddresses: {
      97: '',
      56: '0x66fdb2eccfb58cf098eaa419e5efde841368e489', // DAI-BUSD LP
    },
    tokenSymbol: 'DAI',
    tokenAddresses: {
      97: '',
      56: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 8,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'USDT',
    lpAddresses: {
      97: '',
      56: '0x7efaef62fddcca950418312c6c91aef321375a00', // USDT-BUSD LP
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      97: '',
      56: '0x55d398326f99059ff775485246999027b3197955',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 9,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'VAI',
    lpAddresses: {
      97: '',
      56: '0x133ee93fe93320e1182923e1a640912ede17c90c', // VAI-BUSD LP
    },
    tokenSymbol: 'VAI',
    tokenAddresses: {
      97: '',
      56: '0x4bd17003473389a42daf6a0a729f6fdb328bbbd7',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 11,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'CAKE',
    lpAddresses: {
      97: '',
      56: '0x804678fa97d91b974ec2af3c843270886528a9e6', // CAKE-BUSD LP
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 12,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'ETH',
    lpAddresses: {
      97: '',
      56: '0x7213a321f1855cf1779f42c0cd85d3d95291d34c', // ETH-BUSD LP
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      97: '',
      56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 13,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'WBNB',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16', // BNB-BUSD LP
    },
    tokenSymbol: 'WBNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 14,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'BUNNY',
    lpAddresses: {
      97: '',
      56: '0x5aFEf8567414F29f0f927A0F2787b188624c10E2', // BUNNY-BNB LP
    },
    tokenSymbol: 'BUNNY',
    tokenAddresses: {
      97: '',
      56: '0xc9849e6fdb743d08faee3e34dd2d1bc69ea11a51',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 15,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'BTCB',
    lpAddresses: {
      97: '',
      56: '0xF45cd219aEF8618A92BAa7aD848364a158a24F33', // BTCB-BUSD LP
    },
    tokenSymbol: 'BTCB',
    tokenAddresses: {
      97: '',
      56: '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 16,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'XVS',
    lpAddresses: {
      97: '',
      56: '0x7eb5d86fd78f3852a3e0e064f2842d45a3db6ea2', // XVS-BNB LP
    },
    tokenSymbol: 'XVS',
    tokenAddresses: {
      97: '',
      56: '0xcf6bb5389c92bdda8a3747ddb454cb7a64626c63',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },





  {
    pid: 17,
    risk: 1,
    lpSymbol: 'USDT-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x7EFaEf62fDdCCa950418312c6C91Aef321375A00',
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      97: '',
      56: '0x55d398326f99059fF775485246999027B3197955',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 18,
    risk: 3,
    lpSymbol: 'BNB-CAKE LP',
    lpAddresses: {
      97: '',
      56: '0x0eD7e52944161450477ee417DE9Cd3a859b14fD0',
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '',
      56: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 19,
    risk: 3,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 20,
    risk: 2,
    lpSymbol: 'BTCB-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x61EB789d75A95CAa3fF50ed7E47b96c132fEc082',
    },
    tokenSymbol: 'BTCB',
    tokenAddresses: {
      97: '',
      56: '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 21,
    risk: 2,
    lpSymbol: 'ETH-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x74E4716E431f45807DCF19f284c7aA99F18a4fbc',
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      97: '',
      56: '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 22,
    risk: 2,
    lpSymbol: 'USDC-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x2354ef4df11afacb85a5c7f98b624072eccddbb1',
    },
    tokenSymbol: 'USDC',
    tokenAddresses: {
      97: '',
      56: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 23,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'XRP',
    lpAddresses: {
      97: '',
      56: '0x8339CfC9002d1ecBB23b9DE95CF17AbF0A9c2ea8', // XRP-BUSD LP
    },
    tokenSymbol: 'XRP',
    tokenAddresses: {
      97: '',
      56: '0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 24,
    risk: 2,
    lpSymbol: 'VAI-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x133ee93fe93320e1182923e1a640912ede17c90c',
    },
    tokenSymbol: 'VAI',
    tokenAddresses: {
      97: '',
      56: '0x4BD17003473389A42DAF6a0a729f6Fdb328BbBd7',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 25,
    risk: 2,
    lpSymbol: 'USDT-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x16b9a82891338f9ba80e2d6970fdda79d1eb0dae',
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      97: '',
      56: '0x55d398326f99059ff775485246999027b3197955',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 26,
    risk: 2,
    lpSymbol: 'BTCB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xf45cd219aef8618a92baa7ad848364a158a24f33',
    },
    tokenSymbol: 'BTCB',
    tokenAddresses: {
      97: '',
      56: '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 27,
    risk: 2,
    lpSymbol: 'ADA-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x28415ff2c35b65b9e5c7de82126b4015ab9d031f',
    },
    tokenSymbol: 'ADA',
    tokenAddresses: {
      97: '',
      56: '0x3ee2200efb3400fabb9aacf31297cbdd1d435d47',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },



//   {
//     pid: 6,
//     risk: 1,
//     lpSymbol: 'USDT-BUSD LP',
//     lpAddresses: {
//       97: '',
//       56: '0x7EFaEf62fDdCCa950418312c6C91Aef321375A00',
//     },
//     tokenSymbol: 'USDT',
//     tokenAddresses: {
//       97: '',
//       56: '0x55d398326f99059fF775485246999027B3197955',
//     },
//     quoteTokenSymbol: QuoteToken.BUSD,
//     quoteTokenAdresses: contracts.busd,
//   },
//   {
//     pid: 7,
//     risk: 1,
//     lpSymbol: 'DAI-BUSD LP',
//     lpAddresses: {
//       97: '',
//       56: '0x66FDB2eCCfB58cF098eaa419e5EfDe841368e489',
//     },
//     tokenSymbol: 'DAI',
//     tokenAddresses: {
//       97: '',
//       56: '0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3',
//     },
//     quoteTokenSymbol: QuoteToken.BUSD,
//     quoteTokenAdresses: contracts.busd,
//   },

]

export default farms

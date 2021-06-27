import { MenuEntry } from 'uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href:
          'https://exchange.pancakeswap.finance/#/swap?inputCurrency=BNB&outputCurrency=0x10a96eaecdf605a5e682bfcd2278ca7cc682eb84',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.pancakeswap.finance/#/add/0x10a96eaecdf605a5e682bfcd2278ca7cc682eb84/BNB',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  // {
  //   label: 'Oceans - Coming Soon',
  //   icon: 'SunIcon',
  //   href: '/',
  // },
  //   {
  //     label: 'Referrals',
  //     icon: 'GroupsIcon',
  //     href: '/referrals',
  //   },
  //   {
  //     label: 'Lottery (Pending)',
  //     icon: 'TicketIcon',
  //     href: '/',
  //   },
  // {
  //   label: 'Token House',
  //   icon: 'poolIcon',
  //   href: '/syrup',
  // },
  // {
  //   label: 'Referrals',
  //   icon: 'PoolIcon3',
  //   href: '/referrals',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Charts',
    icon: 'InfoIcon',
    items: [
      // { label: 'VFAT',
      //   href: 'https://vfat.tools/bsc/token/',
      // },
      {
        label: 'DexGuru',
        href: 'https://dex.guru/token/0x10a96eaecdf605a5e682bfcd2278ca7cc682eb84-bsc',
      },
      {
        label: 'PooCoin',
        href: 'https://poocoin.app/tokens/0x10a96eaecdf605a5e682bfcd2278ca7cc682eb84',
      },
    ],
  },
  // {
  //   label: 'Contracts',
  //   icon: 'MoreIcon',
  //   items: [
  //     {
  //       label: 'Photon',
  //       href: 'https://bscscan.com/address/0x0000000000000000000000000000000000000000',
  //     },
  //     {
  //       label: 'Masterchef (No Migrator)',
  //       href: 'https://bscscan.com/address/0x0000000000000000000000000000000000000000',
  //     },
  //     {
  //       label: 'Timelock (24h)',
  //       href: 'https://bscscan.com/address/0x0000000000000000000000000000000000000000',
  //     },
  //   ],
  // },

  {
    label: 'Audit (Soon)',
    icon: 'AuditIcon',
    href: '#',
  },

  {
    label: 'Rug Doctor Review',
    icon: 'AuditIcon',
    href: 'https://rugdoc.io/project/photonswap/',
  },

  //   {
  //     label: 'Roadmap',
  //     icon: 'NftIcon',
  //     href: 'https://docs.tokendefi.com',
  //   },
  //   {
  //     label: 'Automatic Liquidty',
  //     icon: 'IfoIcon',
  //     href: 'https://docs.tokendefi.com',
  //   },
  //   {
  //     label: 'Forked from audited Goosedefi',
  //     icon: 'GooseIcon',
  //     href: 'https://www.goosedefi.com/files/hackenAudit.pdf',
  //   },
]

export default config

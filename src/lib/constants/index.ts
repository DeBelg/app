import type { FollowSortType } from '#/types/requests'
import type { ProfileTableTitleType, ProfileTabType } from '#/types/common'

import SloveniaFlag from 'public/assets/icons/flags/slovenia.svg'
import USAFlag from 'public/assets/icons/flags/united-states.svg'
import TwitterIcon from 'public/assets/icons/twitter.svg'
import GithubIcon from 'public/assets/icons/github.svg'
import DiscordIcon from 'public/assets/icons/discord.svg'
import TelegramIcon from 'public/assets/icons/telegram.svg'
import EtherscanIcon from 'public/assets/icons/etherscan.svg'

export const APP_NAME = 'Ethereum Follow Protocol'
export const APP_NAME_SHORT = 'EFP'
export const APP_DESCRIPTION =
  'A native Ethereum protocol for following and tagging Ethereum accounts.'
export const APP_URL =
  process.env.NEXT_PUBLIC_VERCEL_URL || process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:4321'

export const ENS_SUBGRAPH_URL = `https://gateway-arbitrum.network.thegraph.com/api/${process.env.NEXT_PUBLIC_ENS_SUBGRAPH_API_KEY}/subgraphs/id/5XqPmWe6gjyrJtFn9cLy237i4cWw2j9HcUJEXsP5qGtH`

export const FETCH_LIMIT_PARAM = 20
export const LEADERBOARD_FETCH_LIMIT_PARAM = 100

export const SECOND = 1_000
export const MINUTE = 60 * SECOND
export const HOUR = 60 * MINUTE
export const DAY = 24 * HOUR
export const WEEK = 7 * DAY

export const PROFILE_TABS: ProfileTabType[] = ['following', 'followers']
export const BLOCKED_MUTED_TABS: ProfileTableTitleType[] = ['Blocked/Muted', 'Blocked/Muted By']

export const LANGUAGES = [
  { language: 'English', key: 'en', icon: USAFlag },
  { language: 'Slovenščina', key: 'si', icon: SloveniaFlag }
]

export const DEFAULT_TAGS_TO_ADD = ['irl', 'bff', 'based', 'degen', 'buidler']
export const DEFAULT_TAGS = ['no tag']
export const BLOCKED_MUTED_TAGS = ['block', 'mute']
export const SORT_OPTIONS: FollowSortType[] = ['follower count', 'latest first', 'earliest first']

export const NAV_ITEMS = [
  {
    href: () => '/',
    emoji: '🏠',
    name: 'home',
    private: false
  },
  {
    href: (url?: string) => `/${url ?? 'profile'}`,
    emoji: '👤',
    name: 'profile',
    private: true
  },
  {
    href: () => '/leaderboard',
    emoji: '🏆',
    name: 'leaderboard',
    private: false
  }
]

export const leaderboardFilters = ['mutuals', 'followers', 'following', 'blocked'] as const
export const leaderboardFiltersEmojies = ['🫂', '🤩', '👀', '☠️'] as const

export const profileCardSocials = [
  {
    name: 'etherscan',
    url: (address: string) => `https://etherscan.io/address/${address}`,
    icon: EtherscanIcon
  },
  {
    name: 'com.twitter',
    url: (username: string) => `https://twitter.com/${username}`,
    icon: TwitterIcon
  },
  {
    name: 'com.github',
    url: (username: string) => `https://github.com/${username}`,
    icon: GithubIcon
  },
  {
    name: 'com.telegram',
    url: (username: string) => `https://t.me/${username}`,
    icon: TelegramIcon
  },
  {
    name: 'com.discord',
    url: (username: string) => `https://discord.com/users/${username}`,
    icon: DiscordIcon
  }
] as const

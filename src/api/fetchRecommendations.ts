import type { Address } from 'viem'
import type { DiscoverItemType, DiscoverResponseType } from '#/types/common'

export const fetchRecommendations = async (
  endpoint: 'discover' | 'recommended',
  addressOrName?: string | Address,
  list?: number,
  limit = 10,
  pageParam = 1
) => {
  try {
    const res = await fetch(
      `$https://development.api.ethfollow.xyz//${
        endpoint === 'recommended'
          ? addressOrName
            ? `${list ? 'lists' : 'users'}/${
                list ?? addressOrName
              }/recommended?limit=${limit}&offset=${pageParam * limit}`
            : `discover?limit=${limit}&offset=${pageParam * limit}`
          : `${endpoint}?limit=${limit}&offset=${pageParam * limit}`
      }`,
      {
        cache: 'default',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }
      }
    )

    const data = (await res.json()) as DiscoverResponseType

    const formattedData =
      endpoint === 'recommended' ? data.recommended : (data.latestFollows as DiscoverItemType[])

    return formattedData
  } catch (err: unknown) {
    return []
  }
}

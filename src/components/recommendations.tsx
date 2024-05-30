'use client'

import clsx from 'clsx'
import { FollowList } from '#/components/follow-list'
import { useQuery } from '@tanstack/react-query'
import fetchDiscover from '#/api/fetchDiscover'
import LoadingSpinner from './loading-spinner'

interface RecommendationsProps {
  header: string
  className?: string
}

const Recommendations = ({ header, className }: RecommendationsProps) => {
  const { data: profilesToRecommend, isLoading } = useQuery({
    queryKey: ['discover'],
    queryFn: async () => {
      const discoverAccounts = await fetchDiscover()
      return discoverAccounts
    }
  })

  return (
    <div className={clsx('flex flex-col gap-8', className)}>
      <h2 className='text-start text-3xl font-bold'>{header}</h2>
      {isLoading && <LoadingSpinner />}
      {profilesToRecommend && (
        <FollowList
          listClassName='rounded-xl gap-7'
          profiles={profilesToRecommend?.map(account => ({
            address: account.address,
            tags: [] as string[]
          }))}
          showFollowsYouBadges={true}
          showTags={false}
        />
      )}
    </div>
  )
}

export default Recommendations

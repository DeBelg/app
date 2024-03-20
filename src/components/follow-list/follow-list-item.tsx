import { Box } from '@radix-ui/themes'
import { FollowButton } from '#/components/follow-button'
import { FollowListItemName } from './follow-list-item-name'
import { FollowListItemTags } from './follow-list-item-tags'
import type { FollowListProfile } from '.'
import { useEnsProfile } from '#/hooks/use-ens-profile'

export interface FollowListItemProps {
  className?: string
  profile: FollowListProfile
  showFollowsYouBadges: boolean
  showTags: boolean
}

export function FollowListItem({
  className = '',
  profile,
  showFollowsYouBadges,
  showTags
}: FollowListItemProps) {
  const { data: ensProfile } = useEnsProfile(profile.address)
  const profileName = ensProfile?.name
  const profileAvatar = ensProfile?.avatar

  return (
    <Box className={`flex items-center justify-between ${className}`}>
      {/* Left section: Avatar and Name */}
      <FollowListItemName
        address={profile.address}
        name={profileName}
        showFollowsYouBadges={showFollowsYouBadges}
        avatarUrl={profileAvatar}
        className='flex-none w-56' // Fixed width for consistent layout
      />

      {/* Middle section: Tags (conditionally displayed) */}
      {showTags && (
        <FollowListItemTags
          address={profile.address}
          tags={profile.tags}
          className='flex items-start'
        />
      )}

      {/* Right section: Follow Button with consistent width */}
      <FollowButton address={profile.address} className='rounded-xl' />
    </Box>
  )
}

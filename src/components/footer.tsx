import Image from 'next/image'
import X from 'public/assets/icons/socials/x.svg'
import Github from 'public/assets/icons/socials/github.svg'
import Discord from 'public/assets/icons/socials/discord.svg'

const footerPages = [
  {
    text: 'Team',
    href: 'https://github.com/orgs/ethereumfollowprotocol/people'
  },
  {
    text: 'Documentation',
    href: 'https://docs.ethfollow.xyz'
  }
]

const socials = [
  {
    text: 'X',
    href: 'https://x.com/ethfollowpr',
    icon: X
  },
  {
    text: 'GitHub',
    href: 'https://github.com/ethereumfollowprotocol',
    icon: Github
  },
  /**
   * TODO: add Discord link once we have one
   */
  {
    text: 'Discord',
    href: 'https://discord.com/invite/hDTFKmxwwV',
    icon: Discord
  }
]

export function Footer() {
  return (
    <footer className='w-full font-sans flex justify-center border-t-2 border-t-pink py-10 items-center'>
      <div className='flex flex-row items-center justify-center h-full w-full gap-44'>
        <section className='flex gaü-5 align-middle'>
          <Image src='/assets/logo.png' width={160} height={160} alt='Ethereum Follow Protocol' />
        </section>
        <section className='my-auto flex align-middle'>
          <div className='my-auto flex flex-col justify-center gap-6'>
            {footerPages.map((route, index) => (
              <div className='inline font-bold' key={`route-${route.href}`}>
                <a href={route.href} className={`text-lg text-pink-400`}>
                  <span>{route.text}</span>
                </a>
              </div>
            ))}
            <div className='flex items-center gap-10'>
              {socials.map(item => (
                <a key={item.text} href={item.href}>
                  <Image src={item.icon} className='w-8' alt={item.text} />
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
    </footer>
  )
}

/**
 * SlinkyPixels : Footer
 */
import { GitHub, Instagram, Linkedin, Threads, X } from '@/components/icons'
import { Typography } from '@/components/typography'
import { client } from '@/sanity/lib/client'
import { SETTINGS_QUERY } from '@/sanity/lib/queries'
import Link from 'next/link'

const socialIcons: Record<string, React.FC<{ className?: string }>> = {
    X: X,
    Instagram: Instagram,
    Threads: Threads,
    GitHub: GitHub,
    LinkedIn: Linkedin
}

const Footer = async () => {
    /**
     * Get settings
     */
    const settings = await client.fetch(SETTINGS_QUERY)

    /**
     * Destructure social links
     */
    const socialLinks = settings?.socialLinks || []

    return (
        <footer className='container mt-16 flex items-start justify-between border-t py-8'>
            <div className='flex flex-row items-center justify-center gap-4'>
                {socialLinks.map((socialLink) => {
                    if (!socialLink.name || !socialLink.url) return null

                    const Icon = socialIcons[socialLink.name]

                    return (
                        <Link
                            href={socialLink.url}
                            key={socialLink._key}
                            target='_blank'
                            className='group'>
                            <Icon className='size-4 origin-bottom transition-all duration-200 group-hover:scale-150 group-hover:text-secondary' />
                        </Link>
                    )
                })}
            </div>
            <div className='flex flex-row items-center justify-center gap-4'>
                <Typography
                    variant='small'
                    muted>
                    &copy; {new Date().getFullYear()} {settings?.title}
                </Typography>
            </div>
        </footer>
    )
}

export default Footer

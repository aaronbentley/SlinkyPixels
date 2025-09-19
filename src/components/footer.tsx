/**
 * SlinkyPixels : Footer
 */
import { CopyrightIcon } from '@/components/icons'
import SocialLinks from '@/components/social-links'
import { Typography } from '@/components/typography'
import { client } from '@/sanity/lib/client'
import { SETTINGS_QUERY } from '@/sanity/lib/queries'

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
            <SocialLinks socialLinks={socialLinks} />
            <div className='flex flex-row items-center justify-center gap-1.5'>
                <CopyrightIcon className='size-4 stroke-[1.5] text-muted-foreground' />
                <Typography
                    variant='small'
                    muted>
                    {new Date().getFullYear()} {settings?.title}
                </Typography>
            </div>
        </footer>
    )
}

export default Footer

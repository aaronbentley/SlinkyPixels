/**
 * SlinkyPixels : Social Links
 */
import {
    AppleMusic,
    Facebook,
    GitHub,
    Instagram,
    Linkedin,
    Reddit,
    Threads,
    X,
    XboxIcon,
    Youtube
} from '@/components/icons'
import Link from '@/components/link'
import { cn } from '@/lib/utils'
import { Settings } from '@/sanity/types'

/**
 * Social icons map
 */
const socialIcons: Record<string, React.FC<{ className?: string }>> = {
    X: X,
    Instagram: Instagram,
    GitHub: GitHub,
    Reddit: Reddit,
    Threads: Threads,
    Facebook: Facebook,
    Youtube: Youtube,
    LinkedIn: Linkedin,
    'Apple Music': AppleMusic,
    Xbox: XboxIcon
}

const SocialLinks = ({
    socialLinks,
    className
}: {
    socialLinks: Settings['socialLinks']
    className?: string
}) => {
    return (
        <div
            className={cn(
                ['flex', 'flex-row', 'items-center', 'justify-center', 'gap-4'],
                className
            )}>
            {socialLinks &&
                socialLinks.map((socialLink) => {
                    if (!socialLink.name || !socialLink.url) return null

                    const Icon = socialIcons[socialLink.name]

                    return (
                        <Link
                            href={socialLink.url}
                            key={socialLink._key}
                            title={`Say hi on ${socialLink.name}`}
                            aria-label={`Say hi on ${socialLink.name}`}
                            rel='noopener noreferrer'
                            target='_blank'
                            className='group'>
                            <Icon className='size-4 origin-bottom text-muted-foreground transition-all duration-200 group-hover:scale-150 group-hover:text-secondary' />
                        </Link>
                    )
                })}
        </div>
    )
}

export default SocialLinks

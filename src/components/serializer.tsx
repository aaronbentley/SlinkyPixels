/**
 * SlinkyPixels : Portable Text Serializer
 */
import Link from '@/components/link'
import { Typography } from '@/components/typography'
import { resolveLinkURL } from '@/lib/helpers'
import { PortableTextReactComponents } from 'next-sanity'

/**
 * Base serializer for Portable Text
 */
const baseSerializer: Partial<PortableTextReactComponents> = {
    types: {},
    block: {
        normal: ({ children }) => (
            <Typography variant='p'>{children}</Typography>
        ),
        h1: ({ children }) => <Typography variant='h1'>{children}</Typography>,
        h2: ({ children }) => <Typography variant='h2'>{children}</Typography>,
        h3: ({ children }) => <Typography variant='h3'>{children}</Typography>,
        h4: ({ children }) => <Typography variant='h4'>{children}</Typography>,
        h5: ({ children }) => <Typography variant='h5'>{children}</Typography>,
        h6: ({ children }) => <Typography variant='h6'>{children}</Typography>,
        lead: ({ children }) => (
            <Typography variant='lead'>{children}</Typography>
        ),
        blockquote: ({ children }) => (
            <Typography variant='blockquote'>{children}</Typography>
        )
    },
    marks: {
        strong: ({ children }) => (
            <Typography variant='strong'>{children}</Typography>
        ),
        em: ({ children }) => <Typography variant='em'>{children}</Typography>,
        underline: ({ children }) => (
            <Typography
                as='span'
                className='underline underline-offset-4'>
                {children}
            </Typography>
        ),
        'strike-through': ({ children }) => (
            <Typography
                variant='del'
                className='line-through decoration-2'>
                {children}
            </Typography>
        ),
        link: ({ children, value }) => {
            const {
                customUrl = false,
                destinationRef = null,
                destinationHref = '',
                blank = false
            } = value

            // Resolve link destination ref/url
            const href = resolveLinkURL({
                customUrl,
                destinationRef,
                destinationHref
            })

            return (
                <Link
                    href={href}
                    target={blank ? '_blank' : '_self'}
                    className='underline-offset-4 hover:underline'>
                    {children}
                </Link>
            )
        }
    },
    list: {
        bullet: ({ children }) => (
            <Typography variant='ul'>{children}</Typography>
        ),
        number: ({ children }) => (
            <Typography variant='ol'>{children}</Typography>
        )
    },
    listItem: {
        bullet: ({ children }) => (
            <Typography variant='li'>{children}</Typography>
        ),
        number: ({ children }) => (
            <Typography variant='li'>{children}</Typography>
        )
    }
}

/**
 * Serializes Portable Text to React components.
 *
 * @param customSerializer - An optional object containing custom serializers for specific Portable Text components.
 * @returns The serialized Portable Text React components.
 */
const serializer = ({
    customSerializer = {}
}: {
    customSerializer?: Partial<PortableTextReactComponents>
} = {}): Partial<PortableTextReactComponents> => ({
    ...baseSerializer,
    ...customSerializer
})

export default serializer

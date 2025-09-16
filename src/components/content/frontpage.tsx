/**
 * SlinkyPixels : Content : Frontpage
 */

import Link from '@/components/link'
import { headingBaseClasses, Typography } from '@/components/typography'
import { Button, buttonVariants } from '@/components/ui/button'
import { resolveLinkURL } from '@/lib/helpers'
import { cn } from '@/lib/utils'

const Frontpage = ({
    id,
    order,
    title,
    content,
    buttons
}: {
    id: string
    order: number
    title?: string
    content?: string
    buttons?: {
        _key: string
        label: string
        customUrl?: boolean
        destinationRef?:
            | { _type: string; title: string; slug: { current: string } }
            | undefined
            | null
        destinationHref?: string
        blank?: boolean
    }[]
}) => {
    return (
        <div
            id={id}
            data-order={order}
            className={cn([
                'container',
                'flex',
                'flex-1',
                'flex-col',
                'gap-y-2',
                'items-center',
                'justify-center'
            ])}>
            <Typography
                variant='h1'
                display
                className={cn([
                    headingBaseClasses,
                    'px-2',
                    'text-transparent',
                    'bg-linear-to-r',
                    'from-primary',
                    'via-secondary',
                    'to-tertiary',
                    'bg-clip-text',
                    'tracking-tighter',
                    'backdrop-blur-lg'
                ])}>
                {title}
            </Typography>
            <Typography
                variant='lead'
                weight='light'
                className={cn(['tracking-tighter'])}
                muted>
                {content}
            </Typography>
            {buttons && buttons.length > 0 && (
                <div className='mt-4 flex flex-wrap justify-center gap-3'>
                    {buttons.map((button) => {
                        /**
                         * Destructure button properties
                         */
                        const {
                            _key,
                            blank,
                            customUrl,
                            destinationRef,
                            destinationHref,
                            label
                        } = button

                        /**
                         * Verify button properties
                         */
                        if (
                            !label ||
                            !destinationRef ||
                            (customUrl && !destinationHref)
                        )
                            return null

                        /**
                         * Resolve button item URL
                         */
                        const href = resolveLinkURL({
                            customUrl,
                            destinationRef,
                            destinationHref
                        })

                        return (
                            <Button
                                asChild
                                key={_key}
                                className={cn(
                                    buttonVariants({
                                        variant: 'secondary',
                                        size: 'lg'
                                    }),
                                    'text-background',
                                    'min-w-24'
                                )}>
                                <Link
                                    target={blank ? '_blank' : '_self'}
                                    href={href}>
                                    {label}
                                </Link>
                            </Button>
                        )
                    })}
                </div>
            )}
        </div>
    )
}

export default Frontpage

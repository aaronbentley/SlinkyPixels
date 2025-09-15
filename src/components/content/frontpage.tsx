/**
 * SlinkyPixels : Content : Frontpage
 */

import { headingBaseClasses, Typography } from '@/components/typography'
import { cn } from '@/lib/utils'

const Frontpage = ({
    id,
    order,
    title,
    content
}: {
    id: string
    order: number
    title?: string
    content?: string
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
        </div>
    )
}

export default Frontpage

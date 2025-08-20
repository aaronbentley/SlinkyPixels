/**
 * SlinkyPixels : Content : Frontpage
 */

import { cn } from '@/lib/utils'
import { Typography } from '../typography'

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
                    'px-2',
                    'text-transparent',
                    'bg-linear-to-r',
                    'from-primary',
                    'to-secondary',
                    'bg-clip-text',
                    'tracking-tighter',
                    'leading-96'
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

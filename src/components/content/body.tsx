/**
 * SlinkyPixels : Content : Body
 */

import { cn } from '@/lib/utils'
import { PortableText, PortableTextBlock } from 'next-sanity'
import serializer from '../serializer'

const Body = ({
    id,
    order,
    content
}: {
    id: string
    order: number
    content?: PortableTextBlock[]
}) => {
    /**
     * Bail early if no content
     */
    if (!content || content.length === 0) return null

    return (
        <div
            id={id}
            data-order={order}
            className={cn(['flex', 'flex-col', 'gap-12', 'container'])}>
            <PortableText
                value={content}
                components={serializer()}
            />
        </div>
    )
}

export default Body

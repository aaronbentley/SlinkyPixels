/**
 * SlinkyPixels : Content : Body
 */
import serializer from '@/components/serializer'
import { cn } from '@/lib/utils'
import { PortableText, PortableTextBlock } from 'next-sanity'

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
            className={cn([
                'flex',
                'flex-col',
                'gap-8',
                // 'md:gap-12',
                'container',
                'lg:max-w-[980px]',
                'mx-auto',
                'pb-12',
                'md:pb-16'
            ])}>
            <PortableText
                value={content}
                components={serializer()}
            />
        </div>
    )
}

export default Body

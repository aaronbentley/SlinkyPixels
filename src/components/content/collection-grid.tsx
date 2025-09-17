/**
 * SlinkyPixels : Content : Collection Grid
 */
import Link from '@/components/link'
import { resolveDocumentReferenceURL } from '@/lib/helpers'
import { cn } from '@/lib/utils'
import { Slug } from '@/sanity/types'
import Image, { ImageProps } from '@components/image'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from '@ui/card'

type CollectionGridContentItemProps = {
    _id: string
    _type: string
    title: string
    excerpt: string
    slug: Slug
    image: ImageProps['image']
}

const CollectionGrid = async ({
    id,
    order,
    contentType,
    limit,
    content
}: {
    id: string
    order: number
    contentType?: 'post' | 'service' | 'team' | 'work' | 'custom'
    limit?: number | undefined
    content?: CollectionGridContentItemProps[] | null
}) => {
    /**
     * If no contentType return null
     */
    if (!contentType) return null

    /**
     * If contentType is custom & no custom return null
     */
    if (contentType === 'custom' && !content) return null

    return (
        <div
            id={id}
            data-order={order}
            className={cn(['container'])}>
            <div className='grid grid-cols-1 gap-6 lg:grid-cols-3'>
                {content &&
                    (limit ? content.slice(0, limit) : content).map(
                        (contentItem) => {
                            /**
                             * If no content item, return null
                             */
                            if (!contentItem) return null

                            /**
                             * If no content item slug, return null
                             */
                            if (!contentItem.slug || !contentItem.slug.current)
                                return null

                            /**
                             * Resolve document reference URL
                             */
                            const href = resolveDocumentReferenceURL(
                                contentItem._type,
                                contentItem.slug
                            )

                            return (
                                <Link
                                    key={contentItem._id}
                                    href={href}>
                                    <Card className='h-full pt-0'>
                                        {contentItem.image && (
                                            <Image
                                                image={contentItem.image}
                                                alt={contentItem.title}
                                                width={480}
                                                height={320}
                                                className='aspect-4/3 rounded-t-xl object-cover'
                                            />
                                        )}
                                        <CardHeader>
                                            <CardTitle>
                                                {contentItem.title}
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <CardDescription>
                                                {contentItem.excerpt}
                                            </CardDescription>
                                        </CardContent>
                                    </Card>
                                </Link>
                            )
                        }
                    )}
            </div>
        </div>
    )
}

export default CollectionGrid

'use client'
/**
 * SlinkyPixels : Image Component
 */
import { cn } from '@/lib/utils'
import {
    SanityAssetSourceData,
    SanityImageCrop,
    SanityImageHotspot,
    SanityImageMetadata
} from '@/sanity/types'
import { SanityImage } from 'sanity-image'

/**
 * Set Image defaults
 */
export const DEFAULT_IMAGE_WIDTH = 1160
export const DEFAULT_IMAGE_QUALITY = 75
export const DEFAULT_IMAGE_MODE = 'cover'

/**
 * Define ImageProps
 */
export type ImageProps = {
    image: {
        _type: 'image'
        asset: {
            _id: string
            _type: 'sanity.imageAsset'
            _createdAt: string
            _updatedAt: string
            _rev: string
            originalFilename?: string
            label?: string
            title?: string
            description?: string
            altText?: string
            sha1hash?: string
            extension?: string
            mimeType?: string
            size?: number
            assetId?: string
            uploadId?: string
            path?: string
            url?: string
            metadata: SanityImageMetadata | null
            source?: SanityAssetSourceData
        } | null
        crop?: SanityImageCrop
        hotspot?: SanityImageHotspot
        alt?: string
    }
    width: number
    height?: number | undefined
    priority?: boolean
    quality?: number
    mode?: 'cover' | 'contain'
    htmlWidth?: number
    htmlHeight?: number
    // sizes?: string
    className?: string
    // visualEditingPath?: string
    [key: string]: unknown
}

const Image = ({
    image,
    priority = false,
    width = DEFAULT_IMAGE_WIDTH,
    height = undefined,
    quality = DEFAULT_IMAGE_QUALITY,
    mode = DEFAULT_IMAGE_MODE,
    htmlWidth = undefined,
    htmlHeight = undefined,
    // sizes = undefined,
    className = undefined,
    // visualEditingPath = undefined,
    ...rest
}: ImageProps) => {
    /**
     * If no image props return null
     */
    if (!image) return null

    /**
     * Destructure image props
     */
    const { asset, crop, hotspot, alt } = image

    /**
     * Bail early if no asset
     */
    if (!asset) return null

    /**
     * Create data attribute for Visual Editing
     */
    // const visualEditingAttr = createDataAttribute({
    //     id: asset._id,
    //     type: 'image'
    // })

    return (
        <SanityImage
            // data-sanity={
            //     visualEditingPath
            //         ? visualEditingAttr(visualEditingPath)
            //         : undefined
            // }
            id={asset._id}
            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
            fetchPriority={priority ? 'high' : 'auto'}
            loading={priority ? 'eager' : 'lazy'}
            // Specify how big it is expected to render so a reasonable srcSet can be generated using `width`, `height`, or both
            width={width}
            height={height}
            // Choose whether you want it to act like `object-fit: cover` or `object-fit: contain`, or leave it out to use the default (contain)
            mode={mode}
            // Want to specify the final rendered dimensions of the image?
            // Pass them in as `htmlWidth` and `htmlHeight` and Sanity will add them as attributes to the img tag
            htmlWidth={htmlWidth ?? undefined}
            htmlHeight={htmlHeight ?? undefined}
            // Have hotspot or crop data from Sanity? Pass it in!
            hotspot={{
                x: hotspot?.x ?? 0,
                y: hotspot?.y ?? 0
            }}
            crop={{
                top: crop?.top ?? 0,
                right: crop?.right ?? 0,
                bottom: crop?.bottom ?? 0,
                left: crop?.left ?? 0
            }}
            // Want low-quality image previews? Fetch them from Sanity and pass them in too.
            preview={asset?.metadata?.lqip}
            // Have a burning desire to have Sanity change the format or something?
            // Most of the visual effects from the Sanity Image API are available:
            queryParams={{
                q: quality
            }}
            alt={(alt || asset.altText) ?? ''}
            className={cn(
                [
                    'block',
                    'h-auto',
                    'max-w-full'
                    // 'data-[lqip=true]:min-w-full!'
                ],
                className
            )}
            {...rest}
        />
    )
}

export default Image

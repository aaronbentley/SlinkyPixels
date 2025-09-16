/**
 * SlinkyPixels : Helpers
 */

/**
 * Resolve link URL as either a document reference or a custom URL
 */
export const resolveLinkURL = ({
    customUrl = false,
    destinationRef = undefined,
    destinationHref = undefined
}: {
    customUrl: boolean | undefined
    destinationRef:
        | { _type: string; title: string; slug: { current: string } }
        | undefined
        | null
    destinationHref: string | undefined
}) => {
    /**
     * Bail early if no link to resolve
     */
    if (!destinationRef && !destinationHref) {
        console.error('No link to resolve.', {
            customUrl,
            destinationRef,
            destinationHref
        })
        throw new Error('No link to resolve.')
    }

    /**
     * Check if Menu Item is a reference
     */
    const isReference = !customUrl && destinationRef && destinationRef._type

    /**
     * Resolve link URLs if a reference, else pass through the custom URL
     */
    if (isReference) {
        return resolveDocumentReferenceURL(
            destinationRef._type,
            destinationRef.slug
        )
    } else {
        if (destinationHref) {
            return destinationHref
        } else {
            return '#'
        }
    }
}

/**
 * Resolve document reference URLs
 */
export const resolveDocumentReferenceURL = (
    type: string,
    slug: { current: string }
) => {
    /**
     * Throw error if no document type or slug to resolve
     */
    if (!type) {
        throw new Error('No document type to resolve.')
    }
    if (!slug) {
        throw new Error('No document slug to resolve.')
    }

    const documentPrefixMap: {
        [key: string]: string
    } = {
        post: 'posts',
        work: 'work'
    }

    switch (type) {
        case 'post':
        case 'work':
            return `/${documentPrefixMap[type]}/${slug.current}/`
        case 'page':
            /**
             * Catch frontpage slug '/'
             */
            if (slug.current === '/') {
                return slug.current
            }

            /**
             * Catch all other pages
             */
            return `/${slug.current}/`
        default:
            return slug.current
    }
}

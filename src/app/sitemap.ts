/**
 * SlinkyPixels : Sitemap generator
 */
import { resolveDocumentReferenceURL } from '@/lib/helpers'
import { sanityFetch } from '@/sanity/lib/live'
import { SITEMAP_QUERY } from '@/sanity/lib/queries'
import { Slug } from '@/sanity/types'
import { MetadataRoute } from 'next'

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
    /**
     * Fetch all content paths from Sanity (optimize in one query)
     */
    const { data: paths } = await sanityFetch({
        query: SITEMAP_QUERY,
        perspective: 'published',
        stega: false
    })
    /**
     * Loop through paths and build sitemap objects
     */
    return paths
        .filter((path) => path.slug && path.slug.current)
        .map((path) => {
            /**
             * Build URL
             */
            const baseUrl = process.env.APP_URL!
            const pathUrl = resolveDocumentReferenceURL(
                path._type,
                path.slug as Slug
            )
            const url = new URL(`${baseUrl}${pathUrl}`).toString()
            const lastModified = path._updatedAt

            return {
                url,
                lastModified,
                changeFrequency: 'monthly',
                priority: path._type === 'page' ? 0.7 : 0.5
            }
        })
}

export default sitemap

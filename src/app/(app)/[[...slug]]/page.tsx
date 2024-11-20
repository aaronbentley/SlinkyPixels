/**
 * SlinkyPixels : /[[...slug]]/ - Page
 * Optional catch-all route segment
 * @link https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes#optional-catch-all-segments
 */
import Composer from '@/components/composer'
import { client } from '@/sanity/lib/client'
import { sanityFetch } from '@/sanity/lib/live'
import { PAGES_QUERY, PAGE_QUERY } from '@/sanity/lib/queries'
import { QueryParams } from 'next-sanity'
import { notFound } from 'next/navigation'

export const generateStaticParams = async () => {
    const pages = await client.fetch(PAGES_QUERY)
    return pages.map((page) => ({
        slug: [page?.slug?.current]
    }))
}

const Page = async ({ params }: { params: Promise<QueryParams> }) => {
    const { slug: [slug = '/'] = [] } = await params

    const { data: page } = await sanityFetch({
        query: PAGE_QUERY,
        params: { slug }
    })

    if (!page) notFound()

    return <Composer content={page.content} />
}

export default Page

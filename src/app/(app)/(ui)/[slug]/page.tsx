/**
 * SlinkyPixels : /[slug]/ - Page
 */
import Composer from '@/components/composer'
import { Typography } from '@/components/typography'
import { Separator } from '@/components/ui/separator'
import { sanityFetch } from '@/sanity/lib/live'
import { PAGE_PATHS_QUERY, PAGE_QUERY } from '@/sanity/lib/queries'
import { notFound } from 'next/navigation'

export const generateStaticParams = async () => {
    const { data: pagePaths } = await sanityFetch({
        query: PAGE_PATHS_QUERY,
        perspective: 'published',
        stega: false
    })

    return pagePaths.map((page) => ({
        slug: page?.slug?.current
    }))
}

export const generateMetadata = async ({
    params
}: {
    params: Promise<{ slug: string }>
}) => {
    const { data: page } = await sanityFetch({
        query: PAGE_QUERY,
        params: await params
    })

    /**
     * If page is not found, return 404
     */
    if (!page) notFound()

    return {
        title: page.title
    }
}

const Page = async ({ params }: { params: Promise<{ slug: string[] }> }) => {
    const { data: page } = await sanityFetch({
        query: PAGE_QUERY,
        params: await params
    })

    /**
     * Bail if no page found
     */
    if (!page) notFound()

    return (
        <>
            <div className='container mx-auto flex flex-col items-start gap-2 py-16 md:py-24'>
                <Typography variant='h1'>{page.title}</Typography>
                <Separator className='mt-6 md:mt-12' />
            </div>
            <Composer content={page.content} />
        </>
    )
}

export default Page

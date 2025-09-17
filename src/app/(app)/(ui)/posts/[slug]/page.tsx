/**
 * SlinkyPixels : /posts/[slug]/ - Page
 */
import { sanityFetch } from '@/sanity/lib/live'
import { POST_PATHS_QUERY, POST_QUERY } from '@/sanity/lib/queries'
import { notFound } from 'next/navigation'

export const generateStaticParams = async () => {
    const { data: posts } = await sanityFetch({
        query: POST_PATHS_QUERY,
        perspective: 'published',
        stega: false
    })

    return posts.map((post) => ({
        slug: post?.slug?.current
    }))
}

const Post = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { data: post } = await sanityFetch({
        query: POST_QUERY,
        params: await params
    })

    /**
     * Bail if no post found
     */
    if (!post) notFound()

    return <h1>{post.title}</h1>
}

export default Post

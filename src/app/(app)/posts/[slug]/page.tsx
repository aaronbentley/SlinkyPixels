/**
 * SlinkyPixels : /posts/[slug]/ - Page
 */
import { client } from '@/sanity/lib/client'
import { sanityFetch } from '@/sanity/lib/live'
import { POST_QUERY, POSTS_QUERY } from '@/sanity/lib/queries'
import { QueryParams } from 'next-sanity'
import { notFound } from 'next/navigation'

export const generateStaticParams = async () => {
    const posts = await client.fetch(POSTS_QUERY)

    return posts.map((post) => ({
        slug: post?.slug?.current
    }))
}

const Post = async ({ params }: { params: Promise<QueryParams> }) => {
    const { data: post } = await sanityFetch({
        query: POST_QUERY,
        params: await params
    })

    if (!post) notFound()

    return <h1>{post.title}</h1>
}

export default Post

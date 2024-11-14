/**
 * SlinkyPixels : /posts/ - Page
 */
import { sanityFetch } from '@/sanity/lib/live'
import { POSTS_QUERY } from '@/sanity/lib/queries'

const PostsPage = async () => {
    const { data: posts } = await sanityFetch({
        query: POSTS_QUERY
    })

    return (
        <ul className='container mx-auto grid grid-cols-1 divide-y divide-blue-100'>
            {posts.map((post) => (
                <li key={post._id}>
                    <a
                        className='block p-4 hover:bg-blue-50'
                        href={`/posts/${post?.slug?.current}`}>
                        {post?.title}
                    </a>
                </li>
            ))}
        </ul>
    )
}

export default PostsPage

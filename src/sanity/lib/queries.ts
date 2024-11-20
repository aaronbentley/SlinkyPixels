import { defineQuery } from 'next-sanity'

/**
 * Document type [Page] queries
 */
export const PAGES_QUERY = defineQuery(
    `*[_type == 'page' && defined(slug.current)]{slug}`
)

export const PAGE_QUERY = defineQuery(
    `*[_type == 'page' && slug.current == $slug][0]{title,content,image}`
)

/**
 * Document type [Post] queries
 */
export const POSTS_QUERY = defineQuery(
    `*[_type == 'post' && defined(slug.current)][0...12]{_id,title,slug}`
)

export const POST_QUERY = defineQuery(
    `*[_type == 'post' && slug.current == $slug][0]{title,content,image}`
)

/**
 * Document type [Settings] queries
 */
export const SETTINGS_QUERY = defineQuery(
    `*[_type == 'settings'][0]{title,description,url,socialLinks}`
)

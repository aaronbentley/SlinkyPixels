import { defineQuery } from 'next-sanity'

/**
 * Document type [Page] queries
 */
export const PAGE_PATHS_QUERY = defineQuery(`
    *[
        _type == 'page' &&
        defined(slug.current) &&
        slug.current != '/'
    ] {
        slug
    }
`)

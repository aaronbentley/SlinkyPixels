/**
 * SlinkyPixels : Queries
 */
import { defineQuery } from 'next-sanity'

/**
 * Common fragments
 */
export const slug = `
    slug {
        current
    }
`

const imageAssetReference = `
    image {
        ...,
        asset-> {
            ...,
            metadata
        }
    }
`

/**
 * Content type [Block] fragment
 */
const frontpage = `
    _type == 'frontpage' => {
        title,
        content,
        buttons[] {
            _key,
            label,
            customUrl,
            destinationHref,
            destinationRef-> {
                _type,
                title,
                ${slug}
            },
            blank
        }
    }
`

const body = `
    _type == 'body' => {
        content[] {
            ...,
            markDefs[] {
                ...,
                (_type == 'link' && customUrl != true) => {  
                    destinationRef-> {
                        _type,
                        title,
                        ${slug}
                    }
                }
            },
        }
    }
`

const collectionGrid = `
    _type == 'collectionGrid' => {
        contentType,
        limit,
        "content": select(
            defined(customContent) && contentType == 'custom' => customContent[]-> {
                _id,
                _type,
                title,
                excerpt,
                ${slug},
                ${imageAssetReference}
            },
            defined(contentType) && contentType != 'custom'  => *[_type == ^.contentType] {
                _id,
                _type,
                title,
                excerpt,
                ${slug},
                ${imageAssetReference}
            }|order(title asc),
            []
        )
    }
`

const content = `
    content[] {
        ...,
        _key,
        _type,
        'title': coalesce(title, 'Content Title'),
        ${frontpage},
        ${body},
        ${collectionGrid}
    }
`

/**
 * Document type [Page] queries
 */
export const PAGE_PATHS_QUERY = defineQuery(`
    *[
        _type == 'page' &&
        defined(slug.current) &&
        slug.current != '/'
    ] {
        ${slug}
    }
`)

export const PAGES_QUERY = defineQuery(`
    *[
        _type == 'page' &&
        defined(slug.current) &&
        slug.current != '/'
    ] {
        ...,
        ${imageAssetReference}
    }
`)

export const PAGE_QUERY = defineQuery(`
    *[
        _type == 'page' && 
        defined(slug.current) &&
        slug.current == $slug
    ][0] {
        title,
        ${content},
        ${imageAssetReference}
    }
`)

/**
 * Document type [Post] queries
 */
export const POST_PATHS_QUERY = defineQuery(`
    *[
        _type == 'post' && 
        defined(slug.current)
    ]{ 
        ${slug}
    }
`)

export const POSTS_QUERY = defineQuery(`
    *[
        _type == 'post' && 
        defined(slug.current)
    ] {
        _id,
        title,
        ${slug},
    }
`)

export const POST_QUERY = defineQuery(`
    *[
        _type == 'post' && 
        defined(slug.current) &&
        slug.current == $slug
    ][0] {
        title,
        ${content},
        ${imageAssetReference}
    }
`)

/**
 * Document type [Work] queries
 */
export const WORK_PATHS_QUERY = defineQuery(`
    *[
        _type == 'work' &&
        defined(slug.current)
    ] {
        ${slug}
    }
`)

export const WORKS_QUERY = defineQuery(`
    *[
        _type == 'work' &&
        defined(slug.current)
    ] {
        ...,
        ${imageAssetReference}
    }
`)

export const WORK_QUERY = defineQuery(`
    *[
        _type == 'work' &&
        defined(slug.current) &&
        slug.current == $slug
    ][0] {
        ...,
        ${content},
        ${imageAssetReference}
    }
`)

/**
 * Document type [Settings] queries
 */
export const SETTINGS_QUERY = defineQuery(`
    *[_type == 'settings'][0] {
        title,
        description,
        url,
        socialLinks
    }
`)

import { defineLocations } from 'sanity/presentation'

export const locations = {
    page: defineLocations({
        select: {
            id: '_id',
            title: 'title',
            slug: 'slug.current'
        },
        resolve: (doc) => ({
            locations: [
                {
                    title: doc?.title || 'Untitled',
                    href: doc?.id === 'frontpage' ? '/' : `/${doc?.slug}/`
                }
            ]
        })
    }),
    post: defineLocations({
        select: {
            id: '_id',
            title: 'title',
            slug: 'slug.current'
        },
        resolve: (doc) => ({
            locations: [
                {
                    title: 'Posts',
                    href: '/posts/'
                },
                {
                    title: doc?.title || 'Untitled',
                    href: `/posts/${doc?.slug}/`
                }
            ]
        })
    })
}

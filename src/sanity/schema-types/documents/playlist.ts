/**
 * Slinky Pixels : Playlist
 */
import { PlaylistIcon } from '@/sanity/icons/icons'
import { defineField, defineType } from 'sanity'

// Define document type
const documentType = 'Playlist'

export const Playlist = defineType({
    name: documentType.toLowerCase(),
    title: documentType,
    type: 'document',
    icon: PlaylistIcon,
    groups: [
        {
            name: 'content',
            title: 'Content',
            default: true
        },
        {
            name: 'media',
            title: 'Media'
        },
        {
            name: 'seo',
            title: 'SEO'
        }
    ],
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            description: `${documentType} Title`,
            validation: (Rule) =>
                Rule.required().error(`Specify ${documentType} Title`),
            group: 'content'
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            description: 'Generate slug from the Title',
            group: 'content',
            validation: (Rule) =>
                Rule.required().error(`Specify ${documentType} Slug`),
            options: {
                source: 'title',
                // slugify: (source) => {
                //     const slug = slugify(source, {
                //         replacement: '-',
                //         remove: /[*+~.()'"!:@]/g,
                //         lower: true,
                //         trim: true
                //     })

                //     return slug
                // },
                maxLength: 96
            }
        }),
        defineField({
            name: 'playlistId',
            title: 'Playlist ID',
            type: 'string',
            description: `YouTube ${documentType} ID`,
            validation: (Rule) =>
                Rule.required().error(`Specify ${documentType} ID`),
            group: 'content'
        }),
        defineField({
            name: 'content',
            title: 'Content',
            type: 'content',
            group: 'content',
            validation: (Rule) =>
                Rule.required().error(`Specify ${documentType} Content`)
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            description: `Specify an image for ${documentType}`,
            group: 'media',
            validation: (Rule) =>
                Rule.required().error(`Specify ${documentType} Image`),
            options: {
                hotspot: true
            }
        }),
        defineField({
            name: 'seo',
            title: 'SEO',
            type: 'seo',
            group: 'seo'
        })
    ],
    preview: {
        select: {
            title: 'title',
            slug: 'slug',
            media: 'image'
        },
        prepare({ title = 'No title', slug = {}, media = {} }) {
            return {
                title: title ?? undefined,
                subtitle: slug.current
                    ? `/${documentType.toLowerCase()}/${slug.current}`
                    : undefined,
                media: media ?? PlaylistIcon
            }
        }
    }
})

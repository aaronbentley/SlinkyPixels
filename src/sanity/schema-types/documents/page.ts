/**
 * Slinky Pixels : Page
 */
import { defineField, defineType } from 'sanity'

// Define document type
const documentType = 'Page'

export const Page = defineType({
    name: documentType.toLowerCase(),
    title: documentType,
    type: 'document',
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
            validation: (Rule) => Rule.required(),
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
            name: 'content',
            title: 'Content',
            type: 'content',
            group: 'content',
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            description: `Specify an image for ${documentType}`,
            group: 'media',
            validation: (Rule) => Rule.required(),
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
            id: '_id',
            title: 'title',
            slug: 'slug'
        },
        prepare({ id = '', title = 'No title', slug = {} }) {
            return {
                title: title ?? null,
                subtitle: id.includes('frontpage')
                    ? slug.current
                    : slug.current !== undefined
                      ? `/${slug.current}/`
                      : null
            }
        }
    }
})

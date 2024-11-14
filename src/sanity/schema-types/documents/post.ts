/**
 * SlinkyPixels : Post
 */
import { defineField, defineType } from 'sanity'

// Define document type
const documentType = 'Post'

export const Post = defineType({
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
            description: `Generate slug from the ${documentType} Title`,
            group: 'content',
            validation: (Rule) =>
                Rule.required().error(`Specify ${documentType} Slug`),
            options: {
                source: 'title',
                maxLength: 96
            }
            // components: {
            //     input: PrefixSlugInput
            // }
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
                Rule.required().error(`Specify an image for ${documentType}`),
            options: {
                hotspot: true
            }
        }),
        defineField({
            name: 'categories',
            title: 'Categories',
            type: 'array',
            description: `Assign ${documentType} a Category`,
            group: 'content',
            of: [
                {
                    type: 'reference',
                    to: { type: 'category' },
                    options: {
                        disableNew: true
                    }
                }
            ],
            validation: (Rule) => Rule.min(1)
        }),
        defineField({
            name: 'seo',
            title: 'SEO',
            type: 'seo',
            validation: (Rule) =>
                Rule.required().error(`Specify SEO for ${documentType}`),
            group: 'seo'
        }),
        defineField({
            name: 'publishDate',
            title: 'Publish date',
            type: 'date',
            validation: (Rule) =>
                Rule.required().error(
                    `Specify Publish date for ${documentType}`
                ),
            group: 'content'
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
                title: title,
                subtitle: slug.current
                    ? `/${documentType.toLowerCase()}s/${slug.current}/`
                    : undefined,
                media: media
            }
        }
    }
})

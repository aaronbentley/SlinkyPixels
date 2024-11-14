/**
 * Slinky Pixels : Post
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
            Validation: (Rule) =>
                Rule.required(`Specify ${documentType} Title`),
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
            },
            // components: {
            //     input: PrefixSlugInput
            // }
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
            validation: (Rule) => Rule.required(),
            group: 'seo'
        }),
        defineField({
            name: 'publishDate',
            title: 'Publish date',
            type: 'date',
            validation: (Rule) => Rule.required(),
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
                    : null,
                media: media
            }
        }
    }
})

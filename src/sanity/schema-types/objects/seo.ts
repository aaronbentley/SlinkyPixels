/**
 * SlinkyPixels : Seo
 */
import { defineField, defineType } from 'sanity'

export const Seo = defineType({
    name: 'seo',
    title: 'SEO',
    type: 'object',
    fields: [
        defineField({
            name: 'seoTitle',
            type: 'string',
            title: 'Title',
            description: 'Specify SEO title',
            validation: (Rule) => Rule.required().error('SEO title is required')
        }),
        defineField({
            name: 'seoDescription',
            type: 'text',
            title: 'Description',
            description: 'Specify SEO description',
            rows: 4,
            validation: (Rule) =>
                Rule.required().error('SEO description is required')
        })
    ]
})

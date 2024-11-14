/**
 * Slinky Pixels : Category
 */
import { defineField, defineType } from 'sanity'

// Define document type
const documentType = 'Category'

export const Category = defineType({
    name: documentType.toLowerCase(),
    title: documentType,
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            description: `${documentType} Title`,
            validation: (Rule) =>
                Rule.required().error(`Specify ${documentType} Title`)
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            description: 'Generate slug from the Title',
            validation: (Rule) =>
                Rule.required().error(`Specify ${documentType} Slug`),
            options: {
                source: 'title',
                maxLength: 96
            }
        }),
        defineField({
            name: 'content',
            title: 'Content',
            type: 'content',
            description: `${documentType} Content`,
            validation: (Rule) =>
                Rule.required().error(`Specify ${documentType} Content`)
        })
    ],
    preview: {
        select: {
            title: 'title'
        },
        prepare: ({ title }) => ({
            title: title
        })
    }
})

/**
 * SlinkyPixels : Frontpage
 */

import { FrontPageIcon } from '@/components/icons'
import { defineField, defineType } from 'sanity'

// Define content type
const contentType = 'Frontpage'

export const Frontpage = defineType({
    name: contentType.toLowerCase(),
    title: contentType,
    type: 'object',
    icon: FrontPageIcon,
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            description: `${contentType} Title`,
            validation: (Rule) =>
                Rule.required().error(`Specify ${contentType} Title`),
            initialValue: process.env.NEXT_PUBLIC_APP_TITLE
        }),
        defineField({
            name: 'content',
            title: 'Content',
            type: 'text',
            description: `${contentType} Content`,
            validation: (Rule) =>
                Rule.required().error(`Specify ${contentType} Content`),
            initialValue: process.env.NEXT_PUBLIC_APP_DESCRIPTION,
            rows: 4
        })
    ],
    preview: {
        select: {
            title: 'title'
        },
        prepare: ({ title }) => ({
            title: title ? `[${contentType}] ${title}` : `[${contentType}]`
        })
    }
})

/**
 * Slinky Pixels : Settings
 */

import { defineField, defineType } from 'sanity'

// Define document type
const documentType = 'Settings'

export const Settings = defineType({
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
            name: 'brand',
            title: 'Brand'
        },
        {
            name: 'contact',
            title: 'Contact'
        }
    ],
    fields: [
        defineField({
            name: 'title',
            title: 'Site Title',
            type: 'string',
            description: 'Specify Site Title',
            validation: (Rule) => Rule.required().error('Specify Site title'),
            group: 'content'
        }),
        defineField({
            name: 'description',
            type: 'text',
            title: 'Description',
            description: 'Specify Site Description',
            rows: 4,
            validation: (Rule) =>
                Rule.required().error('Specify Site description'),
            group: 'content'
        }),
        defineField({
            name: 'url',
            title: 'Site URL',
            type: 'url',
            description: 'Specify Site URL',
            validation: (Rule) =>
                Rule.required().uri({
                    allowRelative: false,
                    scheme: ['http', 'https']
                }),
            group: 'content'
        })
    ]
})

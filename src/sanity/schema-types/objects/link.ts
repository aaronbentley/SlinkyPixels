/**
 * Slinky Pixels : Link
 */
import { defineField, defineType } from 'sanity'

export const Link = defineType({
    name: 'link',
    title: 'Link',
    type: 'object',
    fields: [
        defineField({
            name: 'label',
            title: 'Label',
            type: 'string',
            validation: (Rule) =>
                Rule.required().error('Please specify a Label')
        }),
        defineField({
            name: 'customUrl',
            title: 'Custom URL?',
            description: 'Specify a custom URL',
            type: 'boolean',
            initialValue: false
        }),
        defineField({
            name: 'destinationRef',
            title: 'Destination',
            type: 'reference',
            to: [{ type: 'page' }, { type: 'post' }],
            hidden: ({ parent }) => {
                if (parent.customUrl !== true) {
                    return false
                }
                return true
            },
            options: {
                disableNew: true
            }
        }),
        defineField({
            name: 'destinationHref',
            title: 'URL',
            type: 'url',
            validation: (Rule) =>
                Rule.uri({
                    allowRelative: true, // Allow relative links
                    relativeOnly: false, // Force only relative links
                    scheme: ['https', 'http', 'mailto', 'tel'] // Default is ["https", "http"]
                }),
            hidden: ({ parent }) => !parent.customUrl
        }),
        defineField({
            title: 'Open in new tab',
            name: 'blank',
            type: 'boolean',
            description: 'Open link in a new tab?',
            initialValue: false
        })
    ],
    preview: {
        select: {
            label: 'label',
            customUrl: 'customUrl',
            linkDestinationHref: 'linkDestinationHref'
        },
        prepare: ({
            label = null,
            customUrl = false,
            linkDestinationHref = null
        }) => {
            return {
                title: label,
                subtitle: customUrl
                    ? `Custom Link: ${linkDestinationHref} `
                    : 'Reference'
            }
        }
    }
})

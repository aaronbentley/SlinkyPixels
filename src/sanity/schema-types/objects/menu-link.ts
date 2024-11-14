/**
 * Slinky Pixels : Menu Link
 */
import { defineField, defineType } from 'sanity'

export const MenuLink = defineType({
    name: 'menuLink',
    title: 'URL',
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
            name: 'linkDestinationRef',
            title: 'Destination',
            type: 'reference',
            to: [{ type: 'page' }, { type: 'post' }, { type: 'category' }],
            hidden: ({ parent, document, value }) => {
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
            name: 'linkDestinationHref',
            title: 'URL',
            type: 'url',
            validation: (Rule) =>
                Rule.uri({
                    allowRelative: true, // Allow relative links
                    relativeOnly: false, // Force only relative links
                    scheme: ['https', 'http', 'mailto', 'tel'] // Default is ["https", "http"]
                }),
            hidden: ({ parent, document, value }) => {
                if (parent.customUrl === true) {
                    return false
                }
                return true
            }
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
            linkDestinationRef: 'linkDestinationRef',
            linkDestinationHref: 'linkDestinationHref'
        },
        prepare: ({
            label = null,
            customUrl = false,
            linkDestinationRef = null,
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

/**
 * Slinky Pixels : Basic Portable Text
 */
import { defineField, defineType } from 'sanity'

export const BasicPortableText = defineType({
    name: 'basicPortableText',
    type: 'array',
    title: 'Excerpt',
    of: [
        {
            type: 'block',
            title: 'Block',
            styles: [{ title: 'Normal', value: 'normal' }],
            lists: [],
            marks: {
                decorators: [
                    { title: 'Strong', value: 'strong' },
                    { title: 'Emphasis', value: 'em' }
                ],
                annotations: [
                    {
                        name: 'link',
                        title: 'Link',
                        type: 'object',
                        fields: [
                            defineField({
                                name: 'customUrl',
                                title: 'Custom URL?',
                                description: 'Specify a custom URL',
                                type: 'boolean',
                                initialValue: false
                            }),
                            defineField({
                                name: 'linkDestinationRef',
                                title: 'Destination Reference',
                                type: 'reference',
                                to: [{ type: 'post' }, { type: 'page' }],
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
                                name: 'linkDestinationHref',
                                title: 'Destination URL',
                                type: 'url',
                                validation: (Rule) =>
                                    Rule.uri({
                                        allowRelative: true, // Allow relative links
                                        relativeOnly: false, // Force only relative links
                                        scheme: [
                                            'https',
                                            'http',
                                            'mailto',
                                            'tel'
                                        ] // Default is ["https", "http"]
                                    }),
                                hidden: ({ parent }) => {
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
                                initialValue: false
                            })
                        ]
                    }
                ]
            }
        }
    ]
})

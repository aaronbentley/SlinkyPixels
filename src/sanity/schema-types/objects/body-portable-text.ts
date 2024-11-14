/**
 * SlinkyPixels : Body Portable Text
 */
import { defineField, defineType } from 'sanity'

export const BodyPortableText = defineType({
    name: 'bodyPortableText',
    type: 'array',
    title: 'Body text',
    of: [
        {
            type: 'block',
            title: 'Block',
            styles: [
                { title: 'Normal', value: 'normal' },
                { title: 'H2', value: 'h2' },
                { title: 'H3', value: 'h3' },
                { title: 'H4', value: 'h4' },
                { title: 'H5', value: 'h5' },
                { title: 'H6', value: 'h6' },
                { title: 'Quote', value: 'blockquote' }
            ],
            lists: [
                { title: 'Bullet', value: 'bullet' },
                { title: 'Number', value: 'number' }
            ],
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

/**
 * SlinkyPixels : Settings
 */

import {
    Facebook,
    GitHub,
    Instagram,
    Linkedin,
    Reddit,
    Threads,
    X,
    Youtube
} from '@/components/icons'
import { defineField, defineType } from 'sanity'

// Define document type
const documentType = 'Settings'

// Define social icons map
const socialIconsMap: Record<string, any> = {
    X: X,
    Instagram: Instagram,
    GitHub: GitHub,
    Reddit: Reddit,
    Threads: Threads,
    Youtube: Youtube,
    Facebook: Facebook,
    LinkedIn: Linkedin
}

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
        }),
        defineField({
            name: 'socialLinks',
            title: 'Social Links',
            type: 'array',
            description: 'Social Links contact points',
            of: [
                {
                    name: 'socialLink',
                    title: 'Social Link',
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'name',
                            type: 'string',
                            title: 'Social Platform',
                            validation: (Rule) =>
                                Rule.required().error(
                                    'Specify Social Link Name'
                                ),
                            initialValue: '',
                            options: {
                                list: [
                                    'X',
                                    'Instagram',
                                    'GitHub',
                                    'Reddit',
                                    'Threads',
                                    'Facebook',
                                    'Youtube',
                                    'LinkedIn'
                                ]
                            }
                        }),
                        defineField({
                            name: 'url',
                            type: 'url',
                            title: 'URL',
                            validation: (Rule) =>
                                Rule.required().error('Specify Social Link URL')
                        })
                    ],
                    preview: {
                        select: {
                            title: 'name',
                            subtitle: 'url'
                        },
                        prepare({ title, subtitle }) {
                            if (!title) {
                                return {
                                    title: 'No Title'
                                }
                            }

                            // Get icon component
                            const Icon = socialIconsMap[
                                title
                            ] as keyof typeof socialIconsMap

                            return {
                                title: title ?? 'No title',
                                subtitle: subtitle ?? 'No URL',
                                media: Icon ?? null
                            }
                        }
                    }
                }
            ],
            validation: (Rule) =>
                Rule.unique().error('No duplicate Social Links'),
            group: 'contact'
        })
    ]
})

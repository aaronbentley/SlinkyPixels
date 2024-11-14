/**
 * SlinkyPixels : Content
 */
import { defineArrayMember, defineType } from 'sanity'

export const Content = defineType({
    title: 'Content',
    name: 'content',
    type: 'array',
    description: 'Compose Page content',
    of: [defineArrayMember({ type: 'body' })],
    options: {
        insertMenu: {
            showIcons: true
        }
    }
})

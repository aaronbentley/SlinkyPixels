/**
 * SlinkyPixels : Menu
 */
import { defineField, defineType } from 'sanity'

// Define document type
const documentType = 'Menu'

export const Menu = defineType({
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
            name: 'links',
            title: 'Links',
            type: 'array',
            of: [{ type: 'link' }],
            description: `${documentType} Links`,
            validation: (Rule) =>
                Rule.custom((menuLinkItems) => {
                    if (!menuLinkItems || menuLinkItems.length === 0) {
                        return 'Menus must contain at least one Link'
                    }
                    return true
                })
        })
    ]
})

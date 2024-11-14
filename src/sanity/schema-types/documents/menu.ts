/**
 * Slinky Pixels : Menu
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
            name: 'menuTitle',
            title: 'Title',
            type: 'string',
            description: `${documentType} Title`,
            Validation: (Rule) => Rule.required(`Specify ${documentType} Title`)
        }),
        defineField({
            name: 'menuLinkItems',
            title: 'Links',
            type: 'array',
            of: [{ type: 'menuLink' }],
            description: `${documentType} Items`,
            validation: (Rule) =>
                Rule.custom((menuLinkItems) => {
                    if (menuLinkItems.length === 0) {
                        return 'Menus must contain at least one Link'
                    }
                    return true
                })
        })
    ]
})

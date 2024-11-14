import type { StructureResolver } from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
// export const structure: StructureResolver = (S) =>
//     S.list().title('Content').items(S.documentTypeListItems())

export const structure: StructureResolver = (S) => {
    return S.list()
        .title('Content')
        .items([
            S.listItem()
                .title('Frontpage')
                .id('frontpage')
                .child(S.document().schemaType('page').documentId('frontpage')),
            S.divider(),
            S.listItem()
                .title('Pages')
                .schemaType('page')
                .child(
                    S.documentList()
                        .title('Pages')
                        .menuItems(S.documentTypeList('page').getMenuItems())
                        .filter(
                            '_type == "page" && _id != "frontpage" && _id != "drafts.frontpage"'
                        )
                        .defaultOrdering([{ field: 'title', direction: 'asc' }])
                ),
            S.listItem()
                .title('Posts')
                .schemaType('post')
                .child(
                    S.list()
                        .title('Posts')
                        .items([
                            S.documentTypeListItem('post').title('Posts'),
                            S.documentTypeListItem('category').title(
                                'Categories'
                            )
                        ])
                ),
            S.documentTypeListItem('playlist').title('Playlist'),
            S.documentTypeListItem('work').title('Work'),
            S.divider(),
            S.documentTypeListItem('menu').title('Menus'),
            S.listItem()
                .title('Settings')
                .id('settings')
                .child(
                    S.document().schemaType('settings').documentId('settings')
                )
        ])
}

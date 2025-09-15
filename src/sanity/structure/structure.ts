/**
 * Define Sanity Studio structure
 *
 * @link https://www.sanity.io/docs/structure-builder-cheat-sheet
 */
import {
    FrontPageIcon,
    MenuIcon,
    PageIcon,
    PlaylistIcon,
    PostIcon,
    SettingsIcon,
    WorkIcon
} from '@/components/icons'
import type { StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = (S) => {
    return S.list()
        .title('Content')
        .items([
            S.listItem()
                .title('Frontpage')
                .id('frontpage')
                .icon(FrontPageIcon)
                .child(S.document().schemaType('page').documentId('frontpage')),
            S.divider(),
            S.listItem()
                .title('Pages')
                .schemaType('page')
                .icon(PageIcon)
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
                .icon(PostIcon)
                .child(
                    S.list()
                        .title('Posts')
                        .items([
                            S.documentTypeListItem('post')
                                .title('Posts')
                                .icon(PostIcon),
                            S.documentTypeListItem('category').title(
                                'Categories'
                            )
                        ])
                ),
            S.documentTypeListItem('playlist')
                .title('Playlists')
                .icon(PlaylistIcon),
            S.documentTypeListItem('work').title('Work').icon(WorkIcon),
            S.divider(),
            S.documentTypeListItem('menu').title('Menus').icon(MenuIcon),
            S.listItem()
                .title('Settings')
                .id('settings')
                .icon(SettingsIcon)
                .child(
                    S.document().schemaType('settings').documentId('settings')
                )
        ])
}

import { type SchemaTypeDefinition } from 'sanity'
import { Category } from './documents/category'
import { Menu } from './documents/menu'
import { Page } from './documents/page'
import { Playlist } from './documents/playlist'
import { Post } from './documents/post'
import { Settings } from './documents/settings'
import { Work } from './documents/work'
import { BasicPortableText } from './objects/basic-portable-text'
import { BodyPortableText } from './objects/body-portable-text'
import { Body } from './objects/content/body'
import { Content } from './objects/content/content'
import { Frontpage } from './objects/content/frontpage'
import { MenuLink } from './objects/menu-link'
import { Seo } from './objects/seo'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [
        BasicPortableText,
        Body,
        BodyPortableText,
        Category,
        Content,
        Frontpage,
        Menu,
        MenuLink,
        Page,
        Playlist,
        Post,
        Seo,
        Settings,
        Work
    ]
}

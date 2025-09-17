/**
 * SlinkyPixels : Composer
 */
import Body from '@/components/content/body'
import CollectionGrid from '@/components/content/collection-grid'
import Frontpage from '@/components/content/frontpage'
import {
    PAGE_QUERYResult,
    POST_QUERYResult,
    WORK_QUERYResult
} from '@/sanity/types'

/**
 * Lookup map to match content type to a component
 */
const contentComponents = {
    frontpage: Frontpage,
    body: Body,
    collectionGrid: CollectionGrid
}

/**
 * Create type for content component type
 */
export type ContentComponentType = keyof typeof contentComponents

/**
 * Map content components to content
 */
const Content = ({
    id,
    type,
    order,
    ...rest
}: {
    id: string
    type: ContentComponentType
    order: number
    [key: string]: unknown
}) => {
    /**
     * If type is not in contentComponents return null
     */
    if (!(type in contentComponents)) return null

    /**
     * Create component by matching type to contentTypes key
     */
    const Component = contentComponents[type]

    return (
        <Component
            id={id}
            order={order}
            {...rest}
        />
    )
}

/**
 * Compose content block types into content components
 * indexed access types to allow more content types post, team, proposal etc...
 */
type ContentType =
    | Extract<
          PAGE_QUERYResult | POST_QUERYResult | WORK_QUERYResult,
          { content: unknown }
      >['content']
    | null

const Composer = ({ content }: { content: ContentType | null }) => {
    /**
     * If content is empty, return null
     */
    if (!content || content.length === 0) return null

    return content.map(({ _type, _key, ...rest }, index: number) => (
        <Content
            key={_key}
            id={_key}
            type={_type}
            order={index}
            {...rest}
        />
    ))
}

export default Composer

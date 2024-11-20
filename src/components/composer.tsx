/**
 * SlinkyPixels : Composer
 */
import Frontpage from '@/components/content/frontpage'
import { type Content } from '../../sanity.types'
import Body from './content/body'

/**
 * Lookup map to match content type to a component
 */
const contentComponents = {
    frontpage: Frontpage,
    body: Body
}

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
    type: keyof typeof contentComponents
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

const Composer = ({ content }: { content: Content | null }) => {
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

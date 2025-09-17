/**
 * SlinkyPixels : Sanity : Custom Preview Component  / Custom Content
 */
import { PageIcon, PostIcon, WorkIcon } from '@/components/icons'
import { PreviewProps } from 'sanity'

export type CustomContentPreviewProps = PreviewProps & {
    _type: string
}

/**
 * Content type Icons map
 */
const contentTypeIcons: Record<string, unknown> = {
    page: PageIcon,
    post: PostIcon,
    work: WorkIcon
}

export const CustomContentPreview = (props: CustomContentPreviewProps) => {
    /**
     * Get content type icon by type
     */
    const media = contentTypeIcons[props._type] as keyof typeof contentTypeIcons

    // return props.renderDefault({
    //     ...props,
    //     subtitle: (
    //         <span style={{ textTransform: 'capitalize' }}>[{props._type}]</span>
    //     ),
    //     media
    // })

    return (
        <>
            {props.renderDefault({
                ...props,
                subtitle: (
                    <span style={{ textTransform: 'capitalize' }}>
                        [{props._type}]
                    </span>
                ),
                media
            })}
        </>
    )
}

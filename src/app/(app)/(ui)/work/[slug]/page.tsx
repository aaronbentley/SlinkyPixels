/**
 * SlinkyPixels : /work/[slug]/ - Page
 */
import Composer from '@/components/composer'
import { ExternalLinkIcon } from '@/components/icons'
import Image from '@/components/image'
import Link from '@/components/link'
import { Typography, typographyVariants } from '@/components/typography'
import { Badge } from '@/components/ui/badge'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
import { sanityFetch } from '@/sanity/lib/live'
import { WORK_PATHS_QUERY, WORK_QUERY } from '@/sanity/lib/queries'
import { notFound } from 'next/navigation'

export const generateStaticParams = async () => {
    const { data: works } = await sanityFetch({
        query: WORK_PATHS_QUERY,
        perspective: 'published',
        stega: false
    })

    return works.map((work) => ({
        slug: work?.slug?.current
    }))
}

export const generateMetadata = async ({
    params
}: {
    params: Promise<{ slug: string }>
}) => {
    const { data: work } = await sanityFetch({
        query: WORK_QUERY,
        params: await params
    })

    /**
     * If page is not found, return 404
     */
    if (!work) notFound()

    return {
        title: `${work.title} : Work`
    }
}

const Work = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { data: work } = await sanityFetch({
        query: WORK_QUERY,
        params: await params
    })

    /**
     * Bail if no work found
     */
    if (!work) notFound()

    return (
        <>
            <div className='container mx-auto flex flex-col items-start gap-2 py-16 md:py-20 lg:max-w-[980px]'>
                <div className='flex w-full flex-col items-center gap-6 md:flex-row-reverse md:justify-between'>
                    {work.image && (
                        <Image
                            image={work.image}
                            alt={work.title}
                            width={200}
                            height={200}
                            className='aspect-square rounded-full object-cover'
                        />
                    )}
                    <div className='flex flex-col items-center gap-4 md:items-start'>
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink asChild>
                                        <Link
                                            href='/work/'
                                            title='View all Work'
                                            className={cn(
                                                typographyVariants({
                                                    muted: true,
                                                    variant: 'small'
                                                })
                                            )}>
                                            Work
                                        </Link>
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>
                                        {work.title}
                                    </BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                        <Typography
                            variant='h1'
                            className='text-center md:text-start'>
                            {work.title}
                        </Typography>
                        <Typography
                            variant='p'
                            as='span'
                            className='text-center text-balance md:text-start'
                            muted>
                            {work.subtitle}
                        </Typography>

                        {work.url && (
                            <Link
                                href={work.url}
                                title={`Visit ${work.title}`}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='flex items-center gap-2 text-center text-secondary md:text-start'>
                                {work.url
                                    .replace(/https?:\/\//, '')
                                    .replace(/\/$/, '')}
                                <ExternalLinkIcon className='size-4' />
                            </Link>
                        )}

                        {work.uses && (
                            <div className='flex flex-wrap justify-center gap-2 pt-2 md:max-w-md md:justify-start'>
                                {work.uses.map((use) => (
                                    <Badge
                                        key={use}
                                        variant='outline'
                                        className='text-muted-foreground'>
                                        {use}
                                    </Badge>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                <Separator className='mt-6 md:mt-12' />
            </div>
            <Composer
                content={work.content}
                documentId={work._id}
                documentType={work._type}
            />
        </>
    )
}

export default Work

/**
 * SlinkyPixels : Not Found : 404
 */
import { headingBaseClasses, Typography } from '@/components/typography'
import { Button, buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'

const NotFound = () => (
    <div className='flex flex-1 flex-col items-center justify-center gap-y-4 md:gap-y-8'>
        <Typography
            variant='h1'
            as='h1'
            className={cn([
                headingBaseClasses,
                'p-2',
                'text-transparent',
                'bg-linear-125',
                'from-primary',
                'via-secondary',
                'to-tertiary',
                'bg-clip-text',
                'text-center',
                'tracking-tighter'
            ])}>
            Page Not Found
        </Typography>
        <Typography>The page you are looking for does not exist.</Typography>

        <Button
            asChild
            className={cn(
                buttonVariants({
                    variant: 'secondary',
                    size: 'lg'
                }),
                'text-background',
                'min-w-24',
                'hover:text-background'
            )}>
            <Link
                href='/'
                title='Go to Frontpage'
                aria-label='Go to Frontpage'>
                Go to Frontpage
            </Link>
        </Button>
    </div>
)

export default NotFound

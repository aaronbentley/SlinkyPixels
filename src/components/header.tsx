/**
 * SlinkyPixels : Header
 */
import ModeToggle from '@/components/mode-toggle'
import { headingBaseClasses } from '@/components/typography'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'

const Header = () => (
    <header className='sticky top-0 z-50 w-full border-b border-muted bg-background/80 backdrop-blur dark:bg-background/80'>
        <div className='container flex items-center px-4'>
            <div className='flex w-full justify-between py-4'>
                <Link
                    href='/'
                    className={cn(
                        buttonVariants({
                            variant: 'ghost',
                            size: 'sm',
                            className: [
                                headingBaseClasses,
                                'md:mr-6',
                                'text-xl',
                                'tracking-tight',
                                'transition-all',
                                'duration-200'
                            ]
                        })
                    )}>
                    {process.env.APP_TITLE!}
                </Link>
            </div>
            <div className='flex items-center md:space-x-4'>
                <ModeToggle />
            </div>
        </div>
    </header>
)

export default Header

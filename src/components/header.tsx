/**
 * SlinkyPixels : Header
 */
import ModeToggle from '@/components/mode-toggle'
import { headingBaseClasses } from '@/components/typography'
import { cn } from '@/lib/utils'
import Link from 'next/link'

const Header = () => (
    <header className='sticky top-0 z-50 w-full border-b border-muted bg-background/80 backdrop-blur dark:bg-background/80'>
        <div className='container flex items-center'>
            <div className='flex w-full justify-between py-4'>
                <Link
                    href='/'
                    className={cn([
                        headingBaseClasses,
                        'text-xl',
                        'text-transparent',
                        'bg-linear-125',
                        'from-primary',
                        'via-secondary',
                        'to-tertiary',
                        'bg-clip-text',
                        'tracking-tighter',
                        'backdrop-blur-lg'
                    ])}>
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

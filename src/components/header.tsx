/**
 * SlinkyPixels : Header
 */
import { Typography } from '@/components/typography'
import Link from 'next/link'

const Header = () => (
    <header className='mx-auto flex max-w-5xl flex-row items-center justify-center py-6'>
        <Link href='/'>
            <Typography
                variant='h1'
                className='bg-gradient-to-br from-primary to-muted bg-clip-text leading-normal tracking-tighter text-transparent'>
                {process.env.APP_TITLE}
            </Typography>
        </Link>
    </header>
)

export default Header

/**
 * SlinkyPixels : Footer
 */
import { Typography } from '@/components/typography'
import Link from 'next/link'

const Footer = () => (
    <footer className='mx-auto flex max-w-5xl flex-row items-center justify-center'>
        <Link href='/'>
            <Typography
                variant='h6'
                className='bg-gradient-to-br from-primary to-muted bg-clip-text py-4 leading-normal tracking-tighter text-transparent'>
                {process.env.APP_TITLE}
            </Typography>
        </Link>
    </footer>
)

export default Footer

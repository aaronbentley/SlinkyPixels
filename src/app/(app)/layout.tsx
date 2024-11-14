/**
 * SlinkyPixels : Root Layout
 */
import '@/assets/styles/globals.css'
import { fonts } from '@/components/font-loader'
import TailwindIndicator from '@/components/tailwind-indicator'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    metadataBase: new URL(process.env.APP_URL!),
    title: {
        default: process.env.APP_TITLE!,
        template: `%s - ${process.env.APP_TITLE!}`
    },
    description: process.env.APP_DESCRIPTION!
}

const RootLayout = ({
    children
}: Readonly<{
    children: React.ReactNode
}>) => {
    return (
        <html lang='en'>
            <body className={cn(fonts, ['font-sans'])}>
                <main className='flex min-h-screen flex-col'>
                    <div className='flex min-h-max flex-1 flex-col items-center justify-start gap-y-4 md:gap-y-12'>
                        {children}
                    </div>
                </main>
                <TailwindIndicator />
            </body>
        </html>
    )
}

export default RootLayout

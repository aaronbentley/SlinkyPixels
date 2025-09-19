/**
 * SlinkyPixels : App Layout
 */
import '@/assets/styles/globals.css'
import { DisableDraftMode } from '@/components/disable-draft-mode'
import TailwindIndicator from '@/components/tailwind-indicator'
import { ThemeProvider } from '@/components/theme-provider'
import { SanityLive } from '@/sanity/lib/live'
import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'
import { VisualEditing } from 'next-sanity/visual-editing'
import { draftMode } from 'next/headers'

export const metadata: Metadata = {
    metadataBase: new URL(process.env.APP_URL!),
    title: {
        default: process.env.APP_TITLE!,
        template: `%s : ${process.env.APP_TITLE!}`
    },
    description: process.env.APP_DESCRIPTION!,
    openGraph: {
        type: 'website',
        locale: 'en_GB',
        siteName: process.env.APP_TITLE!,
        url: process.env.APP_URL!,
        title: process.env.APP_TITLE!,
        description: process.env.APP_DESCRIPTION!
    },
    twitter: {
        card: 'summary_large_image',
        title: process.env.APP_TITLE!,
        description: process.env.APP_DESCRIPTION!
    }
}

const AppLayout = async ({
    children
}: Readonly<{
    children: React.ReactNode
}>) => {
    return (
        <html
            lang='en'
            className='dark'
            data-scroll-behavior='smooth'
            suppressHydrationWarning>
            <body className={GeistSans.variable}>
                <ThemeProvider
                    attribute='class'
                    defaultTheme='system'
                    enableSystem
                    disableTransitionOnChange
                    enableColorScheme>
                    {children}
                    <TailwindIndicator />
                    <SanityLive />
                    {(await draftMode()).isEnabled && (
                        <>
                            <DisableDraftMode />
                            <VisualEditing trailingSlash />
                        </>
                    )}
                </ThemeProvider>
            </body>
        </html>
    )
}

export default AppLayout

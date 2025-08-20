/**
 * SlinkyPixels : Root Layout
 */
import '@/assets/styles/globals.css'
import { DisableDraftMode } from '@/components/disable-draft-mode'
// import { fonts } from '@/components/font-loader'
import Footer from '@/components/footer'
import Header from '@/components/header'
import TailwindIndicator from '@/components/tailwind-indicator'
import { ThemeProvider } from '@/components/theme-provider'
import { SanityLive } from '@/sanity/lib/live'
import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'
import { VisualEditing } from 'next-sanity'
import { draftMode } from 'next/headers'

export const metadata: Metadata = {
    metadataBase: new URL(process.env.APP_URL!),
    title: {
        default: process.env.APP_TITLE!,
        template: `%s - ${process.env.APP_TITLE!}`
    },
    description: process.env.APP_DESCRIPTION!
}

const RootLayout = async ({
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
            <body
                // className={fonts}
                className={GeistSans.variable}>
                <ThemeProvider
                    attribute='class'
                    defaultTheme='system'
                    enableSystem
                    disableTransitionOnChange
                    enableColorScheme>
                    <main className='flex min-h-screen flex-col'>
                        <Header />
                        <div className='flex min-h-max flex-1 flex-col items-center justify-start gap-y-4 md:gap-y-12'>
                            {children}
                        </div>
                        <Footer />
                    </main>
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

export default RootLayout

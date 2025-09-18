/**
 * SlinkyPixels : UI Layout
 */
import Footer from '@/components/footer'
import Header from '@/components/header'

const UiLayout = async ({
    children
}: Readonly<{
    children: React.ReactNode
}>) => {
    return (
        <div className='flex min-h-screen flex-col'>
            <Header />
            <div className='flex flex-1 flex-col items-center justify-start gap-y-4 md:gap-y-12'>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default UiLayout

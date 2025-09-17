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
        <>
            <Header />
            <div className='flex min-h-max flex-1 flex-col items-center justify-start gap-y-4 md:gap-y-12'>
                {children}
            </div>
            <Footer />
        </>
    )
}

export default UiLayout

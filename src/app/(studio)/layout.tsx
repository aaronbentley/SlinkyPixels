import { Metadata } from 'next'

export const metadata: Metadata = {
    title: `${process.env.APP_TITLE} : Studio`,
    description: `${process.env.APP_TITLE} : Sanity Content Operating System`
}

const StudioLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang='en'>
            <body
                style={{
                    padding: 0,
                    margin: 0
                }}>
                {children}
            </body>
        </html>
    )
}

export default StudioLayout

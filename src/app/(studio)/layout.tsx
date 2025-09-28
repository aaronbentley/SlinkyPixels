import { Metadata } from 'next'
import { preloadModule } from 'react-dom'

const bridgeScript = 'https://core.sanity-cdn.com/bridge.js'

export const metadata: Metadata = {
    title: `${process.env.APP_TITLE} : Studio`,
    description: `${process.env.APP_TITLE} : Sanity Content Operating System`
}

const StudioLayout = ({ children }: { children: React.ReactNode }) => {
    // Preload the Sanity Bridge script
    preloadModule(bridgeScript, { as: 'script' })

    return (
        <html lang='en'>
            <body
                style={{
                    padding: 0,
                    margin: 0
                }}>
                <script
                    src={bridgeScript}
                    async
                    type='module'
                />
                {children}
            </body>
        </html>
    )
}

export default StudioLayout

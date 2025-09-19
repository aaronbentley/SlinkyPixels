/**
 * SlinkyPixels : Icon Generator
 */
import { ImageResponse } from 'next/og'

export const alt = process.env.APP_TITLE!

export const size = {
    width: 512,
    height: 512
}

export const contentType = 'image/svg+xml'

export const debug = process.env.NODE_ENV !== 'production'

const loadGoogleFont = async (font: string, weight: number, text: string) => {
    const url = `https://fonts.googleapis.com/css2?family=${font}:wght@${weight}&text=${encodeURIComponent(text)}`
    const css = await (await fetch(url)).text()
    const resource = css.match(
        /src: url\((.+)\) format\('(opentype|truetype)'\)/
    )

    if (resource) {
        const response = await fetch(resource[1])
        if (response.status == 200) {
            return await response.arrayBuffer()
        }
    }

    throw new Error('failed to load font data')
}

const iconImage = async () => {
    const text = process.env.APP_TITLE!.slice(0, 1).toUpperCase()

    return new ImageResponse(
        (
            <div
                tw='flex flex-col items-center justify-center h-full w-full p-6'
                style={{
                    fontFamily: 'Geist',
                    backgroundImage:
                        'linear-gradient(125deg, #9810fa, #0084d1, #e60076)'
                }}>
                <div
                    tw='flex h-full w-full items-center justify-center relative'
                    style={{
                        backgroundColor: '#FAFAFA',
                        borderRadius: '24px'
                    }}>
                    <h1
                        style={{
                            fontSize: 384,
                            lineHeight: 1.2,
                            fontWeight: 700,
                            padding: 0,
                            textAlign: 'center',
                            letterSpacing: '-4.2px',
                            backgroundImage:
                                'linear-gradient(125deg, #9810fa, #0084d1, #e60076)',
                            color: 'transparent',
                            backgroundClip: 'text'
                        }}>
                        {text}
                    </h1>
                </div>
            </div>
        ),
        {
            ...size,
            fonts: [
                {
                    name: 'Geist',
                    data: await loadGoogleFont('Geist', 700, text),
                    weight: 700,
                    style: 'normal'
                }
            ],
            debug
        }
    )
}

export default iconImage

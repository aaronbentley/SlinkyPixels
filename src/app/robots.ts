/**
 * SlinkyPixels : Robots.txt generator
 */
import { MetadataRoute } from 'next'

const robots = (): MetadataRoute.Robots => ({
    rules: {
        userAgent: '*',
        allow: '/',
        disallow: ['/studio/*']
    },
    sitemap: `${process.env.APP_URL!}/sitemap.xml`
})

export default robots

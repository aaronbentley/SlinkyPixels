/**
 * SlinkyPixels : Route Handler : Enable Draft Mode
 */
import { client } from '@/sanity/lib/client'
import { defineEnableDraftMode } from 'next-sanity/draft-mode'

export const { GET } = defineEnableDraftMode({
    client: client.withConfig({
        token: process.env.SANITY_API_READ_TOKEN
    })
})

import { apiVersion, dataset, projectId, useCdn } from '@/sanity/env'
import { createClient } from 'next-sanity'

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn,
    stega: { studioUrl: '/studio' }
})

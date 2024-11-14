'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */
import { apiVersion, dataset, projectId } from '@/sanity/env'
import { resolve } from '@/sanity/presentation/resolve'
import { schema } from '@/sanity/schema-types'
import { structure } from '@/sanity/structure/structure'
import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { presentationTool } from 'sanity/presentation'
import { structureTool } from 'sanity/structure'

export default defineConfig({
    basePath: '/studio',
    projectId,
    dataset,
    schema,
    plugins: [
        structureTool({ structure }),
        presentationTool({
            resolve,
            previewUrl: {
                previewMode: {
                    enable: '/api/draft-mode/enable'
                    // disable: '/api/draft-mode/disable'
                }
            }
        }),
        visionTool({ defaultApiVersion: apiVersion })
    ],
    document: {
        comments: {
            enabled: false
        }
    },
    tasks: { enabled: false },
    scheduledPublishing: { enabled: false }
})

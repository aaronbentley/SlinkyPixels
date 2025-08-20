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
    name: process.env.NEXT_PUBLIC_APP_TITLE!,
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
        },
        newDocumentOptions: (prev, { creationContext }) => {
            if (creationContext.type === 'global') {
                return prev.filter(
                    (templateItem) =>
                        !['settings'].includes(templateItem.templateId)
                )
            }
            return prev
        },
        actions: (prev, { schemaType }) => {
            if (schemaType === 'settings') {
                return prev.filter(
                    ({ action }) =>
                        !['unpublish', 'delete', 'duplicate'].includes(action!)
                )
            }
            return prev
        }
    },
    tasks: { enabled: false },
    scheduledPublishing: { enabled: false }
})

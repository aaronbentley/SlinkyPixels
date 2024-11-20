'use client'

import { useDraftModeEnvironment } from 'next-sanity/hooks'
import Link from 'next/link'

export const DisableDraftMode = () => {
    const environment = useDraftModeEnvironment()

    // Only show the disable draft mode button when outside of Presentation Tool
    if (environment !== 'live' && environment !== 'unknown') return null

    return (
        <Link
            href='/api/draft-mode/disable'
            className='fixed bottom-2 right-2 rounded-sm bg-foreground p-2 text-xs font-bold text-background'>
            Disable Draft Mode
        </Link>
    )
}

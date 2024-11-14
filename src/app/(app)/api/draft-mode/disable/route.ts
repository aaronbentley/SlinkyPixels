/**
 * SlinkyPixels : Route Handler : Disable Draft Mode
 */
import { draftMode } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (request: NextRequest) => {
    ;(await draftMode()).disable()
    return NextResponse.redirect(new URL('/', request.url))
}

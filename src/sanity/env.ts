const assertValue = <T>(v: T | undefined, errorMessage: string): T => {
    if (v === undefined) throw new Error(errorMessage)
    return v
}

export const apiVersion =
    process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-11-14'

export const dataset = assertValue(
    process.env.NEXT_PUBLIC_SANITY_DATASET,
    'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const projectName = assertValue(
    process.env.NEXT_PUBLIC_APP_TITLE,
    'Missing environment variable: NEXT_PUBLIC_APP_TITLE'
)

export const previewUrl = assertValue(
    process.env.NEXT_PUBLIC_APP_URL,
    'Missing environment variable: NEXT_PUBLIC_APP_URL'
)

export const useCdn = true

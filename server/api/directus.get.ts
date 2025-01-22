import { createDirectus } from '@directus/sdk'

export default defineEventHandler(() => {
    const config = useRuntimeConfig()

    return config.directusAccessToken

    const directus = createDirectus(config.directusApiBaseUrl)

    //directus.auth.static(config.directusAccessToken)

    return { message: 'Authentication success' }
})
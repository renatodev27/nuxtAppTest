import { createDirectus, registerUserVerify, rest } from '@directus/sdk'

export default defineEventHandler(() => {
    const config = useRuntimeConfig()

    const directus = createDirectus(config.directusApiBaseUrl).with(rest())

    const result = directus.request(registerUserVerify(config.directusAccessToken))

    //directus.auth.static(config.directusAccessToken)

    return { message: result }
})
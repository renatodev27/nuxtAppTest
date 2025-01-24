import { createDirectus, rest, staticToken, readItems } from '@directus/sdk'

const config = useRuntimeConfig()
const directus = createDirectus(config.public.directusApiBaseUrl).with(rest()).with(staticToken(config.directusAccessToken))

export default defineEventHandler(async () => {

    const items = await directus.request(readItems('tasks'))

    return items
})
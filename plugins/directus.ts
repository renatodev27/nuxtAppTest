import { createDirectus, rest, staticToken } from "@directus/sdk"

export default defineNuxtPlugin( () => {
    const config = useRuntimeConfig()

    const directus = createDirectus(config.public.directusApiBaseUrl).with(rest()).with(staticToken(config.directusAccessToken))

    return {
        provide: { directus }
    }
    
})
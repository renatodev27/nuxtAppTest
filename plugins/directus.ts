import { createDirectus, rest, readItem, readItems } from "@directus/sdk"

const directus = createDirectus('http://localhost:8055').with(rest())

export default defineNuxtPlugin(() => {

    //const config = useRuntimeConfig()

    return {
        provide: {
            directus,
            readItem,
            readItems
        }
    }
})
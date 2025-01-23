import { readCollection } from "@directus/sdk"

export const useDirectus = () => {
    const { $directus } = useNuxtApp()

    const getCollection = async (collectionName: string) => {
        try {
            const response = await $directus.request(readCollection(collectionName))
            console.log('from use directus')
            return response.data
        }
        catch (error) {
            console.error(`No se pudo obtener la colección: ${error}`)
            throw error
        }
    }

    return {
        getCollection
    }
}
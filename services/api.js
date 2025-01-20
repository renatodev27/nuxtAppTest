import axios from 'axios'

export default apiServicePlugin(() => {
    const config = useRuntimeConfig()

    const api = axios.create({
        baseUrl: config.public.apiBaseUrl
    })

    return {
        provide: { api }
    }
})





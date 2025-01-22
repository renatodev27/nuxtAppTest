// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  runtimeConfig: {
    directusAccessToken: process.env.DIRECTUS_ACCESS_TOKEN,
    directusApiBaseUrl: process.env.DIRECTUS_BASE_API_URL
  },

  routeRules: {
    '/': { prerender: true }
  },

  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    viewer: {
      endpoint: '/_tailwind',
      exportViewer: true
    }
  }
})
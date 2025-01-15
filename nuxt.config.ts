// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  $production: {
    routeRules: {
      '/**' : { isr: true }
    }
  },
  $development: {
    routeRules: {
      '/**' : { isr: false }
    }
  },
  $env: {
    staging: {
      //some configuration for enviornment staging
    }
  },
  runtimeConfig: {
    apiSecret: 'abc123'
  }
})

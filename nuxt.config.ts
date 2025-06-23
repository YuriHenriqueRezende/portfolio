// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '@/assets/scss/main.scss',
    'primevue/resources/themes/saga-blue/theme.css',
    'primevue/resources/themes/lara-light-indigo/theme.css',
    'primevue/resources/primevue.min.css',
    'primevue/resources/primevue.css',
    'primeicons/primeicons.css'
  ],
  build: {
    transpile: ['primevue']
  },
  typescript: {
    strict: true
  }
})

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@bootstrap-vue-next/nuxt',
    '@vesp/nuxt-fontawesome',
  ],
  fontawesome: {
    icons: {
      brands: [
        'square-twitter',
        'square-facebook',
        'square-instagram',
        'linkedin',
      ],
    },
  },
  css: ['bootstrap/dist/css/bootstrap.min.css'],
})

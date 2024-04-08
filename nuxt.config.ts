// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/google-fonts',
    '@bootstrap-vue-next/nuxt',
    '@vesp/nuxt-fontawesome',
  ],
  fontawesome: {
    icons: {
      brands: ['twitter', 'tiktok', 'instagram', 'linkedin'],
    },
  },
  googleFonts: {
    families: {
      Montserrat: [100, 400, 700],
    },
  },
  css: ['bootstrap/dist/css/bootstrap.min.css'],
})

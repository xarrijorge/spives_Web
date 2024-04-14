// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/google-fonts',
    '@bootstrap-vue-next/nuxt',
    '@vesp/nuxt-fontawesome',
    '@pinia/nuxt',
    'nuxt-gtag',
  ],
  gtag: {
    id: 'G-HES2CSF4VG',
  },
  fontawesome: {
    icons: {
      brands: ['twitter', 'tiktok', 'instagram', 'linkedin'],
    },
  },
  googleFonts: {
    families: {
      Montserrat: [100, 400, 500, 700, 800, 900],
    },
  },
  css: ['bootstrap/dist/css/bootstrap.min.css'],
})

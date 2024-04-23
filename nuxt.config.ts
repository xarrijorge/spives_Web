// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: true,
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      baseURL: 'https://spives.onrender.com',
    },
  },
  modules: [
    '@nuxtjs/google-fonts',
    '@bootstrap-vue-next/nuxt',
    '@vesp/nuxt-fontawesome',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    'nuxt-gtag',
  ],
  gtag: {
    id: 'G-HES2CSF4VG',
  },
  fontawesome: {
    icons: {
      brands: ['twitter', 'tiktok', 'instagram', 'linkedin'],
      solid: ['binoculars', 'futbol', 'earth-africa', 'star-half-stroke'],
    },
  },
  googleFonts: {
    families: {
      Montserrat: [100, 400, 500, 700, 800, 900],
    },
  },
  css: ['bootstrap/dist/css/bootstrap.min.css'],
})

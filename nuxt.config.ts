// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
  ],
  devtools: { enabled: true },
  css: [
    "~/assets/style.css",
  ],
  googleFonts: {
    families: {
      Roboto: {
        wght: [400, 500, 700]
      },
      'Lato': {
        wght: [400, 700, 900]
      },
      'League Spartan': true,
      'Montserrat': true,
      'Open Sans': true
    }
  },
  ssr: false,
})
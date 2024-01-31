// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  typescript: {
    typeCheck: false,
  },

  modules: ['@vueuse/nuxt'],
  imports: {
    autoImport: true,
    dirs: ['composables/**'],
  },
  css: ['./assets/css/main.sass'],
  build: {
    loaders: {
      scss: {
        additionalData: `@import "./assets/css/main.sass";`,
      },
    },
  },
});

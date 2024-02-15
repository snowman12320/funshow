// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
  },

  modules: ['@vueuse/nuxt'],
  imports: {
    autoImport: true,
    dirs: ['composables/**', 'types/**'],
  },
  css: ['~/assets/sass/app.sass'],
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: `
                        @import "~/assets/sass/_variables.sass"
                    `,
        },
      },
    },
  },
});

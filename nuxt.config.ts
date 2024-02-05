// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    typeCheck: false,
  },

  modules: ['@vueuse/nuxt'],
  imports: {
    autoImport: true,
    dirs: ['composables/**', 'types/**'],
  },
  // css: ['~/assets/css/app.css', '~/assets/sass/_app.sass'],
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: `
                        @import "~/assets/sass/_app.sass"
                    `,
        },
      },
    },
  },
});

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
  },

  modules: ['@vueuse/nuxt', 'nuxt-socket-io'],
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
  io: {
    sockets: [
      {
        name: 'main',
        url: 'http://localhost:3000',
      },
    ],
  },
});

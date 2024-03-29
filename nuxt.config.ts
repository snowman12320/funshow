// https://nuxt.com/docs/api/configuration/nuxt-config
import functions from './sockets/index';

export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
  },

  modules: ['@vueuse/nuxt', 'nuxt-internal-socket'],
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
  socketIO: {
    socketFunctions: functions,
    clientOptions: {
      uri: '/', // If you want to connect to a different server than the one created by this plugin
      managerOptions: {},
    },
  },
});

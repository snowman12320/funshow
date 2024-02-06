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
  css: ['~/assets/sass/app.sass'], // 總檔，引入所有的樣式，並操作樣式
  vite: {
    css: {
      // vue檔，中的style樣式，要放這才能正常使用
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

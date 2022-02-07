export default {
  env: {
    baseURL: process.env.BASE_URL,
    apiBaseURL: process.env.API_BASE_URL
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'kakaobrain_homepage',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  axios: {
    credentials: true,
    baseURL: 'https://kkbapi.freeive.dev/front/v1' || process.env.API_BASE_URL
  },

  router: {
    middleware: ['middleRouter']
  },

  css: ['~assets/scss/index.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/axios.js' },
    { src: '@/plugins/eventbus.js' },
    { src: '@/plugins/vue-device-detector.js', ssr: false },
    { src: '@/plugins/vue-masonry-css.js', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  // components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxtjs/style-resources', '@nuxtjs/dotenv'],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios', '@nuxtjs/dayjs'],

  dayjs: {
    locales: ['en', 'ko'],
    defaultLocale: 'ko'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  styleResources: {
    scss: [
      '~assets/scss/var.scss',
      '~assets/scss/functions.scss',
      '~assets/scss/mixins.scss'
    ]
  },
  server: {
    host: process.env.SERVER_HOST,
    port: process.env.SERVER_PORT
  }
}

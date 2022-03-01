export default {
  publicRuntimeConfig: {
    baseURL: process.env.VUE_APP_BASE_URL,
    apiBaseURL: process.env.VUE_APP_API_BASE_URL
  },
  env: {
    baseURL: process.env.VUE_APP_BASE_URL,
    apiBaseURL: process.env.VUE_APP_API_BASE_URL
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
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://www.kakaobrain.com'
      },
      { hid: 'og:image', property: 'og:image', content: '/metaimg.png' },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Unthinkable question makes impactful answer.'
      },
      { hid: 'og:site_name', property: 'og:site_name', content: 'kakaobrain' },
      { hid: 'og:locale', property: 'og:locale', content: 'en_US' },
      { hid: 'og:image:width', property: 'og:image:width', content: '1200' },
      { hid: 'og:image:height', property: 'og:image:height', content: '630' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [{ src: '/script/bodyScrollLock.js' }]
  },
  axios: {
    credentials: true,
    baseURL: process.env.VUE_APP_API_BASE_URL
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
    defaultLocale: 'en'
  },
  dotenv: {
    filename: '.env' + process.env.NODE_ENV
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

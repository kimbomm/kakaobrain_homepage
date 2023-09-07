export default {
  publicRuntimeConfig: {
    url: process.env.BASE_URL,
    baseURL: process.env.VUE_APP_BASE_URL,
    apiBaseURL: process.env.VUE_APP_API_BASE_URL,
    googleAnalytics: {
      id: process.env.GOOGLE_ANALYTICS_ID
    },
    kakaoAPI: {
      key: process.env.KAKAO_MAP_API_KEY,
      latlng_x: process.env.KAKAO_MAP_LATLNG_X,
      latlng_y: process.env.KAKAO_MAP_LATLNG_Y
    }
  },
  env: {
    baseURL: process.env.VUE_APP_BASE_URL,
    apiBaseURL: process.env.VUE_APP_API_BASE_URL
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '카카오브레인',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        'http-equiv': 'Content-Security-Policy',
        content: 'upgrade-insecure-requests'
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://www.kakaobrain.com'
      },
      // {
      //   hid: 'og:image',
      //   property: 'og:image',
      //   content: process.env.BASE_URL + '/metaimg.png'
      // },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Our innovation is to contribute our world-leading technology on large-scale AI models and Digital Human to the tech community, and to create services that improve the value and quality of life.'
      },
      { hid: 'og:site_name', property: 'og:site_name', content: 'kakaobrain' },
      { hid: 'og:locale', property: 'og:locale', content: 'en_US' },
      { hid: 'og:image:width', property: 'og:image:width', content: '1200' },
      { hid: 'og:image:height', property: 'og:image:height', content: '630' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    // script: [{ src: '/script/bodyScrollLock.js' }]
  },
  axios: {
    credentials: true,
    baseURL: process.env.VUE_APP_API_BASE_URL
  },

  router: {
    middleware: ['middleRouter'],
     extendRoutes(routes, resolve) {
      routes.push({
        name: 'publication-detail',
        path: '/publicationDetail/:contentId',
        component: resolve(__dirname, 'pages/contents/research/publicationDetail.vue'),
      });
    },

  },

  css: ['~assets/scss/index.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/axios.js' },
    { src: '@/plugins/eventbus.js' },
    { src: '@/plugins/vue-device-detector.js', ssr: false },
    { src: '@/plugins/vue-masonry-css.js', ssr: false },
    { src: '@/plugins/tui-image-editor.js', ssr: false },
    { src: '@/plugins/jszip.js', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  // components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/dotenv',
    '@nuxtjs/google-analytics'
  ],
  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/dayjs',
    '@nuxtjs/sitemap',
    'cookie-universal-nuxt'
  ],
  sitemap: {
    hostname: process.env.BASE_URL,
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date()
    }
  },

  dayjs: {
    locales: ['en', 'ko'],
    defaultLocale: 'en'
  },
  dotenv: {
    filename: '.env' + process.env.NODE_ENV
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  generate: {
    // fallback: '404.html',
    routes: [
      // '/contents/research/challenge',
      // '/contents/research/publications',
      // '/contents/research/collaborative',
      // '/contents/tech/highlight',
      // '/contents/tech/dataset',
      // '/contents/tech/brain',
      // '/contents/tech/large',
      // '/contents/tech/digital',
      // '/contents/document/news',
      // '/contents/document/documentary'
    ]

  },

  styleResources: {
    scss: [
      '~assets/scss/var.scss',
      '~assets/scss/functions.scss',
      '~assets/scss/mixins.scss'
    ]
  },
  server: {
    // host: process.env.SERVER_HOST
    // port: process.env.SERVER_PORT
  }
}

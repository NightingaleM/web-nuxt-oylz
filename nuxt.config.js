const pkg = require('./package')


module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'oylz',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      {
        hid: 'keywords',
        name: 'keywords',
        content: '前端，前端开发，Web前端，web前端，web，欧阳，oylz，oyrc，前端，前端开发，nodejs，博客，程序员'
      },
      {
        hid: 'description',
        name: 'description',
        content: '欧阳lz的个人博客,前端开发的个人博客'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/oylz.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff', continuous: true },

  /*
  ** Global CSS
  */
  css: [
    '~assets/css/publicStyle.less',
    '~assets/css/safariEasyStyle.less',
    '~assets/css/max_width750.less',
    '~assets/css/hljs.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/axios.js',

  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    '@nuxtjs/pwa',
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    proxy: true,
    proxyHeaders: true
  },
  /*
  ** Customize app manifest
  */
  manifest: {
    name: 'oylz',
    short_name: 'oylz',
    start_url: '/',
    display: 'fullscreen', // 定义开发人员对web应用程序的首选显示模式
    background_color: '#fff', // 
    description: '欧阳润驰的个人网站', // 描述
    theme_color: '#3B8070',
    dir: 'auto',// 文本方向
    lang: 'zh', // 语言
    splash_pages: null,

  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    },
    analyze: {
      analyzerMode: 'static'
    }
  },
  proxy: {
    '/oy/api': {
      target: 'http://127.0.0.1:2222',
      changeOrigin: true,
      ws: true
    },
    '/oy/papi': {
      target: 'http://127.0.0.1:2222',
      changeOrigin: true,
      ws: true
    },
  },
  pwa: {
    workbox: {
      offlineStrategy: 'NetworkFirst'
    }
  }
}

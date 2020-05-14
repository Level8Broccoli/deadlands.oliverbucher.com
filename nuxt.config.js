export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Deadlands',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Oldenburg&family=Oleo+Script:wght@700&display=swap'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/websocketPlugin'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    [
      '@nuxtjs/fontawesome',
      {
        proIcons: {
          duotone: [
            'faCheck',
            'faTimes',
            'faCheckDouble',
            'faEllipsisV',
            'faTrash',
            'faPlus',
            'faDiceD4',
            'faDiceD6',
            'faDiceD8',
            'faDiceD10',
            'faDiceD12',
            'faShareSquare',
            'faRandom',
            'faPaperPlane',
            'faUpload',
            'faDownload',
            'faEdit',
            'faAngleDoubleLeft',
            'faAngleDoubleRight',
            'faUser',
            'faChessKing',
            'faDice',
            'faStar',
            'faAsterisk',
            'faCompressArrowsAlt',
            'faSignal',
            'faBan',
            'faBell',
            'faExpandArrowsAlt',
            'faSave',
            'faSwords'
          ],
          solid: ['faEllipsisV']
        }
      }
    ]
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma'
  ],
  /*
   ** Build configuration
   */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

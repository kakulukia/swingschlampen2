module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Die offizielle Homepage',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'SwingSchlampen reloaded' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'mobile-web-app-capable', content: 'yes' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: '/font-awesome.css' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#8b0000' },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['vuetify'],
    extractCSS: true,
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  /*
  ** Load Vuetify into the app
  */
  plugins: [
    '~/plugins/vuetify',
    { src: '~/plugins/v-img', ssr: false },
    { src: '~plugins/ga.js', ssr: false }
  ],
  env: {
    baseUrl: 'https://admin.swingschlampen.de/'
  },
  /*
  ** Load Vuetify CSS globally
  */
  css: ['~/assets/app.styl']
}

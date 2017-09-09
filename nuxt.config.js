module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Die offizielle Homepage',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'SwingSchlampen reloaded' }
    ],
    link: [
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Saira:300,400,500,700|Material+Icons' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
    {src: '~/plugins/v-img', ssr: false}
  ],
  env: {
    baseUrl: 'http://localhost:8000'
  },
  /*
  ** Load Vuetify CSS globally
  */
  css: ['~/assets/app.styl']
}

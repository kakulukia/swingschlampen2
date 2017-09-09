import Vue from 'vue'
import VueImg from 'v-img'
import VueLazyload from 'vue-lazyload'

const moment = require('moment')
require('moment/locale/de')

Vue.use(VueLazyload)
Vue.use(VueImg)
Vue.use(require('vue-moment'), {moment})

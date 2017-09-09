import axios from 'axios'
// import Vue from 'vue'

import 'vue-awesome/icons'
// import Icon from 'vue-awesome/components/Icon'

// Vue.use(Icon)
// Vue.component('icon', Icon)

export default axios.create({
  baseURL: process.env.baseUrl
})

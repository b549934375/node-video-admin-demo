import Vue from 'vue'
import App from './app'

import $ from 'jquery'
import '../lib/js/rem.js'

import Vuex from 'vuex'
Vue.use(Vuex)

import 'element-ui/lib/theme-default/index.css'
import Element from 'element-ui'
Vue.use(Element)

import storeConfig from '../lib/js/store.js'
const store = new Vuex.Store(storeConfig)

import VueResource from 'vue-resource'
Vue.use(VueResource)





// import VueTouch from 'vue-touch'
// Vue.use(VueTouch)

new Vue({
  el: '#app',
  render: h => h(App),
   store
})

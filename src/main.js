import Vue from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import VueThreeSixty from 'vue-360'
import 'vue-360/dist/css/style.css'
import 'vue-lazy-youtube-video/dist/style.css'
import LazyYoutubeVideo from 'vue-lazy-youtube-video';
// import VueTinyLazyloadImg from 'vue-tiny-lazyload-img'
import VueLazyload from 'vue-lazyload'
import 'vue-lazy-youtube-video/dist/style.css'
import { Plugin } from 'vue-lazy-youtube-video'


Vue.component('LazyYoutubeVideo',LazyYoutubeVideo);
Vue.use(Plugin)
Vue.use(VueThreeSixty)
Vue.use(VueLazyload)

// const loadimage = require('./assets/loading.gif')
// const errorimage = require('./assets/error.gif')



// or with options

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: 'dist/loading.gif',
  attempt: 1
})

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')

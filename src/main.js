import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

// #ifdef H5
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  preLoad: 1.1
});
// #endif

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()

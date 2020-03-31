import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
import uploader from 'vue-simple-uploader'

Vue.use(ElementUI)
Vue.use(uploader)
Vue.config.productionTip = false

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
})

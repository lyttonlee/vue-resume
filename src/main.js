import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MuseUi from 'muse-ui'
import VueTouch from 'vue-touch'

import 'normalize.css'
import 'animate.css'
import 'muse-ui/dist/muse-ui.css'
import './common/icons.css'
import './common/style.css'
import './registerServiceWorker'

Vue.use(MuseUi)
Vue.use(VueTouch, { name: 'v-touch' })
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

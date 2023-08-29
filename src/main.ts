import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import 'normalize.css'
import '@/style/index.scss'
import vuetify from '@/plugins/vuetify'
import LoadingSpinner from '@/components/LoadingSpinner.vue'

Vue.component('LoadingSpinner', LoadingSpinner)

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: (h) => h(App)
}).$mount('#app')

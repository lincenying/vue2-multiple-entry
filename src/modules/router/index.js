import '@/polyfill'

import Vue from 'vue'
import Meta from 'vue-meta'
// import vueg from 'vueg'
import router from './router'
import App from './app.vue'

Vue.use(Meta)
// Vue.use(vueg, router, {
//     shadow: false,
//     forwardAnim: 'fadeInRight'
// })

const app = new Vue({
    router,
    ...App
})

app.$mount('#app')

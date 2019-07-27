import '~polyfill'
import Vue from 'vue'
import Meta from 'vue-meta'
import App from './app.vue'

Vue.use(Meta)

const app = new Vue({
    ...App
})

app.$mount('#app')

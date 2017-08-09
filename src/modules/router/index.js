import '~polyfill'
import Vue from 'vue'
import Meta from 'vue-meta'
import vueg from 'vueg'
import router from './router'
import App from './app.vue'

Vue.use(Meta)
Vue.use(vueg, router, {
    forwardAnim: 'fadeInRight'
})

router.beforeEach((route, redirect, next) => {
    window.scrollTo(0, 0)
    next()
})

const app = new Vue({
    router,
    ...App
})

app.$mount('#app')

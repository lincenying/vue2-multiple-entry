import Vue from 'vue'
import Meta from 'vue-meta'
import store from './store'
import router from './router'
import { sync } from 'vuex-router-sync'
import App from './app.vue'

Vue.use(Meta)

sync(store, router)

router.beforeEach((route, redirect, next) => {
    window.scrollTo(0, 0)
    next()
})

const app = new Vue({
    router,
    store,
    ...App
})

app.$mount('#app')

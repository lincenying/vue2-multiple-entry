import Vue from 'vue'
import store from './store'
import router from './router'
import { sync } from 'vuex-router-sync'
import App from './app.vue'

sync(store, router)

const app = new Vue({
    router,
    store,
    ...App
})

app.$mount('#app')

import Vue from 'vue'
import VueRouter from 'vue-router'

import index from '../pages/index.vue'
import view from '../pages/view.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'hash',
    //base: __dirname,
    routes: [{ name: 'index', path: '/', component: index }, { name: 'view', path: '/view/:id', component: view }]
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'

// 懒加载
// const index = resolve => require(['../pages/index.vue'], resolve)
// const view = resolve => require(['../pages/view.vue'], resolve)
// 懒加载 - 按组
const index = r => require.ensure([], () => r(require('../pages/index.vue')), 'group-index')
const view = r => require.ensure([], () => r(require('../pages/view.vue')), 'group-view')

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'hash',
    //base: __dirname,
    routes: [{ name: 'index', path: '/', component: index }, { name: 'view', path: '/view/:id', component: view }]
})

export default router

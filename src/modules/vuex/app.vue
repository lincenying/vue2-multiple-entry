<template>
    <div class="g-doc">
        <nav-component :current="5" />
        <nav-list></nav-list>
        <transition name="fade" mode="out-in">
            <router-view :key="key" class="router"></router-view>
        </transition>
    </div>
</template>
<script lang="babel">
import navComponent from '~components/nav-component.vue'
import navList from './components/nav-list.vue'
export default {
    name: 'vuex-app',
    computed: {
        key() {
            return this.$route.path.replace(/\//g, '_')
        },
    },
    components: {
        navComponent,
        navList,
    }
}
</script>
<style media="screen">
.fade-enter-active, .fade-leave-active {
    transition: all 0.3s ease;
}
.fade-enter {
    opacity: 1;
    transform: translate3d(0, 100px, 0);
}
.fade-leave-active {
    opacity: 0;
    transform: translate3d(100px, 0, 0);
}
.beian {
    float: right;
}
.beian i {
    width: 14px;
    height: 14px;
    background: url(http://ww4.sinaimg.cn/large/005uQRNCgw1f9xoio7mdej300k00k3y9.jpg);
    background-size: cover;
    display: inline-block;
    vertical-align: top;
}
</style>

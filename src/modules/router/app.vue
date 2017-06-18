<template>
    <div class="g-doc">
        <nav-component :current="4" />
        <nav-list></nav-list>
        <!--<transition name="fade" mode="out-in">-->
        <router-view :key="key" class="router"></router-view>
        <!--</transition>-->
    </div>
</template>
<script lang="babel">
import navComponent from '~components/nav-component.vue'
import navList from './components/nav-list.vue'

import 'nprogress/nprogress.css'
import 'toastr/build/toastr.min.css'
import 'vueg/css/transition-min.css'

export default {
    name: 'router-app',
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
<style lang="less">
body {
    padding: 0;
    margin: 0;
}
.g-doc {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    & > ul {
        height: 21px;
        margin: 0;
        padding: 0;
        background: #fff;
    }
    .router {
        flex: 1 1 auto;
        background: #fff;
    }
}
</style>

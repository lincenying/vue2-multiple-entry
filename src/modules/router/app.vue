<template>
    <div class="g-doc">
        <nav-component :current="4" />
        <keep-alive :include="cachedViews">
            <router-view :key="key" class="body"></router-view>
        </keep-alive>
        <!-- <router-view :key="key" class="body" v-transition></router-view> -->
    </div>
</template>
<script>
import navComponent from '@/components/nav-component.vue'

import 'nprogress/nprogress.css'
import 'toastr/build/toastr.min.css'

export default {
    name: 'router-app',
    components: {
        navComponent
    },
    data() {
        return {
            cachedViews: ['router-index']
        }
    },
    computed: {
        key() {
            return this.$route.path.replace(/\//g, '_')
        }
    }
}
</script>

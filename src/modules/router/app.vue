<template>
    <div class="g-doc">
        <nav-component :current="4" />
        <router-view :key="key" class="body"></router-view>
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
    computed: {
        key() {
            return this.$route.path.replace(/\//g, '_')
        }
    }
}
</script>

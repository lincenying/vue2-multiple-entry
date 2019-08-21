<template>
    <div class="g-doc">
        <nav-component />
        <views :data="data" />
    </div>
</template>
<script>
import navComponent from '@/components/nav-component.vue'
import views from '@/components/module-view.vue'
import api from '@/api'
export default {
    components: {
        navComponent,
        views
    },
    data() {
        return {
            data: {}
        }
    },
    async mounted() {
        const id = new URLSearchParams(window.location.search).get('id')
        const { success, data } = await api.get(`topic/${id}`)
        if (success) this.data = data
    },
    metaInfo() {
        const title = this.data.title ? this.data.title : ''
        return {
            title
        }
    }
}
</script>

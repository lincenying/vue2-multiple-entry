<template>
    <div class="g-doc">
        <nav-component />
        <views :data="data" />
    </div>
</template>
<script>
import navComponent from '~components/nav-component.vue'
import views from '~components/module-view.vue'
import api from '~api'
export default {
    data() {
        return {
            data: {}
        }
    },
    components: {
        navComponent,
        views
    },
    async mounted() {
        const id = new URLSearchParams(window.location.search).get('id')
        const { success, data } = await api.get(`topic/${id}`)
        if (success) this.data = data
    }
}
</script>

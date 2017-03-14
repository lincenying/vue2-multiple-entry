<template>
    <views :data="data" />
</template>
<script lang="babel">
import navComponent from '~components/nav-component.vue'
import views from '../components/view.vue'
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
        const id = this.$route.params.id
        const {success, data} = await api.get(`topic/${id}`)
        if (success) this.data = data
    }
}
</script>

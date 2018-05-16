<template>
    <views :data="item" />
</template>
<script>
import navComponent from '~components/nav-component.vue'
import views from '../components/view.vue'
import api from '~api'
export default {
    data() {
        return {
            item: {}
        }
    },
    components: {
        navComponent,
        views
    },
    async mounted() {
        const id = this.$route.params.id
        const { success, data } = await api.get(`topic/${id}`)
        if (success) this.item = data
    },
    metaInfo() {
        return {
            title: (this.item && this.item.title) || ''
        }
    }
}
</script>

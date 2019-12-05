<template>
    <views :data="item" />
</template>
<script>
import api from '@/api'
import views from '../components/view.vue'

export default {
    components: {
        views
    },
    data() {
        return {
            item: {}
        }
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

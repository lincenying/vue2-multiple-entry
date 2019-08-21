<template>
    <modules :topics="topics" @get-data="getData" :page="page" />
</template>
<script>
import modules from '../components/lists.vue'
import api from '@/api'
export default {
    components: {
        modules
    },
    data() {
        return {
            topics: [],
            page: 1
        }
    },
    async mounted() {
        this.getData()
    },
    methods: {
        async getData(page = 1) {
            const { success, data } = await api.get('topics', { page })
            if (success) {
                this.page = page
                this.topics = this.topics.concat(data)
            }
        }
    },
    metaInfo: {
        title: '这个是带路由的模块'
    }
}
</script>

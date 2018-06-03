<template>
    <modules :topics="topics" @get-data="getData" :page="page" />
</template>
<script>
import navComponent from '~components/nav-component.vue'
import modules from '../components/lists.vue'
import api from '~api'
export default {
    data() {
        return {
            topics: [],
            page: 1
        }
    },
    components: {
        navComponent,
        modules
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
    async mounted() {
        this.getData()
    },
    metaInfo: {
        title: '这个是带路由的模块'
    }
}
</script>

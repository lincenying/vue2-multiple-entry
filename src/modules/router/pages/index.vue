<template>
    <modules :topics="topics" @get-data="getData" :page="page" />
</template>
<script>
import ls from 'store2'
import api from '@/api'

import modules from '../components/lists.vue'

export default {
    name: 'router-index',
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
    activated() {
        console.log(`activated`)
        const path = this.$route.path
        const scrollTop = ls.get(path) || 0
        ls.remove(path)
        if (scrollTop) window.scrollTo(0, scrollTop)
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
    beforeRouteLeave(to, from, next) {
        const scrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop)
        const path = from.path
        if (scrollTop) ls.set(path, scrollTop)
        else ls.remove(path)
        next()
    },
    metaInfo: {
        title: '这个是带路由的模块'
    }
}
</script>

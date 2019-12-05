<template>
    <modules @loadMore="loadMore" :loading="loading" :topics="topics.data" />
</template>
<script>
import { mapGetters } from 'vuex'
import ls from 'store2'

import modules from '../components/lists.vue'

export default {
    name: 'vuex-index',
    components: {
        modules
    },
    data() {
        return {
            loading: false
        }
    },
    computed: {
        ...mapGetters({
            topics: 'topics/getTopics'
        })
    },
    async mounted() {
        await this.$store.dispatch('topics/getTopics', { page: 1 })
        await this.$nextTick()
        const path = this.$route.path
        const scrollTop = ls.get(path) || 0
        ls.remove(path)
        window.scrollTo(0, scrollTop)
    },
    methods: {
        async loadMore() {
            this.loading = true
            const page = this.topics.page + 1
            await this.$store.dispatch('topics/getTopics', { page })
            this.loading = false
        }
    },
    beforeRouteLeave(to, from, next) {
        const scrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop)
        const path = from.path
        if (scrollTop) ls.set(path, scrollTop)
        else ls.remove(path)
        next()
    },
    metaInfo() {
        return {
            title: '这个是带vuex的模块 - ' + this.topics.page
        }
    }
}
</script>

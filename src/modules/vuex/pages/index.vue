<template>
    <modules @loadMore="loadMore" :loading="loading" :list="list.data" />
</template>
<script lang="babel">
import ls from 'store2'
import { mapGetters } from 'vuex'
import navComponent from '~components/nav-component.vue'
import modules from '../components/list.vue'
export default {
    name: 'vuex-index',
    data() {
        return {
            loading: false,
        }
    },
    computed: {
        ...mapGetters({
            list: 'topics/getTopics'
        }),
    },
    components: {
        navComponent,
        modules
    },
    methods: {
        async loadMore() {
            this.loading = true
            const page = this.list.page + 1
            await this.$store.dispatch('topics/getTopics', {page})
            this.loading = false
        }
    },
    async mounted() {
        await this.$store.dispatch('topics/getTopics', {page: 1})
        await this.$nextTick()
        const path = this.$route.path
        const scrollTop = ls.get(path) || 0
        ls.remove(path)
        window.scrollTo(0, scrollTop)
    },
    beforeRouteLeave(to, from, next) {
        const scrollTop = document.body.scrollTop
        const path = from.path
        if (scrollTop) ls.set(path, scrollTop)
        else ls.remove(path)
        next()
    },
}
</script>

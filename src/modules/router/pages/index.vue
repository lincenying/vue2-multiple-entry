<template>
    <modules :list="list" />
</template>
<script lang="babel">
import navComponent from '~components/nav-component.vue'
import modules from '../components/list.vue'
import api from '~api'
export default {
    data() {
        return {
            list: []
        }
    },
    components: {
        navComponent,
        modules
    },
    async mounted() {
        const {success, data} = await api.get('topics', {page: 4})
        if (success) this.list = data
    },
    metaInfo: {
        title: '这个是带路由的模块',
    }
}
</script>

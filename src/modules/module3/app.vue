<template>
    <div class="g-doc">
        <nav-component :current="3" />
        <modules :list="list" />
    </div>
</template>
<script lang="babel">
import navComponent from '~components/nav-component.vue'
import modules from '~components/module-3.vue'
import api from '~api'
export default {
    name: 'module-3-app',
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
        const {success, data} = await api.get('topics', {page: 3})
        if (success) this.list = data
    },
    metaInfo: {
        title: '这个是模块3',
    }
}
</script>

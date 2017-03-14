<template>
    <div class="g-doc">
        <nav-component :current="2" />
        <modules :list="list" />
    </div>
</template>
<script lang="babel">
import navComponent from '~components/nav-component.vue'
import modules from '~components/module-2.vue'
import api from '~api'
export default {
    name: 'module-2-app',
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
        const {success, data} = await api.get('topics', {page: 2})
        if (success) this.list = data
    }
}
</script>

<template>
    <div class="g-doc">
        <nav-component :current="1" />
        <modules :list="list" />
    </div>
</template>
<script lang="babel">
import navComponent from '~components/nav-component.vue'
import modules from '~components/module-1.vue'
import api from '~api'
export default {
    name: 'index-app',
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
        const {success, data} = await api.get('topics', {page: 1})
        if (success) this.list = data
    }
}
</script>

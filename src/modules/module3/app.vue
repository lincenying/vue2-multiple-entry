<template>
    <div class="g-doc">
        <nav-component :current="4" />
        <moduleC :list="list" />
    </div>
</template>
<script lang="babel">
import navComponent from '../../components/nav-component.vue'
import moduleC from '../../components/module-c.vue'
import {getTopics} from '../../api'
export default {
    data() {
        return {
            list: []
        }
    },
    components: {
        navComponent,
        moduleC
    },
    mounted() {
        getTopics({page: 4}).then(({data}) => {
            this.list = data
        })
    }
}
</script>

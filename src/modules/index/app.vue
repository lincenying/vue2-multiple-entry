<template>
    <div class="g-doc">
        <nav-component :current="1" />
        <moduleE :list="list" />
    </div>
</template>
<script lang="babel">
import navComponent from '../../components/nav-component.vue'
import moduleE from '../../components/module-e.vue'
import {getTopics} from '../../api'
export default {
    data() {
        return {
            list: []
        }
    },
    components: {
        navComponent,
        moduleE
    },
    mounted() {
        getTopics({page: 1}).then(({data}) => {
            this.list = data
        })
    }
}
</script>

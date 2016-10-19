<template>
    <div class="g-doc">
        <nav-component :current="3" />
        <moduleB :list="list" />
    </div>
</template>
<script lang="babel">
import navComponent from '../../components/nav-component.vue'
import moduleB from '../../components/module-b.vue'
import {getTopics} from '../../api'
export default {
    data() {
        return {
            list: []
        }
    },
    components: {
        navComponent,
        moduleB
    },
    mounted() {
        getTopics({page: 3}).then(({data}) => {
            this.list = data
        })
    }
}
</script>

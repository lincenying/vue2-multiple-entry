<template>
    <div class="g-doc">
        <nav-component :current="2" />
        <moduleA :list="list" />
    </div>
</template>
<script lang="babel">
import navComponent from '../../components/nav-component.vue'
import moduleA from '../../components/module-a.vue'
import {getTopics} from '../../api'
export default {
    data() {
        return {
            list: []
        }
    },
    components: {
        navComponent,
        moduleA
    },
    mounted() {
        getTopics({page: 2}).then(({data}) => {
            this.list = data
        })
    }
}
</script>

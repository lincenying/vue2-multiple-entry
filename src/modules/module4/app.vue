<template>
    <div class="g-doc">
        <nav-component :current="5" />
        <moduleD :list="list" />
    </div>
</template>
<script lang="babel">
import navComponent from '../../components/nav-component.vue'
import moduleD from '../../components/module-d.vue'
import {getTopics} from '../../api'
export default {
    data() {
        return {
            list: []
        }
    },
    components: {
        navComponent,
        moduleD
    },
    mounted() {
        getTopics({page: 5}).then(({data}) => {
            this.list = data
        })
    }
}
</script>

<template>
    <views :data="item.data" />
</template>
<script lang="babel">
import { mapGetters } from 'vuex'
import navComponent from '~components/nav-component.vue'
import views from '../components/view.vue'
export default {
    name: 'vuex-view',
    data() {
        return {
        }
    },
    computed: {
        ...mapGetters({
            item: 'topic/getTopic'
        }),
    },
    components: {
        navComponent,
        views
    },
    async mounted() {
        const id = this.$route.params.id
        this.$store.dispatch('topic/getTopic', {id})
    }
}
</script>

<template>
    <views :data="item.data" />
</template>
<script>
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
    },
    metaInfo() {
        return {
            title: this.item.data.title,
        }
    }
}
</script>

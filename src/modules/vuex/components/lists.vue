<template>
    <div>
        <ul class="topics">
            <li v-for="item in topics" :key="item.id"><router-link :to="`/view/${item.id}`" v-text="item.title"></router-link></li>
        </ul>
        <div class="pages">
            <a v-if="loading" href="javascript:;">加载中...</a> <a v-else @click="$emit('loadMore')" href="javascript:;">加载更多...</a>
        </div>
    </div>
</template>
<script>
export default {
    props: ['topics', 'loading']
}
</script>

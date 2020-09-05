<template>
    <div>
        <div class="header">这是带路由的模块</div>
        <ul class="topics">
            <li v-for="item in topics" :key="item.id"><router-link :to="`/view/${item.id}`" v-text="item.title"></router-link></li>
        </ul>
        <div v-if="loading" class="pages">
            <a href="javascript:;">加载中...</a>
        </div>
        <div v-else class="pages">
            <a @click="$emit('get-data', page + 1)" href="javascript:;">加载更多</a>
        </div>
    </div>
</template>
<script>
export default {
    props: ['topics', 'page', 'loading']
}
</script>

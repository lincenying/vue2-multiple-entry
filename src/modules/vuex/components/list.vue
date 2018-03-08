<template>
    <div>
        <ul>
            <li v-for="item in list" :key="item.id">
                <router-link :to="`/view/${item.id}`" v-text="item.title"></router-link>
            </li>
            <li style="text-align:center;">
                <a v-if="loading" href="javascript:;">加载中...</a>
                <a v-else @click="$emit('loadMore')" href="javascript:;">加载更多...</a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props: ['list', 'loading']
}
</script>
<style>
.class4 {
    color: brown;
}
</style>

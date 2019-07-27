<template>
    <div>
        <div class="header">
            {{ data.title }}
            <router-link to="/">返回列表</router-link>
        </div>
        <div class="content" v-html="data.content"></div>
    </div>
</template>
<script>
export default {
    props: ['data']
}
</script>

<template>
    <div class="body">
        <div class="header">{{ data.title }}</div>
        <div class="content" v-html="data.content"></div>
    </div>
</template>
<script>
export default {
    props: ['data']
}
</script>

<template>
    <div>
        <div class="class5">{{ data.title }}</div>
        <div v-html="data.content"></div>
    </div>
</template>
<script>
export default {
    props: ['data']
}
</script>
<style>
.class5 {
    color: pink;
}
</style>

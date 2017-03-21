<template>
    <div>
        <div class="class6">{{ data.title }}</div>
        <div v-html="data.content"></div>
    </div>
</template>
<script>
export default {
    props: ['data']
}
</script>
<style>
.class6 {
    color: pink;
}
</style>

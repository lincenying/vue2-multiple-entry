<template>
    <div>
        <div class="class5">this is index</div>
        <ul>
            <li v-for="item in list" v-text="item.title"></li>
        </ul>
    </div>
</template>
<script>
export default {
    props: ['list']
}
</script>
<style>
.class5 {
    color: pink;
}
</style>

<template>
    <div>
        <div class="class2">this is module 2</div>
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
.class2 {
    color: blue;
}
</style>

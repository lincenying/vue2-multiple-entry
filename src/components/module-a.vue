<template>
    <div>
        <div class="class1">this is module 1</div>
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
.class1 {
    color: red;
}
</style>

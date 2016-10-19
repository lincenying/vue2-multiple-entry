<template>
    <div>
        <div class="class4">this is module 4</div>
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
.class4 {
    color: brown;
}
</style>

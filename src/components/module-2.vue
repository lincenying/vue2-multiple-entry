<template>
    <div>
        <div class="class2">this is module 2</div>
        <ul>
            <li v-for="item in list" :key="item.id"><a :href="`../view?id=${item.id}`" v-text="item.title" target="_blank"></a></li>
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

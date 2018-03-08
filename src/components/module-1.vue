<template>
    <div>
        <div class="class1">this is index</div>
        <ul>
            <li v-for="item in list" :key="item.id"><a :href="`view?id=${item.id}`" v-text="item.title" target="_blank"></a></li>
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

<template>
    <div>
        <div class="class1">this is index</div>
        <ul>
            <li v-for="item in list"><a :href="`view.html?id=${item.id}`" v-text="item.title" target="_blank"></a></li>
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

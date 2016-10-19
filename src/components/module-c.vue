<template>
    <div>
        <div class="class3">this is module 3</div>
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
.class3 {
    color: green;
}
</style>

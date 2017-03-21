<template>
    <div>
        <ul>
            <li v-for="item in list">
                <router-link :to="`/view/${item.id}`" v-text="item.title"></router-link>
            </li>
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

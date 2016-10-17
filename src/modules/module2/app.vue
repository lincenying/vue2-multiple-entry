<template>
    <div class="g-doc">
        <nav-component />
        <moduleB />
    </div>
</template>
<script lang="babel">
import navComponent from '../../components/nav-component.vue'
import moduleB from '../../components/module-b.vue'
export default {
    components: {
        navComponent,
        moduleB
    }
}
</script>

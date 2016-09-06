<template>
    <div class="g-doc">
        <nav-component />
        <moduleA />
    </div>
</template>
<script lang="babel">
import navComponent from '../components/nav-component.vue'
import moduleA from '../components/module-a.vue'
export default {
    components: {
        navComponent,
        moduleA
    }
}
</script>

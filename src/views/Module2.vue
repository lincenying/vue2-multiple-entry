<template>
    <div class="g-doc">
        <nav-component />
        <moduleC />
    </div>
</template>
<script lang="babel">
import navComponent from '../components/nav-component.vue'
import moduleC from '../components/module-c.vue'
export default {
    components: {
        navComponent,
        moduleC
    }
}
</script>

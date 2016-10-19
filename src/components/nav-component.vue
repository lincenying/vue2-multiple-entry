<template>
    <ul class="menuOpen">
        <li :class="{current: current === 1}">
            <a href="/index.html"><i></i>index</a>
        </li>
        <li :class="{current: current === 2}">
            <a href="/module1.html"><i></i>module1</router-link>
        </li>
        <li :class="{current: current === 3}">
            <a href="/module2.html"><i></i>module2</router-link>
        </li>
        <li :class="{current: current === 4}">
            <a href="/module3.html"><i></i>module3</router-link>
        </li>
        <li :class="{current: current === 5}">
            <a href="/module4.html"><i></i>module4</router-link>
        </li>
    </ul>
</template>
<script>
import '../assets/less/style.less'
export default {
    props: ['current']
}
</script>

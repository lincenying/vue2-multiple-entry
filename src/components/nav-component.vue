<template>
    <div class="nav-wrap">
        <ul class="nav-block">
            <li class="logo"><img src="http://img.daliangju.com/upload/20180603/1528019409246zkdt80.png" alt="" /></li>
            <li :class="{ current: current === 1 }">
                <a href="./index"><i></i>首页</a>
            </li>
            <li :class="{ current: current === 2 }">
                <a href="./module2"><i></i>模块2</a>
            </li>
            <li :class="{ current: current === 3 }">
                <a href="./module3"><i></i>模块3</a>
            </li>
            <li :class="{ current: current === 4 }">
                <a href="./router"><i></i>路由</a>
            </li>
            <li :class="{ current: current === 5 }">
                <a href="./vuex"><i></i>Vuex</a>
            </li>
        </ul>
    </div>
</template>
<script>
import '../assets/scss/style.scss'
export default {
    props: ['current']
}
</script>

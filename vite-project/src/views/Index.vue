<script setup>
    import { reactive } from 'vue';
    import { useRouter } from 'vue-router';

    const router = useRouter();

    const info = reactive({
        uid: 328,
        name: 'bruce'
    })

    const goTo = () => {
        router.push('/content')
    }
</script>

<template>
    <div>
        主页<br>
        <router-link to="/content">去看内容</router-link>
        <br>
        <router-link :to="{path: '/info', query: { uid: info.uid, name: info.name }}">去个人中心</router-link>
        <br>
        <router-link to="/vip">我是vip</router-link>
        <br>
        <router-link to="/svip">我是svip</router-link>

        <div><button @click="goTo">编程式导航</button></div>

        <div class="ls">
            <span>测试一下less效果</span>
            <div>这是一个矩形</div>
        </div>
    </div>
</template>

<style scoped lang="less">
    @colorRed: red;
    @colorBlue: blue;

    .ls{
        margin-top:50px;
        span{
            color: @colorRed;
        }
        div{
            width: 100px;
            height: 100px;
            background-color: @colorBlue;
        }
    }
</style>
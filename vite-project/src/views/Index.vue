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
    </div>
</template>

<style scoped>

</style>
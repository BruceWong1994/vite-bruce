<!-- 个人主页 -->

<script setup>
    import Footer from './Footer.vue';
</script>

<template>
    <div>
        个人中心
        <br>
        我的id：{{ $route.query.uid || '未登录' }}
        <br>
        姓名：{{ $route.query.name || '未登录'}}
        <br>
        <Footer />
    </div>
</template>

<style scoped>
    
</style>
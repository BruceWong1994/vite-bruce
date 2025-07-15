<script setup>

</script>

<template>
    <div>
        <div class='backToHome'><router-link to="/">返回首页</router-link></div>
    </div>
</template>

<style scoped>
    .backToHome {
        position: fixed;
        bottom: 300px;
        left: 0;
        width: 46px;
        height: 60px;
        background-color: pink;
        text-align: center;
        /* color: black; */
        border-radius: 20%;
    }
</style>
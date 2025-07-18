<script setup>

</script>

<template>
    <div>
        <div class='backToHome'><router-link to="/">返回首页</router-link></div>
    </div>
</template>

<style scoped lang="less">
    .backToHome {
        position: fixed;
        bottom: 5%;
        left: 0;
        width: 46px;
        height: 60px;
        background-color: pink;
        text-align: center;
        border-radius: 20%;
        display: flex;
        align-items: center;
        a {
            color: black;
            font-size: 16px;
            // line-height: 60px;
        }
    }
</style>
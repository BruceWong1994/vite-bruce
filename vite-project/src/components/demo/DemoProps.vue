<template>
    <div id="newPage">
        这是一个测试页面
        <hr>
        <div style="margin-bottom: 30px;">......Header组件开始......</div>
        <Header name="bruce" age="31"/>
        <div style="margin-top: 30px;">......Header组件结束......</div>
        <hr>
        <div style="margin-bottom: 30px;">......Footer组件开始......</div>
        <Footer :="propsFooter"/>
        <div style="margin-top: 30px;">......Footer组件结束......</div>
        <hr>
    </div>
</template>

<script setup>
    import Header from './Header.vue';
    import Footer from './Footer.vue';
    const propsFooter = {
        footer:true,
        position:'bottom'
    }
</script>

<style scoped>
    #newPage{
        margin-bottom:500px;
        /* text-align: center; */
    }
</style>
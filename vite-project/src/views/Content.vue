<!-- 内容展示 -->

<script setup>
import Footer from './Footer.vue';
import ButtonDemo from './ElementPlusUIFolder/ButtonDemo.vue';
import Container from './ElementPlusUIFolder/ContainerDemo.vue';
import ShowModelDemo from './ElementPlusUIFolder/ShowModelDemo.vue';
import NavigatorMenu from './ElementPlusUIFolder/NavigatorMenu.vue';
</script>

<template>
    <div style="padding-bottom:60px">
        <span>内容展示</span>
        <p class="out-text">看看溢出的文本有没有变成省略号</p>
        <p>下面是element plus ui 内容</p>
        <div class="content">
            <NavigatorMenu />
        </div>
        <div class="content">
            <ButtonDemo />
        </div>
        <div class="content">
            <Container />
        </div>
        <div class="content">
            <ShowModelDemo />
        </div>
        
    </div>
    <Footer />
</template>

<style scoped lang="less">
    .out-text {
        width:150px;
        // text-overflow: ellipsis;
        // overflow: hidden;

        white-space: nowrap;
        // word-break: keep-all;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .content{
        margin-bottom:42px
    }
</style>
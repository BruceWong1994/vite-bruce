<!-- 内容展示 -->

<script setup>
import Footer from './Footer.vue';
</script>

<template>
    <div>
        <span>内容展示</span>
        <p class="out-text">看看溢出的文本有没有变成省略号</p>
        <div class="content">
            <div class="mb-4">
                <el-button>Default</el-button>
                <el-button type="primary">Primary</el-button>
                <el-button type="success">Success</el-button>
                <el-button type="info">Info</el-button>
                <el-button type="warning">Warning</el-button>
                <el-button type="danger">Danger</el-button>
            </div>
            <div class="mb-4">
                <el-button plain>Plain</el-button>
            </div>
            <div class="mb-4"></div>
            <div class="mb-4"></div>
            <div class="mb-4"></div>
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
</style>
<script setup>
    import { Search,Edit,Check,Star,Message,Delete,ArrowLeft,ArrowRight } from '@element-plus/icons-vue'
    import { ref, watch } from 'vue'

    const value = ref(0)
    console.log(value.value);
    watch(value, (newValue, oldValue) => {
        console.log(newValue);
        
    })
    
</script>

<template>
    <p class="header-navigation">Button 按钮</p>
    <div class="mb-4">
        <el-button>Default</el-button>
        <el-button type="primary" disabled>Primary</el-button>
        <el-button type="success">Success</el-button>
        <el-button type="info" >Info</el-button>
        <el-button type="warning">Warning</el-button>
        <el-button type="danger">Danger</el-button>
    </div>
    <div class="mb-4">
        <el-button plain>Plain</el-button>
        <el-button type="primary" plain>Primary</el-button>
        <el-button type="success" plain>Success</el-button>
        <el-button type="info" plain>Info</el-button>
        <el-button type="warning" plain>Warning</el-button>
        <el-button type="danger" disabled plain>Danger</el-button>
    </div>
    <div class="mb-4">
        <el-button round>Round</el-button>
        <el-button type="primary" round>Primary</el-button>
        <el-button type="success" disabled round>Success</el-button>
        <el-button type="info" round>Info</el-button>
        <el-button type="warning" round>Warning</el-button>
        <el-button type="danger" round>Danger</el-button>
    </div>
    <div class="mb-4">
        <el-button circle :icon="Search"></el-button>
        <el-button circle type="primary" :icon="Edit"></el-button>
        <el-button circle type="success" :icon="Check"></el-button>
        <el-button circle type="info" :icon="Message"></el-button>
        <el-button circle type="warning" disabled :icon="Star"></el-button>
        <el-button circle type="danger" :icon="Delete"></el-button>
    </div>
    <div class="mb-4">
        <el-button link type="primary">Link-Primary</el-button>
        <el-button link type="warning" @click="value++">+1</el-button>
        <el-button link type="danger" disabled>你点不了我</el-button>
        <el-button type="success" disabled bg>这是个文本按钮1</el-button>
        <el-button type="success" text bg>这是个文本按钮2</el-button>
        <el-button type="success" text>这是个文本按钮3</el-button>
    </div>
    <div class="mb-4">
        <el-button-group>
            <el-button :icon="ArrowLeft" type="primary">上一页</el-button>
            <el-button type="primary">下一页 <el-icon class="el-icon--right"><ArrowRight /></el-icon></el-button>
        </el-button-group>
        <el-button loading type="danger">加载中...</el-button>
        <el-button size="large" type="success">大按钮</el-button>
        <el-button type="success">正常按钮</el-button>
        <el-button size="small" type="success">小按钮</el-button>
    </div>
    <div class="mb-4">
        <el-button type="info" tag="div" title="this is a div">div</el-button>
        <el-button type="danger" tag="a" target="_blank" href="https://www.baidu.com">a</el-button>
        <el-button autofocus type="success">自动获取焦点</el-button>
    </div>

</template>

<style scoped>
    
</style>
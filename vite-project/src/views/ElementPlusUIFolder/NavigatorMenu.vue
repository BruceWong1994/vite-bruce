<script setup>
    import { ref } from 'vue'
    import { User } from '@element-plus/icons-vue'

    const defaultActive = ref('3')

    const selected = (index,indexPath) =>{
        console.log(index)
        console.log(indexPath);
    }

    const handleCommand = command => {
        console.log(command);
    }
</script>

<template>
    <div>
        <p class="header-navigation">导航栏/菜单</p>
        <el-menu mode="horizontal" :default-active="defaultActive" @select = "selected"
        background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
            <el-menu-item index="1">购车</el-menu-item>
            <el-sub-menu index="2">
                <template #title>我的</template>
                <el-menu-item index="2-1">车主指南</el-menu-item>
                <el-menu-item index="2-2">订单</el-menu-item>
                <el-menu-item index="2-3">设置</el-menu-item>
            </el-sub-menu>
            
            <el-menu-item index="3">发现</el-menu-item>
            <el-menu-item index="4">商城</el-menu-item>
        </el-menu>
    
        <el-breadcrumb separator="/" style="margin-top: 20px;">
            <el-breadcrumb-item>首页</el-breadcrumb-item>
            <el-breadcrumb-item>我的</el-breadcrumb-item>
            <el-breadcrumb-item>订单</el-breadcrumb-item>
        </el-breadcrumb>

        <el-dropdown @command = 'handleCommand'>
            <span>
                个人中心<el-icon><User /></el-icon>
            </span>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item command="income">我的收入</el-dropdown-item>
                    <el-dropdown-item command="outfit">我的支出</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
</template>

<style scoped>

</style>
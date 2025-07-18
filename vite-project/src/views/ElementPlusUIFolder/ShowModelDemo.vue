<script setup>
    import { ElNotification, ElMessageBox, ElMessage} from 'element-plus'

    const openNotification = () => {
        ElNotification({
            title: '成功',
            message:'这是一条成功的提示消息',
            type: 'success',
            // position: 'bottom-right',
            duration: 2800
        })
    }

    const openMessageBox = () => {
        ElMessageBox.confirm('确定要删除吗？','提示',{
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
        }).then(() => {
            console.log('删除成功');
            
            ElMessage({
                type: 'success',
                message: '删除成功'
            })
        }).catch(() => {
            console.log('已取消删除');
            
            ElMessage({
                type: 'info',
                message: '已取消删除'
            })
        })
    }

    const openMessage = () => {
        ElMessage({
            message: '这是一条消息提示',
            type: 'primary',
            // showClose:true
        })
    }
</script>

<template>
    <div>
        <p class="header-navigation">Modal 提示框</p>
        <el-container>
            <el-button type="primary" @click="openNotification">Notification</el-button>
            <el-button type="primary" @click="openMessageBox">MessageBox</el-button>
            <el-button type="primary" @click="openMessage">Message</el-button>
        </el-container>
    </div>
</template>

<style scoped>

</style>
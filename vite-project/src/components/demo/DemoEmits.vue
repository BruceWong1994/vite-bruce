<template>
    <div style="margin-bottom: 300px;">
        <h3>子传父</h3> 
        <p>父组件：</p>
        <div>收到了什么：{{ abc }}</div>
        <div>添加用户结果：{{ result }}</div>
        <input type="text" v-model="grandchildget">
        <hr>
        <EmitsChildren @cv="emitCv" @addUser="emitAddUser"/>
    </div>
</template>

<script setup>
    import EmitsChildren from './EmitsChildren.vue';
    import {ref,provide} from 'vue'
    const abc = ref('传递成功了吗？')
    const result = ref('')
    const grandchildget = ref(true)

    const emitCv = data => {
        abc.value = data.info
    }

    const emitAddUser = data => {
        result.value = data.name
    }

    provide('_provide_Data',grandchildget)
</script>

<style scoped>

</style>
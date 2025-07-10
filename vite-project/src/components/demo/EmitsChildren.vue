<template>
    <div>
        <p>子组件：</p>
        <p><button @click="addUser">添加用户</button></p>
        <hr>
        <EmitsGrandChild />
    </div>
</template>

<script setup>
    import EmitsGrandChild from './EmitsGrandChild.vue'
    const emit = defineEmits(['cv','addUser'])
    emit('cv',{info:'收到了'})

    const addUser = () => {
        emit('addUser',{name:'bruce'})
    }
</script>

<style scoped>

</style>
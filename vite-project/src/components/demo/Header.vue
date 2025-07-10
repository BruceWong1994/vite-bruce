<template>
    <div>
        <p>子组件：</p>
        <p>我是{{ props.name }},我今年{{ props.age }}</p>
    </div>
</template>

<script setup>
    const props = defineProps(['name','age'])
    // console.log(props);
    
</script>

<style scoped>

</style>
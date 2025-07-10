<template>
    <div>
        这是一个孙子组件，用来测试依赖注入
        <p>从祖父组件得到的数据：{{ getInject }}</p>
    </div>
</template>

<script setup>
    import { inject } from 'vue';
    const getInject = inject('_provide_Data')
</script>

<style scoped>

</style>
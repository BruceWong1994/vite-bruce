<template>
    <div>
        <p>这里是子组件</p>
        <slot></slot>
        <slot class="s2" name="demo" />
        <hr>
    </div>
</template>

<script setup>

</script>

<style scoped>
    .s2{
        background:red;
        height:20px;
    }
</style>
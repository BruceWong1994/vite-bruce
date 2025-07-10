<template>
    <div>
        <p>子组件：</p>
        这是个footer组件对吧？答：{{ props.footer?'是的':'不是' }}
        <br>
        它在哪个位置？ 答：{{ props.position }}
    </div>
</template>

<script setup>
    const props = defineProps({
        footer:Boolean,
        position:String
    })
</script>

<style scoped>

</style>
<template>
    <div id="SLOT">
        <p>这里是父组件</p>
        <p>下面是子组件：</p>
        <hr>
        <SlotChild1>
            <p>法兰式地哦攻击哦啊扫地机分工i啊受打击内功啊酒红</p>
            <template #demo>
                <p>我是子组件1111111111111111模板</p>
                <div>我有三只猫，第一只是{{ ddd.cat }}，老二是{{ ddd.baozi }}，老三是{{ ddd.dog }}</div>
            </template>
        </SlotChild1>

        <SlotChild2 >
            <template #d2="{title,age}">
                <span>我是子组件2222222222222222222</span>
                <p>{{ title }}</p>
                <p>{{ age }}</p>
            </template>
        </SlotChild2>
    </div>
</template>

<script setup>
    import SlotChild1 from './SlotChild1.vue';
    import SlotChild2 from './SlotChild2.vue';
    import { reactive } from 'vue';
    const ddd = reactive({
        cat:'小白',
        dog:'糯米',
        baozi:'小花'
    })
</script>

<style scoped>
    #SLOT{
        margin-bottom:300px;
    }
</style>
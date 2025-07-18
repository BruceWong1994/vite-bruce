<script setup>
import HelloWorld from './components/HelloWorld.vue'
import DemoProps from './components/demo/DemoProps.vue';
import DemoEmits from './components/demo/DemoEmits.vue';
import SlotParent from './components/demo/SlotParent.vue';
import { useAppStore } from './stores/appStore.js';

const AppStore = useAppStore()
</script>

<template>
  <router-view />
  <div>
    <div>
      <!-- <p>{{ AppStore.obj.url }}</p>
      <p>{{ AppStore.age }}</p>
      <p><button @click="AppStore.add">岁数+1</button></p> -->
      <!-- <hr> -->
      <!-- <DemoProps /> -->
      <!-- <DemoEmits /> -->
      <!-- <SlotParent /> -->
    </div>
  </div>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>

<style scoped>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
  }
</style>

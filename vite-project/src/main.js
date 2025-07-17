import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginResistedState from 'pinia-plugin-persistedstate'
import './style.css'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const pinia = createPinia()
pinia.use(piniaPluginResistedState)

// createApp(App).mount('#app')
const app = createApp(App)
app.use(pinia).use(router)
app.use(ElementPlus)

// router.beforeEach((to, from, next) => {
//     console.log(to);
//     console.log(from)
//     if(to.name === 'svip'){
//         alert('您还不是svip')
//         next(false)
//     }else{
//         next()
//     }
// })

app.mount('#app')

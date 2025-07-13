import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginResistedState from 'pinia-plugin-persistedstate'
import './style.css'
import App from './App.vue'
import router from './router'

const pinia = createPinia()
pinia.use(piniaPluginResistedState)
// createApp(App).mount('#app')
const app = createApp(App)

app.use(pinia)
app.use(router)
app.mount('#app')

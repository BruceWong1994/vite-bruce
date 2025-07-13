import { defineStore } from 'pinia'
import {ref,reactive} from 'vue' 

export const useAppStore = defineStore('appStore',()=>{
    const obj = reactive({
        url:'www.baidu.com',
        name:'bruce'
    })

    const age = ref(31)

    const add = () => {
        age.value++
    }
    
    return{
        obj,
        add,
        age
    }
},{
    persist:true    //使用 pinia-plugin-persistedstate 插件实现即时存储到localStorage中
})
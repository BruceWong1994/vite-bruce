import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path:'/',
        component:()=>import('../.vue')
    },
    {
        path:'/',
        component:()=>import('../.vue')
    },
    {
        path:'/',
        component:()=>import('../.vue')
    }
]

const router = createRouter({
    routes,
    history:createWebHistory()
})

export default router
import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path:'/',
        alias:['/home','/index'],
        name:'index',
        component:()=>import('@/Index.vue')
    },
    {
        path:'/content',
        name:'content',
        component:()=>import('@/Content.vue')
    },
    {
        path:'/info',
        name:'member',
        component:()=>import('@/Info.vue'),
    },
    {
        path:'/vip',
        name:'vip',
        component:()=>import('@/Vip.vue'),
        children:[
            {
                path:'order',
                component:()=>import('@/Order.vue')
            },
            {
                path:'money',
                component:()=>import('@/Money.vue')
            }
        ]
    },
    {
        path:'/svip',
        name:'svip',
        component:()=>import('@/Svip.vue'),
        // redirect:'/vip'
        // redirect:{name:'member',query:{uid:508,name:'Nico'}}
    }
]

const router = createRouter({
    routes,
    history:createWebHistory()
})

export default router
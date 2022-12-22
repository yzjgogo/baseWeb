import VueRouter from 'vue-router'
import Vue from 'vue'


const Home = () => import('../views/home/Home')
const MyElementUi = () => import('../views/elementui/MyElementUi')
const MyLodash = () => import('../views/lodash/MyLodash')
const JsonObj = () => import('../views/json-to-obj/JsonObj')

Vue.use(VueRouter)

const routes = [
    {
        path:'',
        redirect:'/home'
    },
    {
        path: '/home',
        component:Home,
    },
    {
        path: '/elementui',
        component:MyElementUi,
    },
    {
        path: '/lodash',
        component:MyLodash,
    },
    {
        path: '/jsontoobj',
        component:JsonObj,
    }
]

const router = new VueRouter({
    routes,
    mode:'history'
})

export default router
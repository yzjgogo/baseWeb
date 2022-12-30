import VueRouter from 'vue-router'
import Vue from 'vue'
import routes2 from './modules'  //./modules/index.js


const Home = () => import('../views/home/Home')
const MyElementUi = () => import('../views/elementui/MyElementUi')
const MyLodash = () => import('../views/lodash/MyLodash')
const JsonObj = () => import('../views/json-to-obj/JsonObj')

Vue.use(VueRouter)

const routes1 = [
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
//把两个数组拼接起来，构成所有路由的组合
const routes = routes1.concat(routes2)

const router = new VueRouter({
    routes,//这里必须用routes，不能换别的单词
    mode:'history'
})

export default router
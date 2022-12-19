import VueRouter from 'vue-router'
import Vue from 'vue'


const Home = () => import('../components/Home')
const MyElementUi = () => import('../views/elementui/MyElementUi')
const MyLodash = () => import('../views/lodash/MyLodash')

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
    }
]

const router = new VueRouter({
    routes,
    mode:'history'
})

export default router
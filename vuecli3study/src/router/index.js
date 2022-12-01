import VueRouter from 'vue-router'
import Vue from 'vue'


const Home = () => import('../components/Home')
const MyElementUi = () => import('../components/elementui/MyElementUi')

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
    }
]

const router = new VueRouter({
    routes,
    mode:'history'
})

export default router
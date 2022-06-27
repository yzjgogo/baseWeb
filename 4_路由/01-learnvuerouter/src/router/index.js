
// 配置路由相关的信息
import VueRouter from 'vue-router'
import Vue from 'vue'
// 一次性加载所有的路由，导致打包的结果非常大，用户第一次加载网页很慢，
// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'


//路由的懒加载，被访问的时候才加载
const Home = () => import('../components/Home')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')

const About = () => import('../components/About')
const User = () => import('../components/User')
const Profile = () => import('../components/Profile')

// 1.通过Vue.use(插件), 安装插件
Vue.use(VueRouter)//会执行VueRouter的install()方法

// 2.创建VueRouter对象
const routes = [
  {
    path: '',//'/'也行
    // component: Home,地址栏显示不出来Home,因此redirect
    // redirect重定向
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    //// (导航守卫1)，全局导航守卫_1 :元数据，可以添加一些描述路由的相关信息
    meta: {
      title: '首页'//对于非嵌套路由，route对象.mete.title可取到，例如$route.meta.title
    },
    children: [
      //嵌套路由4：加载首页，默认显示新闻,这里之所以注释掉是因为Home.vue中的activated()方法里实现了默认加载news，进去看一下
      // {
      //   path: '',
      //   redirect: 'news'
      // },
      {
        path: 'news',//嵌套路由1：不要加'/'
        component: HomeNews
      },
      {
        path: 'message',
        component: HomeMessage
      }
    ]
  },
  {
    path: '/about',
    component: About,
    meta: {
      title: '关于'
    },
    // (导航守卫2)，路由独享守卫
    beforeEnter: (to, from, next) => {
      // console.log('about beforeEnter');
      next()//一般要调next()
    }
  },
  {
    path: '/user/:id',//动态路由传参1：跟上用户的id，记住有:，之后跳转到User组件时，地址栏:localhose:8080/user/zhangsan
    component: User,
    meta: {
      title: '用户'
    },
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: '档案'
    },
  }
]
const router = new VueRouter({
  // 配置路由和组件之间的应用关系
  routes,
  //默认是hash，地址栏有#号
  mode: 'history',//可以去掉#号
  linkActiveClass: 'active'//统一将所有的router-link的router-link-active改成active
})
// (导航守卫1)：全局导航守卫
//全局导航守卫：监听所有的路由跳转
//导航首位：定义，路由来回跳转之间的过程监听



// (导航守卫1)：全局导航守卫_2,内容包括下面的router.beforeEach和router.afterEach

// 前置守卫(guard),路由跳转前的监听
//beforeEach的参数guard又是一个函数，guard有3个参数：to是Route,form是Route,next是函数且在beforeEach里next必须调一下，
// 路由才能往下走，如果不掉相当于阻塞了路由的跳转，且next可以根据需要传递不同的参数，跳转到不同的路由，看官网


//所有的路由跳转之前都走这里
router.beforeEach((to, from, next) => {
  // 从from跳转到to，获取路由的元数据，如果这个路由是嵌套路由则取不到，你想取/home,但是实际上是/home/news，虽然home里定义了meta，但是取不到
  //修改浏览器顶部显示的标题
  // document.title = to.meta.title
  document.title = to.matched[0].meta.title//这样的话，无论是不是嵌套路由都能取到，可打印出来看看
  // console.log(to);
  // console.log('++++');
  next()
})

// 后置钩子(hook)，没有next,无需调用next，所有的路由跳转完成后都走这里
router.afterEach((to, from) => {
  // console.log('----');
})




// 3.将router对象传入到Vue实例
export default router


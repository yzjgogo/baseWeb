export default [
  {
    path: '/agreement',
    name: 'Agreement',
    component: () => import(/* webpackChunkName: "Agreement" */ '@views/agreement/index'),
    meta: {
      title: '协议',
      desc: '协议',
      keepAlive: true
    }
  },
  {
    path: '/diyDirective',
    name: 'DiyDirective',
    component: () => import(/* webpackChunkName: "DiyDirective" */ '@views/diy-directive/index'),
    meta: {
      title: '自定义指令',
      desc: '自定义指令',
      keepAlive: true
    }
  }
]

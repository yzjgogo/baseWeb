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
  }
]

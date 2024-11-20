export default [
  {
    path: '/scaleDrag',
    name: 'scaleDrag',
    component: () => import(/* webpackChunkName: "ClassicsReadBookList" */ '@views/scale-drag')
    // component: () => import(/* webpackChunkName: "ClassicsReadBookList" */ '@views/scale-drag/index')
  }
]

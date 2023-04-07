export default [
  {
    path: '/commonStyle',
    name: 'CommonStyle',
    component: () => import(/* webpackChunkName: "ClassicsReadBookList" */ '@views/pro-common-style')
  }
]

export default [
  {
    path: '/scopedDeep',
    name: 'ScopedDeep',
    component: () => import(/* webpackChunkName: "ClassicsReadBookList" */ '@views/scoped-deep/ScopedDeep')
  }
]

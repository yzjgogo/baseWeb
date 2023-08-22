export default [
  {
    path: '/myTransition',
    name: 'MyTransition',
    component: () => import(/* webpackChunkName: "ClassicsReadBookList" */ '@views/vue-transition')
  }
]

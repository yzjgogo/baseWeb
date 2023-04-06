export default [
  {
    path: '/myFilter',
    name: 'MyFilter',
    component: () => import(/* webpackChunkName: "ClassicsReadBookList" */ '@views/my-filter/MyFilter')
  }
]

export default [
  {
    path: '/myAxios',
    name: 'MyAxios',
    component: () => import(/* webpackChunkName: "ClassicsReadBookList" */ '@views/my-axios')
  }
]

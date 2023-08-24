export default [
  {
    path: '/myVModel',
    name: 'MyVModel',
    component: () => import(/* webpackChunkName: "ClassicsReadBookList" */ '@views/my-v-model/MyVModel')
  }
]

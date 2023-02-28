export default [
  {
    path: '/mySlot',
    name: 'MySlot',
    component: () => import(/* webpackChunkName: "ClassicsReadBookList" */ '@views/my-slot/MySlot')
  }
]

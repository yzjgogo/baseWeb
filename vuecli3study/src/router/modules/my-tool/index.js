export default [
  {
    path: '/myTool',
    name: 'MyTool',
    component: () => import(/* webpackChunkName: "ClassicsReadBookList" */ '@views/my-tool/MyTool')
  }
]

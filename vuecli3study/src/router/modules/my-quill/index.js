export default [
  {
    path: '/myQuill',
    name: 'MyQuill',
    component: () => import(/* webpackChunkName: "ClassicsReadBookList" */ '@views/my-quill/MyQuill')
  }
]

export default [
  {
    path: '/myPinyin',
    name: 'MyPinyin',
    component: () => import(/* webpackChunkName: "ClassicsReadBookList" */ '@views/my-pinyin/MyPinyin')
  }
]

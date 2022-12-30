export default [
  {
    path: '/classicsreadbooklist',
    name: 'ClassicsReadBookList',
    // component: () => import(/* webpackChunkName: "ClassicsReadBookList" */ '../../../views/classics-read/BookList'),
    component: () => import(/* webpackChunkName: "ClassicsReadBookList" */ '@views/classics-read/BookList'),
    meta: {
      title: '名著阅读',
      desc: '名著阅读',
      keepAlive: true
    }
  }
]

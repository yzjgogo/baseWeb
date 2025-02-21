export default [
  {
    path: '/vuedata',
    // name: 'ClassicsReadBookList',
    // component: () => import(/* webpackChunkName: "ClassicsReadBookList" */ '../../../views/classics-readY/BookList'),
    component: () => import('@views/vue-data/VueData')
  },
  {
    path: '/grandpa',
    name: 'grandpa',
    component: () => import(/* webpackChunkName: "grandpa" */ '@views/vue-data/components/attrsAndListeners/grandpa')
  }
]

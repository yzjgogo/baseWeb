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
  },
  //E:\web\baseWeb\vuecli3study\src\views\vue-data\components\tabPage.vue
  
  {
    path: '/tabPage',
    name: 'tabPage',
    component: () => import(/* webpackChunkName: "tabPage" */ '@views/vue-data/components/tabPage.vue')
  },
  {
    path: '/systemResource',
    name: 'systemResource',
    component: () => import(/* webpackChunkName: "systemResource" */ '@views/vue-data/components/systemResource.vue')
  },
  {
    path: '/recordAudio',
    name: 'recordAudio',
    component: () => import(/* webpackChunkName: "recordAudio" */ '@views/vue-data/components/recordAudio.vue')
  },
  {
    path: '/imgCropper',
    name: 'imgCropper',
    component: () => import(/* webpackChunkName: "imgCropper" */ '@views/vue-data/components/imgCropper.vue')
  },
  {
    path: '/cacheData',
    name: 'cacheData',
    component: () => import(/* webpackChunkName: "cacheData" */ '@views/vue-data/components/cacheData.vue')
  },
  {
    path: '/testCache',
    name: 'testCache',
    component: () => import(/* webpackChunkName: "testCache" */ '@views/vue-data/components/testCache.vue')
  },
]

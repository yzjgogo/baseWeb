export default [
  {
    path: '/myWebSocket',
    name: 'MyWebSocket',
    component: () => import(/* webpackChunkName: "ClassicsReadBookList" */ '@views/my-websocket')
  }
]

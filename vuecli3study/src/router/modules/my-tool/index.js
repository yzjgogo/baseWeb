export default [
  {
    path: '/myTool',
    name: 'MyTool',
    component: () => import(/* webpackChunkName: "MyTool" */ '@views/my-tool/MyTool')
  },
  {
    path: '/videoPlay',
    name: 'videoPlay',
    component: () => import(/* webpackChunkName: "videoPlay" */ '@views/my-tool/components/video-play')
  }
]

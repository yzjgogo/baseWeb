import Vue from 'vue'
import App from './App'
//如果是导入的目录(文件夹)，则系统自动寻找这个目录里的index.js导入，这里同直接导入 ./router/index.js一样
import router from './router'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
// require('./assets/css/base.css')

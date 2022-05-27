import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

//所有的组件都会有一个test()方法，因为所有的组件都继承自vue的原型
// Vue.prototype.test = function () {
//   console.log('test');
// }
// Vue.prototype.name = "coderwhy"

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

// console.log(router);

// const obj = {
//   name: 'why'
// }
//
// Object.defineProperty(obj, 'age', 18)

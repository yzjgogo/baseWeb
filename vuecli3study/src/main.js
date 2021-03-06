import Vue from 'vue'
import App from './App.vue'

/**如果为true则构建或编译时terminal会输出很多信息*/
Vue.config.productionTip = false


/**可见CLI3创建的项目默认就是runtimeonly的方式*/
new Vue({
  render: h => h(App),
}).$mount('#app')

// 等价于如下：
// new Vue({
//   el: '#app',
//   render: h => h(App)
// })

// el: '#app' 最终是通过.$mount('#app')的方式


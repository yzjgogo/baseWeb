import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 下面两行是elementUI的配置
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//引入lodash
import lodash from 'lodash'

/**如果为true则构建或编译时terminal会输出很多信息*/
Vue.config.productionTip = true

Vue.use(ElementUI)

//在Vue的原型中定义loadsh，方便在任意组件中使用this._.xxxx()使用
Vue.prototype._ = lodash

/**可见CLI3创建的项目默认就是runtimeonly的方式*/
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

// 等价于如下：
// new Vue({
//   el: '#app',
//   render: h => h(App)
// })

// el: '#app' 最终是通过.$mount('#app')的方式


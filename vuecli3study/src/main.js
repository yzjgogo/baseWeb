import Vue from 'vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
import App from './App.vue'

// 配置项目的整体css样式，包括对html和body标签的样式配置，只需这一行代码即生效，参考善版无影
import './assets/css/index.less'

// 下面两行是elementUI的配置
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//引入lodash
import lodash from 'lodash'

// 全局注册filter_2：引入filters.js文件
import filters from '@/libs/filters'

/**如果为true则构建或编译时terminal会输出很多信息*/
Vue.config.productionTip = true

Vue.use(ElementUI)

//在Vue的原型中定义loadsh，方便在任意组件中使用this._.xxxx()使用
Vue.prototype._ = lodash
// 全局注册filter_4，将filters.js文件里定义的filter进行全局注册
Object.keys(filters).forEach(key => {
  console.log('注册filter')
  console.log(key)
  console.log(filters[key])
  Vue.filter(key, filters[key])
})

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


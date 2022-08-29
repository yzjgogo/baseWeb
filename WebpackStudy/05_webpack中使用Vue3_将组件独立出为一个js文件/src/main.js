
import Vue from 'vue'

//1，定义一个组件
import App from './vue/app'
new Vue({
  //4，<App/>会替换掉#app
  el: '#app',
  //3，template的模板使用在root里注册(引入)得这个子组件，
  template: '<App/>',
  //2，第1步定义的组件作为root的子组件
  components: {
    App
  }
})

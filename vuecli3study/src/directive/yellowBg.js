
import Vue from 'vue'
const yellowBg = {
  // 当被绑定的元素插入到 DOM 中时执行inserted,el是被绑定的元素
  inserted: function(el) {
    el.style.backgroundColor = 'yellow'
  }
}
//注册一个全局的自定义指令v-yellowBg,yellowBg是一个对象（指令定义对象）
Vue.directive('yellowBg', yellowBg)

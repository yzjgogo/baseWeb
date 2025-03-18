
import Vue from 'vue'
const funDir = {
  bind: function(el, binding, vnode) {
    //判断binding.value是函数
    if(typeof binding.value === 'function'){
      //如果是函数，就调用这个函数
      // binding.value()不传参
      binding.value('我是参数')//传参
    }
  },
  inserted: function(el, binding, vnode) {
    
    
  },
  update: function(el, binding, vnode) {
    
  },
  componentUpdated: function(el, binding, vnode) {
    
  },
  unbind: function(el, binding, vnode) {
    
  }
}
Vue.directive('funDir', funDir)

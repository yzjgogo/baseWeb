
import Vue from 'vue'
const dongTaiArg = {
  //传给指令的参数可以是动态的
  bind: function(el, binding, vnode) {
    console.log('获取指令参数：',binding.arg)
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
Vue.directive('dongTaiArg', dongTaiArg)

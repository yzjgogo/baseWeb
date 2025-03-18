
import Vue from 'vue'
//Vue注册全局组件时，可以直接只传入一个函数，而不用传入一个指令对象
Vue.directive('simpleDir', function(el, binding, vnode) {
    el.style.backgroundColor = 'yellow'
})

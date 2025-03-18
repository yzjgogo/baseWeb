
import Vue from 'vue'
const dirAll = {
  // 当在使用处这样用时，v-dirAll:foo.a.b.c="message"
  bind: function(el, binding, vnode) {
    console.log('v-dirAll指令的所有狗子函数参数')
    var s = JSON.stringify
    console.log('name: '       + s(binding.name) + ',' +
      'value: '      + s(binding.value) + ',' +
      'expression: ' + s(binding.expression) + ',' +
      'argument: '   + s(binding.arg) + ',' +
      'modifiers: '  + s(binding.modifiers) + ',' +
      'vnode keys: ' + Object.keys(vnode).join(', '))

      // 输出结果如下
      // name: "dirAll",value: "你好",expression: "message",argument: "foo",modifiers: {"a":true,"b":true,"c":true},vnode keys: tag, data, children, text, elm, ns, context, fnContext, fnOptions, fnScopeId, key, componentOptions, componentInstance, parent, raw, isStatic, isRootInsert, isComment, isCloned, isOnce, asyncFactory, asyncMeta, isAsyncPlaceholder
  },
  inserted: function(el, binding, vnode) {
    console.log('v-dirAll指令的所有inserted函数参数')
    var s = JSON.stringify
    console.log('name: '       + s(binding.name) + ',' +
      'value: '      + s(binding.value) + ',' +
      'expression: ' + s(binding.expression) + ',' +
      'argument: '   + s(binding.arg) + ',' +
      'modifiers: '  + s(binding.modifiers) + ',' +
      'vnode keys: ' + Object.keys(vnode).join(', '))
    
  },
  update: function(el, binding, vnode) {
    console.log('v-dirAll指令的所有update函数参数')
    var s = JSON.stringify
    console.log('name: '       + s(binding.name) + ',' +
      'value: '      + s(binding.value) + ',' +
      'expression: ' + s(binding.expression) + ',' +
      'argument: '   + s(binding.arg) + ',' +
      'modifiers: '  + s(binding.modifiers) + ',' +
      'vnode keys: ' + Object.keys(vnode).join(', '))
  },
  componentUpdated: function(el, binding, vnode) {
    console.log('v-dirAll指令的所有componentUpdated函数参数')
    var s = JSON.stringify
    console.log('name: '       + s(binding.name) + ',' +
      'value: '      + s(binding.value) + ',' +
      'expression: ' + s(binding.expression) + ',' +
      'argument: '   + s(binding.arg) + ',' +
      'modifiers: '  + s(binding.modifiers) + ',' +
      'vnode keys: ' + Object.keys(vnode).join(', '))
  },
  unbind: function(el, binding, vnode) {
    console.log('v-dirAll指令的所有unbind函数参数')
    var s = JSON.stringify
    console.log('name: '       + s(binding.name) + ',' +
      'value: '      + s(binding.value) + ',' +
      'expression: ' + s(binding.expression) + ',' +
      'argument: '   + s(binding.arg) + ',' +
      'modifiers: '  + s(binding.modifiers) + ',' +
      'vnode keys: ' + Object.keys(vnode).join(', '))
  }
}
Vue.directive('dirAll', dirAll)

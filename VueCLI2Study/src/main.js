// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/**
  注意：
 当前项目我用 vue init webpack WebpackStudy创建时选择的是runtime+compiler模式，参考：创建CLI2项目模式选择.png

 下面为了对比runtimeonly模式才写的代码

 runtime+compiler对应webpack.base.conf.js -> module.exports -> resolve ->
 alias -> 'vue$': 'vue/dist/vue.esm.js'

 runtimeonly无需在resolve里指定alias,默认是'vue/dist/vue.runtime.js'
 参考WebpackStudy -> 05_webpack中使用Vue0_直接使用el指定的默认模板 -> webpack.config.js里的注释

 * */
/**

  runtime+compiler模式
 通过template字段指定模板，然后使用这个模板
 参考图片：VUE程序运行过程.png
 * */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})




/**----------以下是对runtimeonly的解释，下面这些代码本来应该放到runtimeonly模式的项目里，放到runtime+compiler项目也是支持runtimeonly的---------------------*/




/**
 runtimeonly模式无需指定模板
 而是通过render函数来渲染组件
 参考图片：VUE程序运行过程.png
 render: h => h(App)中
 render是一个函数，这个函数有一个参数h，这个参数h也是一个函数，这个函数传入组件即可渲染
 其实这个h函数实际上在vue源码里叫做createElement('标签',{标签属性},['标签内容(包括嵌套的标签)'])
 可以省略第二个参数只要第一个和第三个参数，例如：createElement('标签',['标签内容(包括嵌套的标签)'])
 * */
// new Vue({
//   el: '#app',
//   render: h => h(App)
// })

/**
 * 下面列举createElement()的用法
 * */
/**
  用法1：创建一个空标签并渲染
  <h2></h2> 替换 <div id="app"></div>
 * */
// new Vue({
//   el: '#app',
//   render:createElement=>createElement("h2")
// })


/**
  用法2：创建带各种属性的标签并渲染
  <h2 class="title" style="background-color:red;width:100px;height:50px"></h2>
 替换
 <div id="app"></div>
 * */
// new Vue({
//   el: '#app',
//   render:createElement=>createElement("h2",{class:'title',style:'background-color:red;width:100px;height:50px'})
// })


/**
 用法3：创建带各种属性的标签并且给标签添加内容，并渲染
  <h2 class="title" style="background-color:red;width:500px;height:100px">我是内容</h2>
 替换
 <div id="app"></div>
 * */
// new Vue({
//   el: '#app',
//   render:createElement=>createElement("h2",{class:'title',style:'background-color:red;width:500px;height:100px'},['我是内容'])
// })


/**
 用法4：创建带各种属性的标签并且标签内有嵌套别的标签，并渲染
  <h2 class="title" style="background-color:red;width:500px;height:100px"></h2>
 替换
 <div id="app"></div>
 * */
// new Vue({
//   el: '#app',
//   render:createElement=>createElement("h2",
//     {class:'title',style:'background-color:red;width:500px;height:100px'},
//     ['我是内容',createElement('button',['按钮'])])
// })

/**
 疑问解决：
 对于runtimeonly模式的项目，虽然如下new Vue()里没有传入template,但是App.vue里是被<template/>标签包裹的，这个template难道不用解析吗，不还是要用到runtime+compiler模式吗？
 其实不是的，这里的<template/>标签实际上是不存在的，我们可以console.log(App)打印出来看看，里面并没有template相关字样反而是有render函数，其实这归功于vue-template-compiler
 参考：WebpackStudy -> 05_webpack中使用Vue4_vue文件的loader
 这个vue-template-compiler用于加载.vue文件，且是通过render函数方式，所以并没有compiler模板
 * */
// new Vue({
//   el: '#app',
//   render: h => h(App)
// })

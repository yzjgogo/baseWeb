import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import moduleA from './modules/moduleA'
import moduleB from './modules/moduleB'

// 1.安装插件
Vue.use(Vuex)

// 2.创建对象
const state = {
  counter: 1000,
  students: [
    {id: 110, name: 'why', age: 18},
    {id: 111, name: 'kobe', age: 24},
    {id: 112, name: 'james', age: 30},
    {id: 113, name: 'curry', age: 10}
  ],
  info: {
    name: 'kobe',
    age: 40,
    height: 1.98
  }
}
//state也可以定义成函数：
//箭头函数的方式定义state，返回一个对象
// state: () => {
//   return {
//     cartList: ["电脑", "手机"]
//   }
// },

//对于箭头函数，如果函数体只有一行则可以省略大括号和return关键字
// state:() => {
// 	cartList: ["电脑2", "手机2"]
// },

//对比上面这种方式，用不用小括号()包裹都一样，效果好只是起到一个整体的作用，这里这个整体就是一个对象，因此可以省略
// state:() => ({
// 	cartList: ["电脑1", "手机1"]
// }),

//直接用一个对象定义对象
// state:{
// 		cartList: ["电脑", "手机"]
// }

const store = new Vuex.Store({
  // Vuex的store中的state是响应式的, 当state中的数据发生改变时, Vue组件会自动更新
  state,
  mutations,
  actions,
  getters,

  modules: {
    //a会被放到store里的state里，F12会看到
    a: moduleA,
    b: moduleB
  }
})

// 3.导出store独享
export default store


// 对象的解构
const obj = {
  name: 'why',
  age: 18,
  height: 1.88,
  address: '洛杉矶'
}

const {name, height, age} = obj;




import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import moduleA from './modules/moduleA'

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
/**
 * Devtools的使用，可以调试Vue，Vuex
 * 1，浏览器安装该插件，搜索devtools，有Vue.js关键字的就是
 * 2，F12，找到'Vue'入口
 *
 * store存在的目的：全局任意位置访问使用同一份数据中心，类似一个数据库
 *
 * 想修改state里的数据，不要直接访问state里的数据counter进行修改
 * 1，state用于存放数据(状态)，所有的组件，在任何路由都可以访问,可通过$store.state.counter访问，但是不应该直接修改state里的值，而应该
 *    通过actions或mutations修改state里维护的数据
 *    什么是单一状态树：一个项目只有一个store,方便管理维护，如果store1,store2,store3....这样，就很难以维护

 context是上下文，注意不是state，目前可理解成store对象
 //没有参数的情况
 aUpdateInfo(context) {
    setTimeout(() => {
      context.commit('updateInfo')
    }, 1000)
  },
 //用dispatch调用actions里的aUpdateInfo方法，注意，不是commit
 this.$store.dispatch('aUpdateInfo')

 //传参的情况
 aUpdateInfo(context, payload) {
    setTimeout(() => {
      context.commit('updateInfo')
    }, 1000)
  },
 this.$store.dispatch('aUpdateInfo'，'ddddddd')

 //因为是异步的，想知道修改成功了，因此要有回调，通过给payload传入一个函数可以实现(里面commit后调用一下这个函数即可)，但是现在是为了讲Promise
 aUpdateInfo(context, payload) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        //仍然是调用mutations里的函数
        context.commit('updateInfo');
        console.log(payload);

        resolve('1111111')
      }, 1000)
    })
  }
 //aUpdateInfo()的返回值，会返回给dispatch()的返回值,因此这里可以then
 this.$store
 .dispatch('aUpdateInfo', '我是携带的信息')
 .then(res => {
            console.log('里面完成了提交');
            console.log(res);
          })


 *
 *
 *
 * 2，actions，用来定义方法，修改state前，对数据进行复杂或异步的处理，有时可跳过这个方法直接通过mutations修改state里的数据
 * 之所以存在actions是为了devtools更好的跟踪mutations,因为如果在mutations里出现异步操作，则devtools就不能更好的跟踪了，就不准确了，就没有调试的意义了，可以自己
 * 在mutations里弄一个异步操作然后devtools看看试试
 *
 * 3，mutations，用来定义方法decrement(state)，修改state前，对数据进行简单的逻辑处理,参数就是store的state实例
 *    可在任意位置通过this.$store.commit('decrement')调用mutations里定义的decrement(state)
 *
 decrement(state) {
    state.counter--
  }
 这个函数可以看成两部分，1是事件类型'decrement'，2是回调函数{state.counter--}
 this.$store.commit('decrement')里传入的就是事件类型'decrement'
 其中事件类型可以定义常量：参考：mutations-types.js里的INCREMENT，这样就避免了定义处和调用处手写出错的问题，

 一，普通的提交风格
 //mutations传单个数据
 incrementCount(state, count) {
    state.counter += count
  }
 this.$store.commit('incrementCount', count)

 //mutations传多个数据，封装成对象
 addStudent(state, stu) {
    state.students.push(stu)
  }
 const stu = {id: 114, name: 'alan', age: 35}
 this.$store.commit('addStudent', stu)

 //mutations传递参数有个专业名词教payload,举例
 incrementCount(state, payload) {
    state.counter += payload.count
  }

 二，特殊的提交风格
 this.$store.commit('incrementCount', count)就可以像下面这样：
 this.$store.commit({
          type: 'incrementCount',
          count：count
        })
 对应方法：会将传入到commit里的整个对象用payload接收
 incrementCount(state, payload) {
    //此时payload是一个对象，有type和count属性
    // state.counter += payload.count
  }

 store的响应式原理
 参考:mutations.js里的updateInfo(state)
 直接在store里的state里定义的对象(属性)是有响应式的
 后面添加的属性，就不是响应式的,例如state.info['address'] = "香港"，则这个address属性，就不是响应式的，vuex监听不到
 如果想让新增的属性是响应式的，可以这样：
 Vue.set(state.info,'address','香港')

 js删除对象的属性，delete state.info.age 也不是响应式的
 但是，Vue.delete(state.info,'age')就是响应式的，立刻做出反应知道没有age属性了,界面跟着刷新



 *
 * 4，getters类似组件里的计算属性，不想直接要state里的数据，而是想把state里的数据转换一下，转换成自己想要的数据，看上去里面定义的是方法，其实可通过访问方法名来访问该方法的返回值
 *    getters里定义的函数可以有两个参数，第一个参数是state实例，第二个参数就是这个getters实例
 *
 more20stuLength(state, getters) {
    return getters.more20stu.length
  }
 *    可在任意位置通过$store.getters.powerCounter访问getters里定义的属性，这样比直接$store.state.counter更灵活更直接
 *
 * 5，modules
  因为vue是单一状态树的，只有一个store，业务越来越多，store就很臃肿，因此modules就出现了，
 我们可以根据业务模块在modules里定义很多module,modules里定义的每一个模块，就好像又是一个store, 因为它里面state,mutations,actions,getters,modules啥都有
使用modules里的state：
 a会被放到store里的state里，F12会看到
 $store.state.a.name

 调用modules里的mutations里的方法
 mutations: {
    updateName(state, payload) {
      state.name = payload
    }
  }
 //课件用法与store里的一样
 this.$store.commit('updateName', 'lisi')

 调用modules里的getters里的方法
 getters: {
    //module里的state
    fullname(state) {
      return state.name + '11111'
    },
    //module里的getters
    fullname2(state, getters) {
      return getters.fullname + '2222'
    },
    //rootState是store里的state
    fullname3(state, getters, rootState) {
      return getters.fullname2 + rootState.counter
    }
  }
 //课件用法也与store一样
 $store.getters.fullname
 $store.getters.fullname2
 $store.getters.fullname3

 调用modules里的actions里的方法
 //这里的context不是store对象，只能commit自己所在module的mutations里的方法，不能commit store里的
 //打印出来context看看，里面有访问store的东西
 actions: {
    aUpdateName(context) {
      console.log(context);
      setTimeout(() => {
        context.commit('updateName', 'wangwu')
      }, 1000)
    }
  }
 //用法也一样
 this.$store.dispatch('aUpdateName')


 */
const store = new Vuex.Store({
  // Vuex的store中的state是响应式的, 当state中的数据发生改变时, Vue组件会自动更新
  state,
  mutations,
  actions,
  getters,

  modules: {
    //a会被放到store里的state里，F12会看到
    a: moduleA
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




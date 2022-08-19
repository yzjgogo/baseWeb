/**
 Module是模块的意思, 为什么在Vuex中我们要使用模块呢?
 Vue使用单一状态树,那么也意味着很多状态都会交给Vuex来管理.
 当应用变得非常复杂时,store对象就有可能变得相当臃肿.
 为了解决这个问题, Vuex允许我们将store分割成模块(Module), 而每个模块拥有自己的state、mutations、actions、getters等

 * */
export default {
  state: {
    name: 'zhangsan'
  },
  mutations: {
    //第一个参数的state是当前moduleA的是state，不是全局store里的state,第二个参数是用于存放参数的对象
    // this.$store.commit('updateName', 'lisi') 虽然, 我们的updateName是定义在module内部的.
    // 但是在调用的时候, 依然是通过this.$store来直接调用的.
    updateName(state, payload) {
      state.name = payload
    }
  },
  getters: {

// <h2>{{$store.getters.fullname}}</h2>
// <h2>{{$store.getters.fullname2}}</h2>
// <h2>{{$store.getters.fullname3}}</h2>
//虽然fullname是定义在module内部的.但是在调用的时候, 依然是通过this.$store来直接调用的.

    //第一个参数是当前moduleA的state,不是全局store里的state
    fullname(state) {
      return state.name + '11111'
    },
    //第二个参数是当前moduleA的getters，是不是store的getters呢？
    fullname2(state, getters) {
      return getters.fullname + '2222'
    },
    //第三个参数是store的state
    fullname3(state, getters, rootState) {
      return getters.fullname2 + rootState.counter
    }
  },
  actions: {
    //state:是当前moduleA的state
    //commit：就是commit()方法了
    //rootState：是store的state
    //aUpdateName({state,commit,rootState})

    //这里的context就不是store对象了，因此其commit方法只能commit所在moduleA的mutations里的方法，不能commit
    //store里的方法
    //上面的state，commit，rootState都是context的属性
    aUpdateName(context) {
      console.log(context);
      setTimeout(() => {
        //这个updateName()只能是当前moduleA里的mutations里的方法
        context.commit('updateName', 'wangwu')
      }, 1000)
    },
    doSomeActionMethod(context,value){
      console.log(`收到数据了吗：${value}`)
    }
  }
}

import {INCREMENT} from "./mutations-types";
/**

 decrement(state) {
    state.counter--
  }
 Mutation主要包括两部分：
 字符串的事件类型（type）-> 'decrement'
 一个回调函数（handler）,该回调函数的第一个参数就是state。 (state){state.counter--}

 * */
export default {

  //调用store里mutations里定义的方法，通过commit的方式
  // this.$store.commit(INCREMENT)
  // 方法，默认有一个参数就是state,就是index.js里定义的store里定义的state
  [INCREMENT](state) {
    //就操作了store里的state了
    state.counter++
  },
  decrement(state) {
    state.counter--
  },
  incrementCount(state, payload) {
    // payload: 负载

    // 1.普通的提交封装
    // 1_1只有一个参数
    // this.$store.commit('incrementCount', count)
    // state.counter += payload

    //1_2有多个参数需要传递
    //this.$store.commit('incrementCount',{count:1,data:"data"})
    //state.counter += payload.count



    // 2.特殊的提交封装，this.$store.commit(payload)
  //   this.$store.commit({
  //     type: 'incrementCount', 时间类型(mutations里定义的方法名)
  //     count,参数数据
  //   })
  // },
    state.counter += payload.count
  },
  addStudent(state, stu) {
    //参考上面的，1_2有多个参数需要传递
    // const stu = {id: 114, name: 'alan', age: 35}
    // this.$store.commit('addStudent', stu)
    state.students.push(stu)
  },
  updateInfo(state) {
    state.info.name = 'coderwhy'

    // 错误的代码: 不能在mutations的方法里进行异步操作，否则devtools无法监控
    // setTimeout(() => {
    //   state.info.name = 'coderwhy'
    // }, 1000)

    // state.info['address'] = '洛杉矶'该方式做不到state数据的响应式
    // Vue.set(state.info, 'address', '洛杉矶')可以做到响应式
    //或者state.info = {.....}用新对象覆盖旧的对象

    // delete state.info.age该方式做不到响应式
    // Vue.delete(state.info, 'age')可以做到响应式
  }
}

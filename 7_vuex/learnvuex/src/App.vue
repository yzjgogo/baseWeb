<template>
  <div id="app">
    <h2>----------App内容: modules中的内容----------</h2>
    <h2>{{$store.state.a.name}}</h2>
    <button @click="updateName">修改名字</button>
    <h2>{{$store.getters.fullname}}</h2>
    <h2>{{$store.getters.fullname2}}</h2>
    <h2>{{$store.getters.fullname3}}</h2>
    <button @click="asyncUpdateName">异步修改名字</button>

    <h2>----------App内容: info对象的内容是否是响应式----------</h2>
    <h2>{{$store.state.info}}</h2>
    <button @click="updateInfo">修改信息</button>

    <h2>----------App内容----------</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent">添加学生</button>

    <h2>----------App内容: getters相关信息----------</h2>
<!--    访问getters里定义的属性-->
    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>{{$store.getters.more20stu}}</h2>
    <h2>{{$store.getters.more20stuLength}}</h2>
<!--    moreAgeStu本身返回了一个函数，这个函数接收一个年龄，因此可以这样-->
    <h2>{{$store.getters.moreAgeStu(12)}}</h2>

    <h2>----------Hello Vuex内容----------</h2>
    <hello-vuex/>

    <h2 style="background-color: #FA5A55">-------------module内容---------------</h2>
    <h2>-------------...mapState---------------</h2>
    <h2>{{info.name}},{{counter}} --</h2>
    <h2>{{getMapStateName()}}</h2>
    <h2>{{bname}} -------*</h2>

    <button @click="doModuleAction">执行moudleA里的actions</button>
  </div>
</template>

<script>
  import HelloVuex from './components/HelloVuex'
  import {mapState} from 'vuex'

  import {
    INCREMENT
  } from './store/mutations-types'

  export default {
    name: 'App',
    components: {
      HelloVuex
    },
    data() {
      return {
        message: '我是App组件'
      }
    },
    computed: {
      /**mapState用法1： store里的state(非module里的state) */
      //用法1：直接饮用state里的属性，作为数组传入，注意用引号包裹
      ...mapState(['counter','info']),

      //用法2：饮用state里的属性，同时重新定义别名，组成对象传入
      // ...mapState({
      //   counter1:'counter',
      //   info1:'info'
      // })

      //用法3：自定义方法，方法的参数是state，返回要使用的state里的属性
      // ...mapState({
      //   counter1:state=>state.counter,
      //   info1:state=>state.info
      // })


      /**mapState用法2： module里的state
          前提：在对应module里设置namespaced:true，例如moduleB.js里的namespaced:true

       下面三种方法的第一个参数说明：
       如果在store -> modules{b:moduleB}则第一个参数传'b';
       如果在store -> modules{moduleB}则第一个参数传'moduleB';
       * */
      //用法1：第2个参数同上
      // ...mapState('b',['bname'])
      //用法2：第2个参数同上
      // ...mapState('b', {bnam:1:'bname'})
      //用法3：第2个参数同上
      ...mapState('b',{bname:state=>state.bname})


      /** mapGetters、mapActions、mapMutations等等，用法类似mapState，也可参考有道云笔记 */
    },
    methods: {
      addition() {
        //调用store里mutations里定义的方法，通过commit的方式
        this.$store.commit(INCREMENT)
      },
      subtraction() {
        this.$store.commit('decrement')
      },
      addCount(count) {
        // payload: 负载
        // 1.普通的提交封装
        // this.$store.commit('incrementCount', count)

        // 2.特殊的提交封装
        this.$store.commit({
          type: 'incrementCount',
          count
        })
      },
      addStudent() {
        const stu = {id: 114, name: 'alan', age: 35}
        this.$store.commit('addStudent', stu)
      },
      updateInfo() {
        // this.$store.commit('updateInfo')
        // this.$store.dispatch('aUpdateInfo', {
        //   message: '我是携带的信息',
        //   success: () => {
        //     console.log('里面已经完成了');
        //   }
        // })
        this.$store
          .dispatch('aUpdateInfo', '我是携带的信息')
          .then(res => {
            console.log('里面完成了提交');
            console.log(res);
          })
      },
      updateName() {
        this.$store.commit('updateName', 'lisi')
      },
      asyncUpdateName() {
        this.$store.dispatch('aUpdateName')
      },
      getMapStateName(){
        return this.info.name
      },
      doModuleAction(){
        this.$store.dispatch('doSomeActionMethod','我是发送到module里的内容')
      }
    }
  }
</script>

<style>

</style>

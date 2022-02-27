

// <!--    访问getters里定义的属性-->
// <h2>{{$store.getters.powerCounter}}</h2>
// <h2>{{$store.getters.more20stu}}</h2>
// <h2>{{$store.getters.more20stuLength}}</h2>
// <!--    moreAgeStu本身返回了一个函数，这个函数接收一个年龄，因此可以这样-->
// <h2>{{$store.getters.moreAgeStu(12)}}</h2>
export default  {
  //这个参数就是store里的state实例
  powerCounter(state) {
    return state.counter * state.counter
  },
  more20stu(state) {
    return state.students.filter(s => s.age > 20)
  },
  //第二个参数就是getters实例
  more20stuLength(state, getters) {
    //里面又调用了getters的其他函数
    return getters.more20stu.length
  },
  moreAgeStu(state) {
    // return function (age) {
    //   return state.students.filter(s => s.age > age)
    // }
    //
    //返回一个函数更灵活，把过滤逻辑交给使用处，由使用处自己传入需要的参数处理
    return age => {
      return state.students.filter(s => s.age > age)
    }
  }
}

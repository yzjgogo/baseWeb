export default {
//Action类似于Mutation, 但是是用来代替Mutation进行异步操作的.

  // this.$store.dispatch('aUpdateInfo', {
  //   message: '我是携带的信息',
  //   success: () => {
  //     console.log('里面已经完成了');
  //   }
  // })

  // context: 上下文,是和store对象具有相同方法和属性的对象.也就是说, 我们可以通过context去进行commit相关的操作, 也可以获取context.state等.
  //但是注意, 这里它们并不是同一个对象, 为什么呢? 我们后面学习Modules的时候, 再具体说.
  // aUpdateInfo(context, payload) {
  //   setTimeout(() => {
  //     context.commit('updateInfo')//异步回调之后再调mutations里的方法更新state
  //     console.log(payload.message);
  //     payload.success()//回调调用处的回调方法
  //   }, 1000)
  // },





  // this.$store
  //   .dispatch('aUpdateInfo', '我是携带的信息')//actions里的aUpdateInfo()返回一个Promise,因此下一行用.then()处理
  //   .then(res => {
  //     console.log('里面完成了提交');
  //     console.log(res);
  //   })
  //context是上下文，注意不是state，目前可理解成store对象
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
}

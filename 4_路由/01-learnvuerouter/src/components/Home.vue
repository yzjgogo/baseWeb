<template>
  <div>
    <h2>我是首页</h2>
    <p>我是首页内容, 哈哈哈</p>

<!--    嵌套路由3：完整的路径/home/news 而不是/news,也不是home/news，不要少了前面的'/' -->
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
<!--    嵌套路由2：-->
    <router-view></router-view>

    <h2>{{message}}</h2>
  </div>
</template>

<script>
  export default {
    name: "Home",
    data() {
      return {
        message: '你好啊',
        path: '/home/news'
      }
    },
    created() {
      console.log('home created');
      // document.title = "首页"//修改浏览器上显示的标题
    },
    destroyed() {
      console.log('home destroyed');
    },
    // 这两个函数, 只有该组件被保持了状态使用了keep-alive时, 才是有效的
    activated() {
      this.$router.push(this.path);
      console.log('activated');
    },
    deactivated() {
      console.log('deactivated');
    },
    // (导航守卫3)：组件内的守卫，只是提一下，看官网
    beforeRouteLeave (to, from, next) {
      console.log("home的beforeRouteLeave-----")
      //如果是嵌套路由就是/home/news这种，如果不是嵌套路由就是/home这种
      console.log(this.$route.path);
      console.log(to);
      console.log(from);
      console.log(next);
      console.log("home的beforeRouteLeave*********")
      this.path = this.$route.path;
      next()
    }
  }
</script>

<style scoped>

</style>

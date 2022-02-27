<template>
  <div id="app">
    <h2>我是APP组件</h2>
<!--    tag:router-link显示成什么样式，tag="button"让router-link按button显示
replace:浏览器的返回按钮无效，只能点击router-link实现切换
F12查看得知，当前路由时多了这两个class：router-link-exact-active路由嵌套有关，先不管,router-link-active
1，单个的router-link，将active-class="active" 将默认的router-link-active改成active
2，统一将所有的router-link的router-link-active改成active，VueRouter({linkActiveClass:'active'})
-->
<!--    <router-link to="/home" tag="button" replace active-class="active">首页1</router-link>-->
<!--    <router-link to="/about" tag="button" replace active-class="active">关于1</router-link>-->
    <!--<router-link to="/home" tag="button" replace>首页</router-link>-->
    <!--<router-link to="/about" tag="button" replace>关于</router-link>-->
    <!--<button @click="homeClick">首页</button>-->
    <!--<button @click="aboutClick">关于</button>-->

<!--    默认路由跳转:router-link-->
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
<!--    动态路由传参2：动态拼接获取userId,对应路径的定义那里-->
    <!--<router-link :to="'/user/'+userId">用户</router-link>-->
    <!--&lt;!&ndash;<router-link to="/profile">档案</router-link>&ndash;&gt;-->

<!--    query方式传参1：{path: '/profile', query: {name: 'why', age: 18, height: 1.88}},跳转后地址栏也会显示这些参数-->
    <!--<router-link :to="{path: '/profile', query: {name: 'why', age: 18, height: 1.88}}">-->
      <!--档案</router-link>-->

<!--    通过点击，自己实现路由跳转：this.$router.replace('/home')-->
    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>


<!--    keep-alive是Vue内部的组件，router-view是VueRouter内部的组件
keep-alive避免组件离开后被销毁
exclude指定不需要保活的组件，填入对应的name，这个name来自组件里导出时的name属性
对应的还有include-->
    <keep-alive exclude="Profile,User">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import HomeNews from "./components/HomeNews";
import Home from "./components/Home";
export default {
  name: 'App',
  components: {Home, HomeNews},
  data() {
    return {
      userId: 'zhangsan',
      imgURL: 'http://www.baidu.com/logo.png'
    }
  },
  methods: {
    homeClick() {
      // 通过代码的方式修改路由 vue-router
      // push => pushState
      // this.$router.push('/home')
      this.$router.replace('/home')
      console.log('homeClick');
    },
    aboutClick() {
      // this.$router.push('/about')
      this.$router.replace('/about')
      console.log('aboutClick');
    },
    userClick() {
      // 动态路由传参4：
      this.$router.push('/user/' + this.userId)
    },
    profileClick() {
      // query方式传参3：
      this.$router.push({
        path: '/profile',
        query: {
          name: 'kobe',
          age: 19,
          height: 1.87
        }
      })
    }
  }
}
</script>

<style>
  /*.router-link-active {*/
    /*color: #f00;*/
  /*}*/

  .active {
    color: #f00;
  }
</style>

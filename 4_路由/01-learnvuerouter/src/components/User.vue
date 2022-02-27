<template>
  <div>
    <h2>我是用户界面</h2>
    <p>我是用户的相关信息, 嘿嘿嘿</p>
    <h2>{{userId}}</h2>
    <h2>{{$route.params.id}}</h2>
    <button @click="btnClick">按钮</button>
  </div>
</template>

<script>
  export default {
    name: "User",
    computed: {
      userId() {
        // 动态路由传参3：取出动态路由的参数，$route:谁处于活跃就是睡，也就是当前路由
        return this.$route.params.id
      }
    },
    created() {
      console.log('User created');
    },
    destroyed() {
      console.log('User destroyed');
    },
    methods: {
      btnClick() {
        // 所有的组件都继承自Vue类的原型
        console.log(this.$router);//整个路由对象，全局的
        console.log(this.$route);//当前处于活跃的路由

        console.log(this.name);
      }
    }
  }
</script>

<style scoped>

</style>

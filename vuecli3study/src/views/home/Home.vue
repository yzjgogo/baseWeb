<template>
  <div id="home-d">
    <div style="background-color: #2eaae0;text-align: left">
      <button @click="toElementUI">Element UI</button>
      <button @click="toLodash">lodash</button>
      <button @click="toJsonToObj">本地json文件解析为对象接收--</button>
      <button @click="toMZYD">名著阅读</button>
      <button @click="toVueData">Vue的$data和$options的用法</button>
    </div>
    <img alt="Vue logo" src="../../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  methods:{
    toElementUI(){
      this.$router.push("/elementui")
    },
    toLodash(){
      this.$router.push("/lodash")
    },
    toJsonToObj(){
      this.$router.push("/jsontoobj")
    },
    toMZYD(){
      this.$router.push("/classicsreadbooklist")
    },
    toVueData(){
      this.$router.push("/vuedata")
    }
  }
}
</script>

<!--<style>-->
  <style lang="less" scoped>
#home-d {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
button{
  display: block;
  margin: 20px;
}
</style>

<template>
  <div>
    <h2>我是cpn组件的标题</h2>
    <p>我是cpn组件的内容, 哈哈哈</p>
    <h2>{{name}}</h2>
  </div>
</template>

<script>
  export default {
    name: "Cpn",
    data() {
      return {
        name: 'CPN组件的name'
      }
    }
  }
</script>

<style scoped>

</style>
//想定义一个组件很简单，就是建一个.vue文件，可以在别的.vue里引入他，最后形成一个组件树
<template>

    <!-- attr回顾步骤3:son通过$attrs只传过来name，因为grandson有name属性，所以name被grandson接收-->
  <div class="gson-root">
    <button @click="send100">发送事件100</button>
    <button @click="send200">发送事件200</button>
  </div>
</template>

<script>

export default {
  name: 'grandson',
  props: {
    name: {
      type: String,
      default: '默认名字'
    }
  },
  data() {
    return {

    }
  },
  created(){
    console.log("孙子监听attrs",this.$attrs)
  },
  methods:{
    send100(){
      this.$emit('send100',100)
    },
    send200(){
      this.$emit('send200',200)
    }
  }
}
</script>

<style lang="less" scoped>
.gson-root{
  width: 100px;
  height: 100px;
  background-color: green;
}
</style>



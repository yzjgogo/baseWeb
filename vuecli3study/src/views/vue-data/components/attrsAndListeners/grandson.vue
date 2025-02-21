<template>
  <div class="gson-root">
    党费的
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



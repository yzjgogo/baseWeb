<template>
  <div class="test-root">
    {{name}}:{{age}}
  </div>
</template>

<script>

export default {
  name: 'TestWin',
  props: {
    age: {
      type: Number,
      default: 100
    },
    name: {
      type: String,
      default: '默认名字'
    }
  },
  data() {
    return {

    }
  },
  methods:{
    
  }
}
</script>

<style lang="less" scoped>
.test-root{
  width: 100%;
  height: 100%;
  background-color: antiquewhite;
}
</style>



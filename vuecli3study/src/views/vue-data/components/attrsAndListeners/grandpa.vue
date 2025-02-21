<template>
  <div class="gp-root">
    <son :name="'刘德华'" age="98"></son>
  </div>
</template>

<script>

//导入son组件
import son from './son.vue'
export default {
  name: 'grandpa',
  components:{
    son
  },
  // props: {
  //   age: {
  //     type: Number,
  //     default: 100
  //   },
  //   name: {
  //     type: String,
  //     default: '默认名字'
  //   }
  // },
  data() {
    return {

    }
  },
  methods:{
    
  }
}
</script>

<style lang="less" scoped>
.gp-root{
  width: 100%;
  height: 100%;
  background-color: pink;
}
</style>



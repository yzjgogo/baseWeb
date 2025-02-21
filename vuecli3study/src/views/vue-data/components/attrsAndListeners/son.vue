<template>
  <div class="son-root">
    <grandson v-bind="$attrs"></grandson>
  </div>
</template>

<script>
//导入grandson组件
import grandson from './grandson.vue'
export default {

  name: 'son',
  components:{
    grandson
  },
  props: {
    age: {
      type: [Number,String],
      default: 100
    },
    // name: {
    //   type: String,
    //   default: '默认名字'
    // }
  },
  data() {
    return {

    }
  },
  created(){
    console.log("儿子监听attrs",this.$attrs)
  },
  methods:{

  }
}
</script>

<style lang="less" scoped>
.son-root {
  width: 500px;
  height: 500px;
  background-color: antiquewhite;
}
</style>

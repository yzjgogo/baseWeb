<template>
  <div class="son-root">
    
    <!-- attr回顾步骤2:grandpa穿过来的name和age中，因为son有age属性，所以age被接收，因此son的this.$attrs中只有name，然后通过v-bind="$attrs"向下一级grandson传递-->
    <grandson v-bind="$attrs" v-on="$listeners"></grandson>
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

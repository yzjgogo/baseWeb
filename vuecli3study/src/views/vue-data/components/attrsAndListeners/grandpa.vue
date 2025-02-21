<template>
  <div class="gp-root">
    <!-- attr回顾步骤1:向下一级sone传入name和age，不管下一级son有没有name和age，有的话下一级就接收了；没有的话，下一级可以通过v-bind="$attrs"向下下级传递 -->
    <son :name="'刘德华'" age="98" @send100="send100" @send200="send200"></son>
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
    send100(){
      console.log("爷爷接收到100")
    },
    send200(){
      console.log("爷爷接收到200")
    }
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



<template>
  <div>
      <div style="background-color: yellow">自定义组件如何像input那样使用v-model呢：<br/>
      只需记住：一个组件上的 v-model 默认会利用名为 value 的 prop 和名为input 的事件。</div>

<!--      这里ComponentForVModel我们使用了v-model，因为在其内部定义了属性value，所以这个v-model就会和value联动-->
      <ComponentForVModel v-model="mData"></ComponentForVModel>
  </div>
</template>

<script>
  import ComponentForVModel from "@/components/ComponentForVModel";
export default {
  name: 'MyVModel',
  components: {ComponentForVModel},
  data() {
    return {
        mData :"我是外部的数据"
    }
  }
}
</script>

<style lang="less" scoped>

</style>



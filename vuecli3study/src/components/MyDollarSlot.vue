<template>
  <div>
    <template v-if="$slots.head">
      <slot name="head"><div>顶部</div></slot>
    </template>
    <div v-else>外部没有传过来顶部，用这个默认的</div>
    <slot name="content"><div>内容区域</div></slot>
    <slot name="foot"><div>底部</div></slot>
    <slot><span>-无名-</span></slot>
  </div>
</template>

<script>

export default {
  name: 'MyDollarSlot',
  data() {
    return {

    }
  },
  /**
    this.$slots可以查看，外部传过来哪些slot，因此也可以用于判断某个name的slot是否传过来,例如上面的v-if="$slots.head"
   * 
   */
  created(){
    console.log("看看dollar1")
    console.log(this.$slots)
    console.log(this.$slots.head)
    console.log(this.$slots.content)
    console.log(this.$slots.foot)
    console.log("看看dollar2")
  }
}
</script>

<style lang="less" scoped>

</style>



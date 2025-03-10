<template>
  <div>
    <slot name="left"><span>左边</span></slot>
    <slot name="center"><span>中间</span></slot>
    <slot name="right"><span>右边</span></slot>
    <slot><span>无名</span></slot>
  </div>
</template>

<script>

export default {
  name: 'MyNameSlot',
  data() {
    return {

    }
  }
}
</script>

<style lang="less" scoped>

</style>



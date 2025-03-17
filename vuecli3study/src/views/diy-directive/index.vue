<template>
  <div>
    <div v-yellowBg>
      自定义全局yellowBg指令，使用时默认给元素添加backgroundColor为yellow
    </div>
    <div v-pinkBg>
      自定义局部yellowBg指令，在当前组件使用时，默认给元素添加backgroundColor为pink
    </div>
  </div>
</template>

<script>
export default {
  name: 'DiyDirective',
  data() {
    return {}
  },

  created() {},
  directives: {
    pinkBg: {
      bind(el, binding, vnode) {
        el.style.backgroundColor = 'pink'
      }
    }
  }
}
</script>

<style lang="less" scoped></style>

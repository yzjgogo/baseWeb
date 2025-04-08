<template>
  <div id="app" 
  :style="`--TopPadding: ${TopPadding}px; --BottomPadding: ${BottomPadding}px;`">
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      TopPadding: 40,
      BottomPadding: 80,
    }
  },
}
</script>

<style lang="less">
/*
  公共样式使用步骤-2：
  在App.vue中导入公共样式文件
  */
// 公共样式,前面的~不能少
@import '~@/assets/style/common.less';
</style>

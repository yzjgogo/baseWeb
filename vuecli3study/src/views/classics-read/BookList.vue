<template>
  <div>
    <div class="yzj">我是书本列表-</div>
    <div style="background-color: red;width: 375px;height: 75px">哈哈哈哈</div>
  </div>
</template>

<script>

export default {
  name: 'BookList',
  data() {
    return {
      bookList: [] // 名著的书本列表
    }
  }
}
</script>

<style lang="less" scoped>
  .yzj{
    background-color: greenyellow;
    width: 375px;
    height: 75px;
  }
</style>

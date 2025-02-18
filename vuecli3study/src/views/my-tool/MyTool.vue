<template>
  <div class="tool-root">
    <div class="tool-button" @click="showToast()">
      $xxxx的实现，这里以$utils举例，搜索：$utils实现步骤1234
    </div>

    <div class="tool-button" @click="addVueComponent()">
      通过js代码加载vue组件显示到body上
    </div>

    <div class="tool-button">
      van-circle的rate和speed的理解,参考：vancircle.md
    </div>
    <VCircle></VCircle>
  </div>
</template>

<script>
//导入VCircle
import VCircle from './components/VCircle.vue'
import { closeSecondWindow, showSecondWindow } from './index.js'
export default {
  name: 'MyTool',
  components: {
    VCircle
  },
  data() {
    return {}
  },
  methods: {
    showToast() {
      // $utils实现步骤4：使用
      const result = this.$utils.toUpper('abCdE')
      console.log('吐司---:' + result)
    },
    addVueComponent() {
      showSecondWindow()
    }
  }
}
</script>

<style lang="less" scoped>
.tool-root {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .tool-button {
    width: fit-content;
    height: fit-content;
    background-color: skyblue;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    margin: 10px;
  }
}
</style>

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

    <div class="tool-button" @click="toVideoPlay()">
      旋转整个布局90度，模拟横屏
    </div>

    <div class="tool-button">
      VScode中配置ESlint+Prettier详细步骤:https://blog.csdn.net/hjl_and_djj/article/details/144674178 <br/>
      (在无影新华移动端项目的基础上看git@192.168.3.55:shanbanyun/intelligent-book.git)注意：1,：当你发现打开某个文件夹(项目，可能是包含多个项目的文件)后,Shift+Alt+F格式化代码不生效时把.prettierrc文件放入目录即可；2：这个文章看'2 Eslint与Prettier设置'即可；3:intelligent-book项目并没有npm install prettier只是安装了prettier插件然后给vscode做响应的配置即可。<br/>
    </div>

    <div class="tool-button">
      前端官网：https://developer.mozilla.org/zh-CN/docs/Web (进去后，左侧罗列了各种技术入口)<br/>
      前端CSS官网：https://developer.mozilla.org/zh-CN/docs/Web/CSS<br/>
      前端Html官网：https://developer.mozilla.org/zh-CN/docs/Web/HTML<br/>
      前端JavaScript官网：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript<br/>
      等等等（SVG,Web API，Web 媒体技术，Web 安全，Web 性能，WebDriver，XML，事件参考
）<br/>
    </div>
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
    },
    toVideoPlay(){
      this.$router.push('/videoPlay')
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

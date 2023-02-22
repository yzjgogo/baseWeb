<template>
  <div>
    <el-button>按钮1</el-button>

    <div class="content">
      <el-button>按钮2</el-button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ScopedDeep',
  data() {
    return {
      bookList: []
    }
  }
}
</script>
<!--
在 vue 项目的开发过程，使用了 ElementUI 组件且样式 style 使用了 scoped 属性，当想要修改组件样式，发现直接修改不了，需去掉 scoped 属性
或者使用深度选择器才能修改成功。去掉scoped的话又会影响全局样式，针对这种情况，可以使用深度作用选择器（即样式穿透）

参考：
scoped原理.docx
el-button-F12.png
-->


<!--第一-->
<!--如果使用原生的css样式(lang="css"),需要使用 >>> 深度选择器来修改子组件的样式-->
<!--<style lang="css" scoped>-->
<!--  .el-button >>> span{-->
<!--    color: red;-->
<!--  }-->
<!--</style>-->


<!--第二-->
<!--如果使用less语言，则可以使用/deep/ 或 ::v-deep-->
<style lang="less" scoped>
  /*使用/deep/*/

  /*/deep/.el-button{*/
  /*  span{*/
  /*    color: #2eaae0;*/
  /*  }*/
  /*}*/


  /*使用::v-deep方式1*/

  /*::v-deep .el-button{*/
  /*  span{*/
  /*    color: #222222;*/
  /*  }*/
  /*}*/


  /*使用::v-deep方式2*/

  /*.el-button::v-deep{*/
  /*  span{*/
  /*    color: yellow;*/
  /*  }*/
  /*}*/


  /*使用::v-deep方式3：我们最好用一个容器包裹，让这个::v-deep限定只在我们当前这个容器里找对应的元素，这样范围最小，影响最小，只作用到我们想要作用的范围内*/
  .content{
     /*.el-button::v-deep{*/
    ::v-deep.el-button{
      span{
        color: #6CD559;
      }
    }
  }
</style>



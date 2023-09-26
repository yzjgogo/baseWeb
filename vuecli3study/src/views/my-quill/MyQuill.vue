<template>
  <div>
<!--
一、quill通过代码实现给选中的一段文字设置超链接：
1，首先用鼠标选中一段要设置超链接的文本
2，然后 this.quill.format('link',this.linkUrl)
第一个参数就传'link';
第二个参数传连接地址，例如:www.baidu.com

二、quill通过代码实现将光标所在行设置为有序列表 或 无需列表
1，将光标移动到目标行；
2，this.quill.formatLine(quill.getSelection().index, 'list', type);
第一个参数就传这样；
第二个参数就传'list'；
第三个参数type的值为ordered 或 bullet；其中ordered为有序列表，bullet为无序列表；

三、获取光标选中的区域的上下左右的位置
1，用鼠标选中一段区域；
2，this.quill.getBounds(this.quill.getSelection()) 打印出来看看位置信息

参考：校本云 E:\web\XBYCopyPic\teacher\src\views\pages\courseDesign\components\EditArea\components\toolbar.vue
     校本云 -> 校务 -> 活动场所管理 -> 创建活动场所 -> 顶部有富文本操作栏

-->
  看看注释
  </div>
</template>

<script>

export default {
  name: 'MyQuill',
  data() {
    return {

    }
  },
  methods:{

  }
}
</script>

<style lang="less" scoped>

</style>



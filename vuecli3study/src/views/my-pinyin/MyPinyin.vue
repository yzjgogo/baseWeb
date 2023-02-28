<template>
  <div>
    <div @click="getPinyin" style="width: fit-content;height: 100px;background-color: #f8b38d">点击根据汉字获取拼音</div>
    <div @click="dateFormat" style="width: fit-content;height: 50px;background-color: #6CD559">点击格式化时间</div>
  </div>
</template>

<script>
  // import pinyin from "js-pinyin";
  const pinyin = require('js-pinyin')  //"js-pinyin": "^0.1.9"

  // const moment = require('moment')
  import moment from "moment";  //"moment": "^2.24.0"
  // 1676276583
export default {
  name: 'MySlot',
  data() {
    return {

    }
  },
  methods:{
    /**
     * https://www.npmjs.com/package/js-pinyin
     */
    getPinyin(){
      // checkPolyphone：是否检测多音字，好像没啥用，只识别多音字中的一个音,尽量为false，如果为true，非多音字的会报错
      // charCase：输出拼音的大小写模式，0-首字母大写；1-全小写；2-全大写
      pinyin.setOptions({checkPolyphone: false, charCase: 0});

      console.log(pinyin.getFullChars('管理员'));//GuanLiYuan
      console.log(pinyin.getCamelChars('管理员'));//GLY
      console.log(pinyin.getCamelChars('1234'));//1234
      console.log(pinyin.getCamelChars('english'));//1234
    },

    /**
     * https://blog.csdn.net/mouday/article/details/102745043
     * http://momentjs.cn/
     * https://momentjs.com/
     */
    dateFormat() {
      let timeStampSeconds = 1676276583
      console.log("格式化时间：",moment(timeStampSeconds * 1000).format('M月D日 HH:mm'))
    }
  }
}
</script>

<style lang="less" scoped>

</style>



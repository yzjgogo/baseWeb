<template>
  <div>
    <div @click="getPinyin" style="width: fit-content;height: 100px;background-color: #f8b38d">点击根据汉字获取拼音</div>
  </div>
</template>

<script>
  import pinyin from "js-pinyin";
export default {
  name: 'MySlot',
  data() {
    return {

    }
  },
  methods:{
    getPinyin(){
      // checkPolyphone：是否检测多音字，好像没啥用，只识别多音字中的一个音,尽量为false，如果为true，非多音字的会报错
      // charCase：输出拼音的大小写模式，0-首字母大写；1-全小写；2-全大写
      pinyin.setOptions({checkPolyphone: false, charCase: 0});

      console.log(pinyin.getFullChars('管理员'));//GuanLiYuan
      console.log(pinyin.getCamelChars('管理员'));//GLY
      console.log(pinyin.getCamelChars('1234'));//1234
      console.log(pinyin.getCamelChars('english'));//1234
    }
  }
}
</script>

<style lang="less" scoped>

</style>



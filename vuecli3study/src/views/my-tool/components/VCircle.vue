<template>
  <div class="float-box">
                <!-- 把v-model查分成value和input事件是为了，让进度条和android小学学习一致，白色进度环顺时针逐渐变短 -->
    <van-circle
                  :color="'white'"
                  :layer-color="'gray'"
                  :clockwise="false"
                  :value="currentRate"
                  @input="getCurRate"
                  :rate="rate"
                  :speed="speed"
                  :text="processDesc"
                />
  </div>
</template>

<script>

export default {
  name: 'VCircle',
  props: {
    
  },
  data() {
    return {
      currentRate: 0,
      speed: 1, //1秒钟走多少百分比,这里1秒走1%
      rate: 100 //rate是进度条的百分比,走完都是100
    }
  },
  computed: {
    processDesc() {
      return `${this.currentRate}`
    }
  },
  //补全生命周期函数
  created() {
    
  },
  mounted() {
    
  },
  destroyed() {
    
  },

  methods:{
    
    getCurRate(val) {
      //val从0到100逐渐变大
      //currentRate从100到0逐渐变小
      this.currentRate = 100 - val
    }
  }

}
</script>

<style lang="less" scoped>
.float-box{
  width: fit-content;
  height: fit-content;
  background-color: green;
}
</style>



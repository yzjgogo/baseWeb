<template>
  <div class="float-box">
    <div>我是FloatWin</div>
    <button @click="sendEmit">我发送事件，让js中我的创建出可以接收事件</button>
  </div>
</template>

<script>

export default {
  name: 'FloatWin',
  props: {
    from: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {

    }
  },
  //补全生命周期函数
  created() {
    console.log('执行 FloatWin created')
  },
  mounted() {
    console.log('执行 FloatWin mounted')
  },
  destroyed() {
    //在js中调用vm.$destroy()后，会触发destroyed()函数
    console.log('执行 FloatWin destroyed')
  },

  methods:{
    sendEmit(){
      this.$emit('handleClose')
    }
  }

}
</script>

<style lang="less" scoped>
.float-box{
  width: 300px;
  height: 300px;
  background-color: rgb(167, 235, 135);
  //使用定义才能把这个vue组件显示到屏幕范围区域，否则就是跑到屏幕下面了
  position: fixed;
  //居中
  top: 50%;
  left: 50%;
  margin-top: -150px;
  margin-left: -150px;
}
</style>



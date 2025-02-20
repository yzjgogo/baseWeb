<template>
<!-- 注意：当你在pc端演示这个案例，时默PC浏览器看度大于高度，即默认是横屏，因此点击执行fullScreenPlay不会旋转，需要F12切换到手机模式来演示 -->
  <div class="video-box-root">
    <div class="video-box" :style="styles" :class="{ 'box-rotate': rotate }">
      <div class="main-contain" @click="fullScreenPlay">假装我是内容</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'video-play',
  data() {
    return {
      rotate: false,
      isNeedRotate: false,
      // 旋转页面设置样式
      styles: {
        width: '100%',
        height: '100%',
        left: 0,
        top: 0
      },
    }
  },
  created() {},
  methods: {
    // 全屏播放
    fullScreenPlay() {
      console.log('全屏播放===')
      this.isNeedRotate = true
      this.rotatePage()
    },
    // 旋转页面
    rotatePage() {
      const body = document.getElementsByTagName('body')[0]
      let width = body.clientWidth
      let height = body.clientHeight
      if (!this.isNeedRotate) {
        this.rotate = false
        this.styles.width = width + 'px'
        this.styles.height = height + 'px'
        this.styles.left = 0
        this.styles.top = 0
        return
      }
      if (width > height) {
        // 说明已经是横屏
        this.styles.width = width + 'px'
        this.styles.height = height + 'px'
        this.styles.left = 0
        this.styles.top = 0
        this.rotate = false
      } else {
        this.styles.width = height + 'px'
        this.styles.height = width + 'px'
        this.styles.left = (width - height) / 2 + 'px'
        this.styles.top = (height - width) / 2 + 'px'
        this.rotate = true
      }
    }
  }
}
</script>

<style lang="less">
.video-box-root {
  width: 100%;
  height: 100%;
  position: relative;

  .box-rotate {
    transform: rotate(90deg);
    transform-style: preserve-3d;
  }
  .video-box {
    position: absolute;
    transform-origin: center;
    z-index: 0;
    .main-contain {
      width: 100%;
      height: 100%;
      background-color: yellow;
      text-align: center;
      line-height: 100%;
      font-size: 45px;
    }
  }
}
</style>

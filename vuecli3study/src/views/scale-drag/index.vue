<template>
  <div class="root-box">
    <div class="left">
      我模拟菜单栏
    </div>
<!--    关键点1：scale-root是被放大的元素scale-self的父容器，scale-self放大后可以在该范围内拖拽-->
    <div class="scale-root">
<!--      关键点2：scale-self是实际被放大的元素，虽然可能需求上只是需要我们放大book-page，但是我们给book-page用scale-self包裹-->
      <div class="scale-self"
           @mousedown="dragDown"
           :style="{
           'transform': `translate(${currentDragMove.x + 'px, ' + currentDragMove.y + 'px'}) scale(${currentZoom})`,
           'cursor': currentZoom === 1 ? 'default' : 'grab'
         }">
<!--        关键点3：我们只是放大了scale-self，因此book-pag也跟着放大了，因为book-pag是scale-self的一部分-->
        <div class="book-page" :style="{
              backgroundSize: `contain`,
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
              backgroundImage: 'url(' + imgURL + ')'}">
<!--          关键点4：元素被放大后，并不会影响元素内部的交互-->
          <div class="diy-button" @click="doClickTest()">放大也可以点我</div>
        </div>
      </div>
      <div class="scale-buttons">
        <img src="./icon/da.png" class="scale-icon" @click="pageZoom(0.1)"/>
        <img src="./icon/xiao.png" class="scale-icon" @click="pageZoom(-0.1)"/>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'scaleDrag',
  data() {
    return {
      currentZoom: 1, // 当前缩放比例
      currentDragMove: {
        x: 0,
        y: 0
      }, // 当前拖拽移动距离
      dragging: null, // 拖拽坐标
      imgURL:'https://zhljy.cdn.bcebos.com/CACDAHDB/2e49636b42cc4447bcf4c2db7de979d3.jpg'
    }
  },
  methods:{
    // 鼠标拖拽事件
    dragDown(e) {
      if (this.currentZoom <= 1) {
        return
      }
      e.preventDefault()
      this.dragging = {
        x: e.clientX,
        y: e.clientY
      }
      document.addEventListener('mousemove', this.dragMove)
      document.addEventListener('mouseup', this.dragUp)
    },
    // 鼠标拖拽事件
    dragMove(e) {
      if (this.dragging && e.buttons === 1) { // 鼠标左键按下
        e.preventDefault()
        this.currentDragMove.x += e.clientX - this.dragging.x
        this.currentDragMove.y += e.clientY - this.dragging.y
        this.dragging = {
          x: e.clientX,
          y: e.clientY
        }
      }
    },
    // 鼠标抬起事件
    dragUp(e) {
      if (this.dragging) {
        this.dragging = null
        document.removeEventListener('mousemove', this.dragMove)
        document.removeEventListener('mouseup', this.dragUp)
      }
    },
    // 页面缩放
    pageZoom(value, e = null) {
      let zoom = this.currentZoom + value
      if (zoom >= 3.999) {
        zoom = 4
      }
      if (zoom <= 1.001) {
        zoom = 1
      }
      if (this.currentZoom !== zoom) {
        if (zoom === 1) {
          this.currentDragMove.x = 0
          this.currentDragMove.y = 0
        } else if (e) {
          const contentRect = this.$refs.flippingContent.getBoundingClientRect()
          // 获取鼠标相对于flipping中心的位置
          const x = e.clientX - (contentRect.left + contentRect.width / 2)
          const y = e.clientY - (contentRect.top + contentRect.height / 2)
          // 缩放后，保持鼠标相对于flipping中心的位置不变
          this.currentDragMove.x -= x * (zoom / this.currentZoom - 1)
          this.currentDragMove.y -= y *(zoom / this.currentZoom - 1)
        }
        this.currentZoom = zoom
      }
      if(this.currentZoom === 1){
        this.$store.commit('SWIPE_TOUCH_ABLE', true)
      }else{
        this.$store.commit('SWIPE_TOUCH_ABLE', false)
      }
    },
    doClickTest(){
      console.log("点击了哈哈哈")
    }
  }
}
</script>

<style lang="less" scoped>
.root-box{
  width: 100%;
  height: 100%;
  display: flex;
  .left{
    width: 250px;
    height: 100%;
    background-color: pink;
  }
  .scale-root{
    flex: 1;
    height: 100%;
    position: relative;
    .scale-self{
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      .book-page{
        position: absolute;
        left: 50%;
        transform: translate(-50%,0);
        height: calc(100% - 100px);;
        margin-top: 50px;
        margin-bottom: 50px;
        aspect-ratio:0.7;
        .diy-button{
          width: 150px;
          height: 50px;
          text-align: center;
          line-height: 50px;
          margin-left: 200px;
          margin-top: 350px;
          background-color: #2eaae0;
          color: red;
        }
      }
    }
    .scale-buttons{
      display: flex;
      flex-direction: column;
      width: fit-content;
      height: fit-content;
      position: absolute;
      right: 50px;
      bottom: 50px;
      .scale-icon{
        width: 60px;
        height: 60px;
        cursor: pointer;
      }
    }
  }
}
</style>



<script>
// https://vant-ui.github.io/vant/v2/#/zh-CN/slider#yin-ru 
//这个导入的Slider就是我们在布局中引用的van-slider，我们现在要改造它
import { Slider } from 'vant' //鼠标左键点击vant进入，看到导入的是export class Slider extends VanComponent {}，路径是vuecli3study\node_modules\vant\types\index.d.ts
const _event = require('vant/lib/utils/dom/event')

export default {
  //指定当前Slider.vue组件继承Slider from 'vant'
  extends: Slider,
  props: {
    //子组件自己特有的属性，当期那场景是，是否旋转到横屏
    rotateToLandscape: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {}
  },
  methods: {
    //进入node_modules\vant\lib\slider\index.js就是van-slider的源码(其实node_modules\vant\es\slider\index.js还有一份源码，两者的区别是什么呢？)
    //我们就可以根据源码进行改造了
    onTouchMove: function onTouchMove(event) {
      if (this.disabled) {
        return
      }

      if (this.dragStatus === 'start') {
        this.$emit('drag-start')
      }

      ;(0, _event.preventDefault)(event, true)
      this.touchMove(event)
      this.dragStatus = 'draging'
      var rect = this.$el.getBoundingClientRect()
      var delta = this.vertical ? this.deltaY : this.deltaX
      var total = this.vertical ? rect.height : rect.width

      if (this.rotateToLandscape) {
        delta = this.deltaY
        total = rect.height
      }

      var diff = (delta / total) * this.scope

      if (this.range) {
        this.currentValue[this.index] = this.startValue[this.index] + diff
      } else {
        this.currentValue = this.startValue + diff
      }

      this.updateValue(this.currentValue)
    },
    onClick: function onClick(event) {
      event.stopPropagation()
      if (this.disabled) return
      var rect = this.$el.getBoundingClientRect()
      var delta = this.vertical
        ? event.clientY - rect.top
        : event.clientX - rect.left
      var total = this.vertical ? rect.height : rect.width
      if (this.rotateToLandscape) {
        delta = event.clientY - rect.top
        total = rect.height
      }
      var value = +this.min + (delta / total) * this.scope

      if (this.range) {
        const _this$value = this.value

        let left = _this$value[0]
        let right = _this$value[1]
        const middle = (left + right) / 2

        if (value <= middle) {
          left = value
        } else {
          right = value
        }

        value = [left, right]
      }

      this.startValue = this.value
      this.updateValue(value, true)
    }
  }
}
</script>

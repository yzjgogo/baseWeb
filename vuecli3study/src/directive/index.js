
import './autoZIndex'
import './yellowBg'
import './dirAll'
import './dongTaiArg'
import './simpleDir'
import './funDir'


import mobileMousedown from './mobileMousedown'
import mobileMousemove from './mobileMousemove'
import mobileMouseup from './mobileMouseup'

// 注册全局指令
Vue.directive('mobile-mousedown', mobileMousedown)
Vue.directive('mobile-mousemove', mobileMousemove)
Vue.directive('mobile-mouseup', mobileMouseup)

export default {
  mobileMousedown,
  mobileMousemove,
  mobileMouseup
}

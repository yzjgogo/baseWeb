import Second from './components/FloatWin.vue'
import store from '@/store'
import router from '@/router'
import Vue from 'vue'
//你在任何位置，例如任何vue或任何js文件中引用这个index.js都能访问到同一个secondVM
//就好像这个index.js就是一个对象实例一样，所以你可以在任何vue或任何js文件中调用closeSecondWindow()关闭之前添加的secondVM
let secondVM = null
export const showSecondWindow = function (from = 0) {
  //关闭上一个,如果有
  closeSecondWindow()
  //开启新的
  secondVM = addSecondWindow(from)
}
export const closeSecondWindow = () => {
  if (secondVM) {
    document.body.removeChild(secondVM.$el)
    secondVM.$destroy()
    secondVM = null
  }
}

/**
 * 最好把store和router都传进去，不然如果你加入的组件要用到会有各种错误，
 * Second中定义了from实行等，可以通过propsData传入，
 * @param {*} from
 * @returns
 */
function addSecondWindow(from = 0) {
  const secondComponent = Vue.extend(Second)
  let vm = new secondComponent({
    store,
    router,
    propsData: { from: from }
  })
  vm.$on('handleClose', () => {
    console.log('收到事件handleClose')
    document.body.removeChild(vm.$el)//如果不removeChild，即使调用了$destroy()，在浏览器上仍然会显示，因为，你没有移出
    vm.$destroy() //会触发组件的destroyed回调函数
  })
  vm.$mount()
  // vm.$props.from = from 这种方式传入属性不好，好像不是在Second初始化的时候传入的，会有问题。

  //appendChild后才能看到，这样加入的body上其实是和<div id="app"></div>同级的
  document.body.appendChild(vm.$el)
  return vm
}

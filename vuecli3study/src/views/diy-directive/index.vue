<template>
  <div>
    <!-- 参考：https://v2.cn.vuejs.org/v2/guide/custom-directive.html#ad -->
    <div v-yellowBg class="line">
      自定义全局yellowBg指令，使用时默认给元素添加backgroundColor为yellow
    </div>
    <div v-pinkBg class="line">
      自定义局部yellowBg指令，在当前组件使用时，默认给元素添加backgroundColor为pink
    </div>
    <div v-dirAll:foo.a.b.c="message" class="line">
      所有的钩子函数bind，inserted，update，componentUpdated，unbind都有(el,
      binding,
      vnode)参数，进入v-dirAll看一下，参数说明参考官网：https://v2.cn.vuejs.org/v2/guide/custom-directive.html#ad
      <br>其中arg是传给指令的参数，可选。例如 v-my-directive:foo 时arg就是
      "foo"，下面会讲到动态指令参数；
      <br>modifiers是一个包含修饰符的对象，例如 v-my-directive.foo.bar 中，修饰符对象为
      { foo: true, bar: true }，例如单击事件的.stop和.prevent等就是修饰符；
      <br>value：指令的绑定值，也可以是一个函数，看下面的举例
    </div>
    <div v-dongTaiArg:[direction]="200" class="line">传给指令的参数可以是动态的,通过中括号包裹</div>
    <div v-funDir="dosomething" class="line">自定义指令绑定的value是函数时，看v-funDir</div>
    <div v-simpleDir class="line">Vue注册全局组件时，可以直接只传入一个函数，而不用传入一个指令对象，去看v-simpleDir</div>
    <div v-autoZIndex class="line">案例：通过自定义指令给绑定的元素设置z-index，这个z-index保证在当前body中最大</div>
    <div class="line">案例，跨平台鼠标按下、移动、抬起事件，自动处理并统一坐标信息，支持 .stop 和 .prevent 修饰符；看mobileMousedown.js，mobileMousemove.js，mobileMouseup.js</div>
  </div>
</template>

<script>
export default {
  name: 'DiyDirective',
  data() {
    return {
      message: '你好',
      direction:'left'
    }
  },

  created() {},
  //可以在directives中给当前组件注册局部自定义指令
  directives: {
    //在当前组件注册局部的v-pinkBg指令
    // 当被绑定的元素插入到 DOM 中时执行inserted,el是被绑定的元素，pinkBg是一个对象（指令定义对象）
    pinkBg: {
      inserted(el) {
        el.style.backgroundColor = 'pink'
      }
    }
  },
  methods: {
    //自定义指令绑定的value是函数时
    dosomething(p) {
      console.log('自定义指令绑定的value是函数时-执行函数',p)
    }
  }
}
</script>

<style lang="less" scoped>
.line{
  margin-top: 20px;
}
</style>

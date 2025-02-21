<template>
  <div>
    <div>
      <button @click="logData()">输出$data 和 $options</button>

      <div class="line"></div>

      <div>
        $forceUpdate()：总之你发现页面实在是没响应式刷新，就用它，保证能刷新，比如你修改对象的属性或数值的元素等等；<br />
        https://cn.vuejs.org/api/component-instance.html#emit
      </div>

      <div class="line"></div>

      <div>
        向组件传入单个属性时，可以用v-bind:name或:name；向组件传入多个属性时，可以直接用v-bind传入一个对象，这个对象的每一个属性都是目标组件的属性或部分属性；例如这里是{
        name:"吴孟达", age:50
        }。参考：1_vue语法基础\LearnVuejs04\03-动态绑定属性
      </div>
      <TestWin v-bind:name="'张学友'"></TestWin>
      <TestWin v-bind:age="18"></TestWin>
      <TestWin v-bind="testObj"></TestWin>

      <div class="line"></div>
      <div>{{`子组件继承父组件：可用于修改父组件的行为满足自己的需求，一般当遇到第三方组件不足以满足自己的需求时，可以考虑这种方案。实际项目举例：无影(新华)移动版intelligent-book项目中，视频播放时全屏的方案是点击让整个布局旋转90度，但旋转后van-slider点击进度条某个区域后播放进度定位错乱了，因此可以考虑继承van-slider使其适配旋转的情况：(src\views\function\video-play\components\video-control.vue -> Slider -> src\components\wrong-question-notebook\CustomVideo\components\Slider.vue) -> 我已经拷贝到vuecli3study\src\views\vue-data\components\Slider.vue进去看详情`}}</div>

      

    <div class="tool-button" @click="toAttrsAndListeners()">
      组件的attrs和listeners的使用；<br/>
      attrs：父组件传递给子组件的所有的非props属性(在子组件的props中找不到，也不包括class和style这种)都可以在子组件的this.$attrs中访问到，然后你在子组件中通过v-bind="$attrs"又可以向后代传递，直到遇到某个后代在props中定义了同名的attr就算传递到这个后代了，这对跨层级数据传递非常有用，某种程度上有android开发中单例的功能（回顾搜索:attr回顾步骤）；<br />
      listeners：孙子组件(任何层级的后代组件)想通过this.$emit()发送事件到爷爷或任何祖先组件时，可以在两端组件中间的每一层组件中使用v-on="$listeners"，这样就能做到事件层层向上传递到目标先辈组件。参考grandson发送事件，son里面用v-on="$listeners"修饰grandson，然后grandpa就能收到事件。
    </div>

    </div>
  </div>
</template>

<script>
//导入TestWin组件
import TestWin from './components/TestWin'
export default {
  name: 'VueData',
  components: { TestWin },
  data() {
    return {
      bookList: ['大话西游'], // 名著的书本列表
      name: '周星驰',
      testObj: {
        name: '吴孟达',
        age: 50
      }
    }
  },
  methods: {
    logData() {
      // 参考：https://v2.cn.vuejs.org/v2/api/#data
      console.log('输出$data')
      console.log(this.$data) //一次性输出所有的data，这里包括bookList和name
      console.log(this.$data.bookList) //等价于this.bookList,即$data可省略
      console.log(this.$data.name) //等价于this.name,即$data可省略

      //参考：https://v2.cn.vuejs.org/v2/api/#vm-options
      //$options是一个对象，包含了Vue组件实例下的name,data,methods等等所有属性和方法，也可以包含自定义的属性，例如这里customOption就是自定义的
      console.log(this.$options.data())
      console.log(this.$options.methods)
      console.log(this.$options.name)
      console.log(this.$options.customOption)
    },
    toAttrsAndListeners(){
      this.$router.push('/grandpa')
    }
  },
  customOption: 'foo' //自定义一个属性
}
</script>

<style lang="less" scoped>
.line {
  height: 1px;
  width: 800px;
  background-color: red;
  margin: 20px;
}

  .tool-button {
    width: fit-content;
    height: fit-content;
    background-color: skyblue;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    margin: 10px;
  }
</style>

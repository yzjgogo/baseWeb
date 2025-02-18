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
</style>

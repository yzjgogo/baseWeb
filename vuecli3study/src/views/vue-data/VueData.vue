<template>
  <div>
    <div>
      <button @click="logData()">输出$data 和 $options</button>
      <div style="height: 1px;width: 800px;background-color: #f8b38d;margin: 20px"></div>
      <div>
        $forceUpdate()：总之你发现页面实在是没响应式刷新，就用它，保证能刷新，比如你修改对象的属性或数值的元素等等；<br>
        https://cn.vuejs.org/api/component-instance.html#emit
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'VueData',
  data() {
    return {
      bookList: ["大话西游"], // 名著的书本列表
      name:"周星驰"
    }
  },
  methods:{
    logData(){
      // 参考：https://v2.cn.vuejs.org/v2/api/#data
      console.log("输出$data")
      console.log(this.$data)//一次性输出所有的data，这里包括bookList和name
      console.log(this.$data.bookList)//等价于this.bookList,即$data可省略
      console.log(this.$data.name)//等价于this.name,即$data可省略

      //参考：https://v2.cn.vuejs.org/v2/api/#vm-options
      //$options是一个对象，包含了Vue组件实例下的name,data,methods等等所有属性和方法，也可以包含自定义的属性，例如这里customOption就是自定义的
      console.log(this.$options.data())
      console.log(this.$options.methods)
      console.log(this.$options.name)
      console.log(this.$options.customOption)
    }
  },
  customOption: 'foo'//自定义一个属性
}
</script>

<style lang="less" scoped>

</style>

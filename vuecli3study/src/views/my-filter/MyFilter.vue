<template>
  <div>
    <div>
<!--
filter:
可以在当前组件内定义:例如当前文件的inComponentOneParam(param) 和 inComponentTwoParams(param1,param2)
也可以全局注册filter：例如src\libs\filters.js 通过main.js里进行全局的注册，搜索：全局注册filter_x，按顺序查看

大于一个参数的filter的使用：
第一个参数就是‘|’前面的值，第二三个参数，自己传，按如下使用方法传
-->
    </div>
    <div>
      {{'一个参数' | inComponentOneParam}}
    </div>
    <div>
      {{'第一个参数' | inComponentTwoParams('第二个参数')}}
    </div>
<!--    全局注册filter_4：使用全局注册的filter-->
    <div>
      {{'一个参数' | doFilterForOneParam}}
    </div>
    <div>
      {{'第一个参数' | doFilterForTwoParams('第二个参数')}}
    </div>
  </div>
</template>

<script>

export default {
  name: 'MyFilter',
  data() {
    return {

    }
  },
  methods:{

  },
  filters:{
    inComponentOneParam(param){
      return '组件内一个参数的filter-'+param
    },
    inComponentTwoParams(param1,param2){
      return '组件内两个参数的filter-'+param1+'-'+param2
    },
  }
}
</script>

<style lang="less" scoped>

</style>



<template>
  <div>
<!--    anyStrProperty随便定义，外部组件要和这个一样-->
    <slot :anyStrProperty="dog">
      <ul>
        <li v-for="item in pLanguages">{{item}}</li>
      </ul>
    </slot>
  </div>
</template>

<script>

export default {
  name: 'MyScopeSlot',
  data() {
    return {
      // 这是当前组件自己渲染slot的数据
      pLanguages: ['JavaScript', 'C++', 'Java', 'C#', 'Python', 'Go', 'Swift'],
      // 这是用来暴露给外部组件的数据，可以不是当前组件自己渲染slot的数据pLanguages，也可以是
      dog:{
        name:"哈士奇3",
        age:"3"
      }
    }
  }
}
</script>

<style lang="less" scoped>

</style>



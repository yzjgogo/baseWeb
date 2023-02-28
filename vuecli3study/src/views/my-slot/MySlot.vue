<template>
  <div>
    <h3>具名插槽</h3>
    <my-name-slot/>
    <!--    使用slot="name" 的方式，可以不用<template/>包裹，也可以包裹-->
    <MyNameSlot>
      <span slot="center" style="background-color: #6CD559">新内容1</span>
    </MyNameSlot>

    <!--      使用v-slot:name 的方式，需要用<template/>包裹，高版本的vue支持，2.6.xx就支持,当前项目是^2.6.14-->
    <MyNameSlot>
      <template v-slot:center>
        <span slot="center" style="background-color: #2eaae0">新内容2</span>
      </template>
    </MyNameSlot>

    <!--      使用#name 的方式，需要用<template/>包裹，这是v-slot:name的简写方式，高版本的vue支持，2.6.xx就支持,当前项目是^2.6.14-->
    <MyNameSlot>
      <template #center>
        <span slot="center" style="background-color: #f8b38d">新内容3</span>
      </template>
    </MyNameSlot>



    <div>-------------------------------------------------------------------------------------------------------</div>



    <h3>作用域插槽</h3>
    <MyScopeSlot/>
<!--    使用slot-scope='anystr' 的方式，anystr可任意定义，anyStrProperty要和MyScopeSlot里面定义的:anyStrProperty一样-->
    <MyScopeSlot>
      <template slot-scope="anystr">
        <span>{{anystr.anyStrProperty.name}}</span>
      </template>
    </MyScopeSlot>
    <!--    使用v-slot='anystr' 的方式，anystr可任意定义，anyStrProperty要和MyScopeSlot里面定义的:anyStrProperty一样，高版本的vue支持，2.6.xx就支持,当前项目是^2.6.14-->
    <MyScopeSlot>
      <template v-slot="anystr">
        <span>{{anystr.anyStrProperty.name}}</span>
      </template>
    </MyScopeSlot>
    <!--    使用v-slot='anystr' 的方式(对象的解构赋值)，anystr可任意定义，anyStrProperty要和MyScopeSlot里面定义的:anyStrProperty一样，高版本的vue支持，2.6.xx就支持,当前项目是^2.6.14-->
    <MyScopeSlot>
      <template v-slot="{anyStrProperty}">
        <span>{{anyStrProperty.name}}</span>
      </template>
    </MyScopeSlot>

  </div>
</template>

<script>
  import MyNameSlot from "@/components/MyNameSlot";
  import MyScopeSlot from "@/components/MyScopeSlot";
export default {
  name: 'MySlot',
  components: {MyNameSlot, MyScopeSlot},
  data() {
    return {

    }
  }
}
</script>

<style lang="less" scoped>

</style>



<template>
  <div>
    <h3 style="margin-top: 50px">只有一个没名字的插槽</h3>
    <MyNormalSlot></MyNormalSlot>
    <MyNormalSlot>
      <!-- 可以包裹多个元素 -->
      <span>我替换默认的插槽内容</span>
      <span>我替换默认的插槽内容</span>
    </MyNormalSlot>

    <h3 style="margin-top: 50px">具名插槽</h3>

    <!-- 不使用插槽，全用默认的 -->
    <my-name-slot />

    <!--    使用slot="name" 的方式-->
    <MyNameSlot>
      <!-- 这个span会找到里面没有名字的插槽替换 -->
      <span>有名</span>
      <span slot="center" style="background-color: #6cd559"
        >使用slot="name" 的方式</span
      >
    </MyNameSlot>

    <!--    使用slot="name" 的方式并用<template/>包裹-->
    <MyNameSlot>
      <template slot="center">
        <span style="background-color: #6cd559"
          >使用slot="name" 的方式并用template包裹</span
        >
      </template>
    </MyNameSlot>

    <!--      使用v-slot:name 的方式，需要用<template/>包裹，高版本的vue支持，2.6.xx就支持,当前项目是^2.6.14-->
    <MyNameSlot>
      <template v-slot:center>
        <span slot="center" style="background-color: #2eaae0"
          >使用v-slot:name
          的方式，需要用template包裹，高版本的vue支持，2.6.xx就支持,当前项目是^2.6.14</span
        >
      </template>
    </MyNameSlot>

    <!--      使用#name 的方式，需要用<template/>包裹，这是v-slot:name的简写方式，高版本的vue支持，2.6.xx就支持,当前项目是^2.6.14-->
    <MyNameSlot>
      <template #center>
        <span slot="center" style="background-color: #f8b38d"
          >使用#name
          的方式，需要用template包裹，这是v-slot:name的简写方式，高版本的vue支持，2.6.xx就支持,当前项目是^2.6.14</span
        >
      </template>
    </MyNameSlot>

    <!-- 使用#default找到没有命名的插槽 -->
    <MyNameSlot>
      <template #default>
        <span slot="center" style="background-color: #f8b38d"
          >使用#default找到没有命名的插槽</span
        >
      </template>
    </MyNameSlot>

    <h3 style="margin-top: 50px">$slots的用法</h3>
    <MyDollarSlot>
      <div slot="head">我是外部传过来的头部</div>
    </MyDollarSlot>

    <h3 style="margin-top: 50px">作用域插槽</h3>

    <!--作用域插槽:子组件提供数据，父组件提供样式-->
    <!--即：父组件替换插槽的标签，但是数据由子组件来提供-->

    <MyScopeSlot />

    <!--    使用slot-scope='anystr' 的方式，anystr可任意定义，anyStrProperty要和MyScopeSlot里面定义的:anyStrProperty一样-->
    <MyScopeSlot>
      <template slot-scope="anystr">
        <span>{{ anystr.anyStrProperty.name }}</span>
      </template>
    </MyScopeSlot>

    <!--    使用v-slot='anystr' 的方式，anystr可任意定义，anyStrProperty要和MyScopeSlot里面定义的:anyStrProperty一样，高版本的vue支持，2.6.xx就支持,当前项目是^2.6.14-->
    <MyScopeSlot>
      <template v-slot="anystr">
        <span>{{ anystr.anyStrProperty.name }}</span>
      </template>
    </MyScopeSlot>
    <!--    使用v-slot='anystr' 的方式(对象的解构赋值)，anystr可任意定义，anyStrProperty要和MyScopeSlot里面定义的:anyStrProperty一样，高版本的vue支持，2.6.xx就支持,当前项目是^2.6.14-->
    <MyScopeSlot>
      <template v-slot="{ anyStrProperty }">
        <span>{{ anyStrProperty.name }}</span>
      </template>
    </MyScopeSlot>

    <MyScopeSlot>
      <template #default="{ anyStrProperty }">
        <span>--{{ anyStrProperty.name }}</span>
      </template>
    </MyScopeSlot>

    <MyScopeSlot>
      <template #default="aaa">
        <span>**{{ aaa.anyStrProperty.name }}</span>
      </template>
    </MyScopeSlot>
  </div>
</template>

<script>
import MyDollarSlot from '@/components/MyDollarSlot'
import MyNormalSlot from '@/components/MyNormalSlot'
import MyNameSlot from '@/components/MyNameSlot'
import MyScopeSlot from '@/components/MyScopeSlot'
export default {
  name: 'MySlot',
  components: { MyNormalSlot, MyNameSlot, MyScopeSlot, MyDollarSlot },
  data() {
    return {}
  }
}
</script>

<style lang="less" scoped></style>

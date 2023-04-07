<template>
    <div>
<!--
搜索关键字：公共样式使用步骤-x
-->
<!--
公共样式使用步骤-3：
在任意组件任意位置按需使用公共样式即可，之所以引用得到就是因为在App.vue中已经引入，而当前vue组件总是在<App/>里
-->
        <div class="common_bg">任意内容，使用了项目的公共样式</div>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        methods: {

        }
    }
</script>

<style lang="less" scoped>

</style>



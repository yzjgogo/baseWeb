<template>
    <div>
        {{value}}
    </div>
</template>

<script>

    export default {
        name: 'ComponentForVModel',
        props:{
            value:{
                type:String,
                default:"我是默认值",
                required:true
            }
        }
    }
</script>

<style lang="less" scoped>

</style>



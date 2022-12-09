<template>
    <div class="m-root">
        <!--        前提：
                    这里element-ui和校本云的一样，^2.13.0
                    引入方式参考官方文档：https://element.eleme.cn/2.13/#/zh-CN/component/quickstart 的完整引入
                    每次回忆都看看看看官方文档，因为这里的内容不全，只是为了方便入手，官方文档很全(属性、插槽、事件等)
        -->

        <!--        dialog的官方文档：https://element.eleme.cn/2.13/#/zh-CN/component/dialog
        visible.sync:决定dialog的显示和隐藏
        open:是dialog打开的回调
        before-close：仅当用户通过点击关闭图标或遮罩关闭 Dialog 时起效。如果你在 footer 具名 slot 里添加了用于关闭 Dialog 的按钮，那么可以在按钮的点击回调函数里加入 before-close 的相关逻辑。
        -->
        <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>
        <el-dialog
                title="提示"
                :visible.sync="dialogVisible"
                width="30%"
                :before-close="handleClose"
                @open="whenOpen">
            <span style="background-color: #2eaae0">这是一段信息</span>
            <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
        </el-dialog>

        <div style="background-color: yellow;width: 600px;color: green;margin: 10px">Checkbox多选框</div>
        <p>1、单独使用一个el-checkbox:两种状态之间的切换：</p>
        <!--
         `checked` 为 true 或 false
         单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍。
         在el-checkbox元素中定义v-model绑定变量，单一的checkbox中，默认绑定变量的值会是Boolean，选中为true
         v-model双向绑定：vue.data.checked发生boolean变化，会触发el-checkbox选中或取消；el-checkbox选中或取消会修改vue.data.checked的值为true或false
         -->
        <el-checkbox v-model="checked" :disabled="false">备选项1</el-checkbox>



        <p>2、禁用el-checkbox:设置disabled</p>
<!--        所谓禁用，只是不能再通过鼠标点击改变选中状态，不影响checkbox当前是否选中，以及checkbox的值-->
<!--        没选择状态下禁用-->
        <el-checkbox v-model="checked2" disabled>备选项2</el-checkbox>
<!--        选中状态下禁用-->
        <el-checkbox v-model="checked3" disabled>备选项3</el-checkbox>
<!--        使用v-bind:disabled="返回boolean类型的表达式" 动态实现是否禁用-->
        <el-checkbox v-model="checked4" :disabled="10>0">备选项3</el-checkbox>




        <p>3、多选框组</p>
<!--
适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。
checkbox-group元素能把多个 checkbox 管理为一组，只需要在 Group 中使用v-model绑定Array类型的变量即可。
el-checkbox 的 label属性是该 checkbox 对应的值，若该标签中无内容，则该属性也充当 checkbox 按钮后的介绍。
若该标签中有内容，这个内容纯粹就是个介绍并不是checkbox对应的值，label仍然是其对应的值。
label与数组中的元素值相对应，如果存在指定的值则为选中状态，否则为不选中。

点击某个el-checkbox选中了对应的label值放入checkList,取消选中则对应的label值从checkList中移除；因为用的v-model,vue.data.checkList里的元素发生变化也会
反向影响group里的checkbox的选中与否，如果checkList里的元素能在group中找到对应的label则对应的checkbox选中，否则不选中，
如果checkList里的元素不能在group中找到，也没啥影响，就纯粹是多余的而已，不会影响group里的checkbox的选中与否

关键点：
1：label就是checkbox的值
2：如果checkbox标签中无内容则label也是checkbox后面的介绍
3：v-model实现checkList与group里的checkbox的双向绑定
-->
        <el-checkbox-group v-model="checkList">
            <el-checkbox label="复选框 A"></el-checkbox>
            <el-checkbox label="复选框 B"></el-checkbox>
            <el-checkbox label="复选框 C"></el-checkbox>
            <el-checkbox label="禁用" disabled></el-checkbox>
            <el-checkbox label="选中且禁用" disabled></el-checkbox>
        </el-checkbox-group>

    </div>
</template>

<script>
    export default {
        name: 'MyElementUi',
        data() {
            return {
                dialogVisible: false,//dialog用
                checked:true,
                checked2:false,
                checked3:true,
                checked4:true,
                checkList: ['选中且禁用','复选框 A'],
            };
        },
        methods: {
            handleClose(done) {
                this.$confirm('确认关闭？')
                    .then(_ => {
                        done();
                    })
                    .catch(_ => {
                    });
            },
            //dialog打开时的回调
            whenOpen() {
                console.log('执行了whenopen')
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    /*<style scoped>*/

</style>

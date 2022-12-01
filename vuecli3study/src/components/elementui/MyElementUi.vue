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
    </div>
</template>

<script>
    export default {
        name: 'MyElementUi',
        data() {
            return {
                dialogVisible: false
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

// 1,安装vue : npm install vue@2.5.21 --save  这是运行时依赖，不应该安装命令不应该有'-dev'

//2,导入Vue
import Vue from 'vue'

//3,将vue示例与id==app的这个元素关联，'#app'在index.html里，其实就是id='app'的这个div就是这个vue的模板template，在其内部可使用这个vue的
//数据，例如访问data里的message
const app = new Vue({
    el:'#app',
    data:{
        message:'hello webpack vue'
    }
})

//4，此时npm run build运行index.html会报错，参考图片runtime-only不能编译template.png
//目前的解决方法webpack.config.js -> module.exports -> resolve -> alias -> 'vue$':'vue/dist/vue.esm.js'
//具体runtime-only和runtime-compiler的区别后面会讲

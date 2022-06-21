/**
    webpack使用vue的步骤：12345
 * */

//1,安装vue : npm install vue@2.5.21 --save  这是运行时依赖，安装命令不应该有'-dev'

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



//5，这里有个问题，参考3，随着业务的越来越复杂我们可能要频繁回到index.html里修改id='app'那个div里的内容，比如这里就在里面添加了{{message}}
//那以后要添加button等呢都要频繁去修改，这样不好，以后我们一般都是开发单页面应用(路由跳转)，我们应该整个项目从始至终都不回去修改index.html这个
// 文件才合理，那么怎么做呢，参考：05_webpack中使用Vue1

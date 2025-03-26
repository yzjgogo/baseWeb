const custom = require('./files/08.模块作用域')

//08.模块作用域内部没有做任何导出，因此看不到08.模块作用域里的内容
console.log(custom)
// console.log(window) 现在是node环境，不是浏览器，因此没有window
/*
你访问不到08.模块作用域里的内容，因为没有导出，因此其作用域只在其内部，你可能会疑惑之前浏览器开发时我们这样：
<script src="./08.模块作用域.js"></script>
<script src="./13模块化-模块作用域默认只在当前模块内除非导出.js"></script>
就可以在13模块化-模块作用域默认只在当前模块内除非导出.js中发访问username，这是因为浏览器会把这两个文件合并在一起，里面的所有变量都会挂到window上
而node不会，node只会把08.模块作用域.js当做一个模块，参考：E:\web\JsBase\05_JS高级\前端模块化
*/
// console.log(username) 
/*

Node.js 中的模块化规范
Node.js 遵循了 CommonJS 模块化规范，CommonJS 规定了模块的特性和各模块之间如何相互依赖。
CommonJS 规定：
① 每个模块内部，module 变量代表当前模块。
② module 变量是一个对象，它的 exports 属性（即 module.exports）是对外的接口。
③ 加载某个模块，其实是加载该模块的 module.exports 属性。require() 方法用于加载模块

参考：E:\web\JsBase\05_JS高级\前端模块化\2-CommonJS模块化举例
*/
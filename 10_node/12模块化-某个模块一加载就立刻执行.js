
// 注意你现在是在node环境，不是浏览器环境
//require是nodejs的一个模块，用来加载其他模块，不是浏览器的

// 注意：使用 require 加载用户自定义模块期间，
// 可以省略 .js 的后缀名
//06.m1.js一旦加载就会立刻执行，不想之前android开发那样,这个逻辑跟之前浏览器开发js的逻辑一样
const m1 = require('./files/06.m1.js')
console.log(m1)

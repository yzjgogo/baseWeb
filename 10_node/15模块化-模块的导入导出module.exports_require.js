// 进入11.自定义模块.js文件看看注释
const m = require('./files/11.自定义模块')

console.log(m)

//直接结构赋值
const {nickname,sayHi} = require('./files/11.自定义模块')
console.log(nickname)
sayHi()

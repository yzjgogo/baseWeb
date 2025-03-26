/*

看：itheima-tools文件夹

*/
//虽然没有require('./itheima-tools/index.js')，但是nodejs会自动加载itheima-tools文件夹下的index.js文件,因为node会进package.json文件看看main字段指向的文件
const tool = require('./itheima-tools')
const str = tool.dateFormat(new Date())
console.log(str)
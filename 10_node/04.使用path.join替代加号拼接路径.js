const path = require('path')
const fs = require('fs')

// 注意：  ../ 会抵消前面的路径
const pathStr1 = path.join('/a', '/b/c','./d', 'e')
console.log(pathStr1)  // \a\b\c\d\e

const pathStr2 = path.join('/a', '/b/c', '../', './d', 'e')
console.log(pathStr2)  // \a\b\d\e  注意：  ../ 会抵消前面的路径

const pathStr3 = path.join('/a', '/b/c', '../../', './d', 'e')
console.log(pathStr3)  // \a\d\e 注意：  ../ 会抵消前面的路径

//相比用加号拼接路径更为安全，不易出错
fs.readFile(path.join(__dirname, './files/1.txt'), 'utf8', function(err, dataStr) {
  if (err) {
    return console.log("读取失败",err.message)
  }
  console.log("读取成功",dataStr)
})

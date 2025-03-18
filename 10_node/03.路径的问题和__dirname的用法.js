const fs = require('fs')

// 我cd到E:\web\baseWeb，然后执行 node .\10_node/03.路径的问题.js，结果报错：Error: ENOENT: no such file or directory, open 'E:\web\baseWeb\files\1.txt'
// 出现路径拼接错误的问题，是因为提供了 ./ 或 ../ 开头的相对路径
// 如果要解决这个问题，可以直接提供一个完整的文件存放路径就行
// fs.readFile('./files/1.txt', 'utf8', function(err, dataStr) {
//   if (err) {
//     return console.log('读取文件失败！' + err.message)
//   }
//   console.log('读取文件成功！' + dataStr)
// })

// 虽然能解决路径拼接问题，但是移植性非常差、不利于维护
// fs.readFile('E:\\web\\baseWeb\\10_node\\files\\1.txt', 'utf8', function(err, dataStr) {
//   if (err) {
//     return console.log('读取文件失败！' + err.message)
//   }
//   console.log('读取文件成功！' + dataStr)
// })


// 完美解决路径问题，使用 __dirname
// __dirname 表示当前文件所处的目录，此时就是‘03.路径的问题和__dirname的用法.js’所在的目录
console.log('当前目录', __dirname) //E:\web\baseWeb\10_node

fs.readFile(__dirname + '/files/1.txt', 'utf8', function (err, dataStr) {
  if (err) {
    return console.log('读取文件失败！' + err.message)
  }
  console.log('读取文件成功！' + dataStr)
})

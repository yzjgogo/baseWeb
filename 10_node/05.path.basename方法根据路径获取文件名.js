const path = require('path')

// 定义文件的存放路径
const fpath = '/a/b/c/index.html'

// path.basename() 方法用于返回一个 path 的最后一部分，类似于 Unix 的 basename 命令，即根据路径获取文件名，带后缀
const fullName = path.basename(fpath)
console.log("看看fullName", fullName)//index.html

//根据路径获取文件名，不带后缀,如果确实是.html结尾的则返回不带后缀的文件名
const nameWithoutExt = path.basename(fpath, '.html')
console.log("看看nameWithoutExt", nameWithoutExt)//index

//因为不是以.txt结尾的，所以返回的还是原来的文件名带后缀
const nameWithoutEx2 = path.basename(fpath, '.txt')
console.log("看看nameWithoutExt2", nameWithoutEx2)//index.html

// https://blog.csdn.net/qq_44708990/article/details/119522921
//遍历某个文件夹下的指定文件类型，获取文件的内容
//require.context("要遍历的文件夹",是否遍历子文件夹,要遍历的文件类型)
//modules是一个函数类型，有keys()方法，keys()方法返回所有.js文件的相对路径：['./classics-read/index.js', './index.js']
const modules = require.context('../modules', true, /\.js$/)
// console.log(modules.keys()) //['./classics-read/index.js', './index.js']
const routers = []
modules.keys().forEach(key => {
    const mod = modules(key).default
  //default就是js文件里export default obj里的obj，例如这里就是./classics-read/index.js里的[数组]
  //当前的所在的这个./index.js也被遍历，但是遍历时还没遇到export default因此这个default此时还是undefine
    const modList = Array.isArray(mod) ? [...mod] : [mod]
    mod && routers.push(...modList)
})
export default routers

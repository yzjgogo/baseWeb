//node全局有一个path,去node包里(node_modules里？)找这个path,
// 因为没有('./')之类的，说明不是从自己的项目找
const path = require('path')

module.exports = {
  //定义webpack识别js文件的入口
  entry: './src/main.js',
  //定义webpack构建js的结果出口
  output: {
    //resolve()：动态获取绝对路径，这里获取dist的路径
    //__dirname是全局变量，来自node
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
}
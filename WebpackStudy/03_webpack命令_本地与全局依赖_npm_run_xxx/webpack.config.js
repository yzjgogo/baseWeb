/**
 webpack.config.js到目前为止这个文件的名字固定，后面会讲怎么修改这个文件的名字(2022.08.29其实很简答：看package.json -> scripts -> build2)

 'webpack ./src/main.js ./dist/bundle.js'简化为'webpack'的方案

 require('path') 获取node里的path模块

 entry用于指定打包入口文件的名字

 resolve()属于path模块的方法用于对两个路径进行拼接，其中__dirname是一个全局变量，就是webpack.config.js所属的路径，然后再在其后面拼接'dist'就是'./dist'了

 filename用于指定打包出口文件的名字
 */
const path = require('path')

module.exports = {
    entry: './src/main.js',
    output:{
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    }
}
//path.join(path1,path2,...) 和 path.resolve(path1,path2,...)的理解：join()纯粹是路径的拼接很简答直观的理解；
// resolve()是返回绝对路径，从右向左开始拼接遇到绝对路径就结束不再向左拼接，如果没遇到接拼完后再在前面加上系统路径
//https://www.jianshu.com/p/f2b4653e42e3
//https://nodejs.org/api/path.html#pathresolvepaths
//对比：E:\web\baseWeb\WebpackStudy\03_webpack命令_本地与全局依赖_npm_run_xxx\webpack.config.js
const path = require('path')
const fs = require('fs')
const { CodeInspectorPlugin } = require('code-inspector-plugin')
function resolve(dir) {
  // 设置绝对路径
  return path.join(__dirname, dir) //__dirname就是当前这个vue.config.js所在的路径
}
module.exports = {
  transpileDependencies: true,
  /*
  //给路径指定别名的方式1：
  configureWebpack: {
    resolve: {
      alias: {
        // '@' 是 './src' 的别名，vue-cli 默认配置
        '@views': '@/views'
      }
    }
  }
  */

  devServer: {
    // https: {
    //   cert: fs.readFileSync(path.join(__dirname, 'src/ssl/cert.crt')),
    //   key: fs.readFileSync(path.join(__dirname, 'src/ssl/cert.key'))
    // }
  },
  configureWebpack: {
    plugins: [
      CodeInspectorPlugin({
        bundler: 'webpack'
      })
    ]
  },
  //给路径指定别名的方式2：注意resolve()方法是上面定义的
  chainWebpack: (config) => {
    config.resolve.alias
      // set(别名, 路径)
      // .set('@', resolve('./src'))
      .set('@views', resolve('./src/views'))
  }
}
